<?php

namespace App\Http\Controllers\Articles;

use App\Jobs\LikeArticle as LikeArticleJob;
use App\Jobs\UnlikeArticle as UnlikeArticleJob;
use App\Concerns\UsesFilters;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Authenticate;
use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Jobs\CreateArticle;
use App\Jobs\DeleteArticle;
use App\Jobs\UpdateArticle;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use App\Models\Channel;
use App\Models\User;
use App\Policies\ArticlePolicy;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Foundation\Bus\DispatchesJobs;

class ArticlesController extends Controller
{
    use UsesFilters;

    use DispatchesJobs;


    public function __construct()
    {
        $this->middleware([Authenticate::class, EnsureEmailIsVerified::class], ['except' => [
            'index',
            'show',
            'tagindex',
            'channelindex',
            'replies',
            'morefromus',
            'authorarticle',
            'channelrelatedarticle'
        ]]);
    }

    public function index(Request $request)
    {
        $filter = $this->getFilter(['recent', 'popular', 'trending']);

        $pinnedArticles = Article::published()
            ->pinned()
            ->latest('submitted_at')
            ->take(4)
            ->get();

        $articles = Article::published()
            ->notPinned()
            ->{$filter}();

        // $articles->load('authorRelation');
        $tags = Tag::whereHas('articles', function ($query) {
            $query->published();
        })->orderBy('name')->get();

        if ($activeTag = Tag::where('slug', $request->tag)->first()) {
            $articles->forTag($activeTag->slug());
        }
        $channels = Channel::whereHas('articles', function ($query) {
            $query->published();
        })->orderBy('name')->get();

        if ($activeChannel = Channel::where('slug', $request->channel)->first()) {
            $articles->forChannel($activeChannel->slug());
        }

        $moderators = Cache::remember('moderators', now()->addMinutes(30), function () {
            return User::moderators()->get();
        });

        $canonical = canonical('articles', ['filter' => $filter, 'tag' => $activeTag?->slug(), 'channel' => $activeChannel?->slug()]);
        $topAuthors = Cache::remember('topAuthors', now()->addMinutes(30), function () {
            return User::mostSubmissionsInLastDays(365)->take(5)->get();
        });

        return Inertia::render('Article/Overview', [
            'pinnedArticles' => $pinnedArticles,
            'articles' => $articles->paginate(10),
            'tags' => $tags,
            'activeTag' => $activeTag,
            'channels' => $channels,
            'activeChannel' => $activeChannel,
            'filter' => $filter,
            'moderators' => $moderators,
            'canonical' => $canonical,
            'topAuthors' => $topAuthors,
        ]);
    }

    public function show(Channel $channel, Article $article)
    {

        $user = Auth::user();
        // $channelid =  Article::query();

        abort_unless($article->channelsRelation->contains($channel), 404,);
        abort_unless(
            $article->isPublished() || ($user && ($article->isAuthoredBy($user) || $user->isAdmin() || $user->isModerator())),
            404,
        );

        $article->meta;

        $article->loadCount('repliesRelation');
        $trendingArticles =
            Article::published()
            ->trending()
            ->whereKeyNot($article->id)
            ->limit(18)
            ->get();

        return Inertia::render('Article/ShowArticle', [

            'readTime' =>  $article->readTime(),
            'article' => $article,
            'author' => $article->authorRelation,
            'tags' => $article->tagsRelation,
            'likes' => $article->loadCount('likesRelation'),
            'trendingArticles' => $trendingArticles,
        ]);
    }

    public function create(Request $request)
    {
        $tags = Tag::query();
        $channels = Channel::query();

        if (!$request->user()->isAdmin()) {
            $tags = $tags->public();
            $channels = $channels->public();
        }

        return Inertia::render('Article/CreateArticle', [
            'tags' => $tags->get(),
            'selectedTags' => old('tags', []),
            'channels' => $channels->get(),
            'selectedChannels' => old('channels', []),
            'editor' => 'create'
        ]);
    }

    public function store(ArticleRequest $request)
    {
        $this->dispatchSync(CreateArticle::fromRequest($request, $uuid = Str::uuid()));

        $article = Article::findByUuidOrFail($uuid);


        $this->success($request->shouldBeSubmitted() ? 'articles.submitted' : 'articles.created');
        $channel = $article->channelsRelation[0]->slug;
        return $request->wantsJson()
            ? ArticleResource::make($article)
            : redirect()->route('articles.show', [$channel, $article->slug()]);
    }

    public function edit(Request $request, Article $article)
    {
        $this->authorize(ArticlePolicy::UPDATE, $article);

        $tags = Tag::query();
        $channels = Channel::query();

        if (!$request->user()->isAdmin()) {
            $tags = $tags->public();
            $channels = $channels->public();
        }
        $article->meta;
        return Inertia::render('Article/EditArticle', [
            'article' => $article,
            'channels' => $channels->get(),
            'selectedChannels' => old('channels',  $article->channels()),
            'tags' => $tags->get(),
            'selectedTags' => old('tags', $article->tags()),
            'editor' => 'edit'

        ]);
    }

    public function update(ArticleRequest $request, Article $article)
    {
        $this->authorize(ArticlePolicy::UPDATE, $article);

        $wasNotPreviouslySubmitted = $article->isNotSubmitted();

        $this->dispatchSync(UpdateArticle::fromRequest($article, $request));

        $article = $article->fresh();

        if ($wasNotPreviouslySubmitted && $request->shouldBeSubmitted()) {
            $this->success('articles.submitted');
        } else {
            $this->success('articles.updated');
        }
        $channel = $article->channelsRelation[0]->slug;
        return $request->wantsJson()
            ? ArticleResource::make($article)
            : redirect()->route('articles.show',  [$channel, $article->slug()]);
    }

    public function delete(Request $request, Article $article)
    {
        $this->authorize(ArticlePolicy::DELETE, $article);

        $this->dispatchSync(new DeleteArticle($article));

        $this->success('articles.deleted');

        return $request->wantsJson()
            ? response()->json([], Response::HTTP_NO_CONTENT)
            : redirect()->route('articles');
    }

    public function tagindex(Request $request)
    {
        $tags = Tag::query();

        // if (!auth()->user()->isAdmin) {
        //     $tags = $tags->public();
        // }

        return  $tags->get();
    }
    public function channelindex(Request $request)
    {
        $channels = Channel::query();

        // if (!auth()->user()->isAdmin) {
        //     $channels = $channels->public();
        // }

        return  $channels->get();
    }


    public function toggleLike(Article $article)
    {
        if (Auth::guest()) {
            return;
        }

        if ($article->isLikedBy(Auth::user())) {
            $this->dispatchSync(new UnlikeArticleJob($article, Auth::user()));
        } else {
            $this->dispatchSync(new LikeArticleJob($article, Auth::user()));
        }

        return $article->loadCount('likesRelation');
    }

    public function replies(Article $article)
    {
        $replies = $article->repliesRelation()->orderBy('created_at', 'desc')->paginate(10);
        return response()->json($replies);
    }
    public function morefromus()
    {

        $articles = article::published()
            ->Lastsevendays()
            ->inRandomOrder()
            ->limit(7)
            ->get();
        return $articles;
    }


    public function authorarticle($id)
    {
        // return 'heool';
        $articles = Article::where('author_id', $id)
            ->published()
            ->inRandomOrder()
            ->limit(5)
            ->get();
        return $articles;
    }




    public function channelrelatedarticle($id)
    {
        $articles = Article::whereRelation('channelsRelation', 'slug', $id)
            ->published()
            ->inRandomOrder()
            ->limit(6)
            ->get();

        return $articles;
    }
}

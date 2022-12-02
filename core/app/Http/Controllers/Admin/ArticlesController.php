<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Middleware\VerifyAdmins;
use App\Jobs\ApproveArticle;
use App\Jobs\DeclineArticle;
use App\Jobs\DisapproveArticle;
use App\Models\Article;
use App\Policies\ArticlePolicy;
use App\Queries\SearchArticles;
use Illuminate\Auth\Middleware\Authenticate;

use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Models\Meta;
use App\Models\Traits\addNotice;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Collection;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use function PHPUnit\Framework\isEmpty;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function __construct()
    {
        $this->middleware([Authenticate::class, VerifyAdmins::class]);
    }

    public function index()
    {

        if ($adminSearch = request('admin_search')) {
            $articles = SearchArticles::get($adminSearch)->appends(['admin_search' => $adminSearch]);
        } else {
            $articles = Article::awaitingApproval()
                ->orderByDesc('submitted_at')
                ->paginate();
        }

        return Inertia::render('Admin/Article/Index', compact('articles', 'adminSearch'));
    }

    public function approve(Article $article)
    {
        $this->authorize(ArticlePolicy::APPROVE, $article);

        $this->dispatchSync(new ApproveArticle($article));

        $this->success('admin.articles.approved', $article->title());

        $channel = $article->channelsRelation[0]->slug;

        return redirect()->route('articles.show', [$channel, $article->slug()]);
    }

    public function disapprove(Article $article)
    {
        $this->authorize(ArticlePolicy::DISAPPROVE, $article);

        $this->dispatchSync(new DisapproveArticle($article));

        $this->success('admin.articles.disapproved', $article->title());

        $channel = $article->channelsRelation[0]->slug;

        return redirect()->route('articles.show', [$channel, $article->slug()]);
    }

    public function decline(Article $article)
    {
        $this->authorize(ArticlePolicy::DECLINE, $article);

        $this->dispatchSync(new DeclineArticle($article));


        $channel = $article->channelsRelation[0]->slug;

        return redirect()->route('articles.show', [$channel, $article->slug()]);
    }

    public function togglePinnedStatus(Article $article)
    {
        $this->authorize(ArticlePolicy::PINNED, $article);

        $article->is_pinned = !$article->isPinned();
        $article->save();

        $this->success($article->isPinned() ? 'admin.articles.pinned' : 'admin.articles.unpinned');


        $channel = $article->channelsRelation[0]->slug;

        return redirect()->route('articles.show', [$channel, $article->slug()]);
    }
}

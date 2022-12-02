<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Meta;
use App\Models\Traits\addNotice;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Collection;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use function PHPUnit\Framework\isEmpty;

class PostController extends Controller
{
    // use addNotice;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = QueryBuilder::for(Post::class)
            ->with('categories:name,slug', 'tags:name', 'authorRelation:id,name')
            ->withTrashed()
            ->defaultSort('created_at')
            ->allowedSorts(['id', 'title', 'created_at',])
            ->allowedFilters([
                AllowedFilter::scope('filter'), 'title', 'created_at'
            ])
            ->paginate(request('perPage'))
            ->withQueryString();
        return Inertia::render('Admin/Post/Index', [
            'posts' => $post,
        ])->table(function (InertiaTable $table) {
            $table
                ->withGlobalSearch()
                ->column(key: 'title',  sortable: true)
                ->column(label: 'Author')
                ->column(label: 'Categories',)
                ->column(label: 'Tags',)
                ->column(label: 'comment')
                ->column(key: 'created_at', label: 'Date',  sortable: true)
                ->selectFilter(
                    key: 'filter',
                    options: [
                        'all' => 'All',
                        'draft' => 'Draft',
                        'publish' => 'Publish',
                        'sheduled' => 'Sheduled',
                        'trashed' => 'Trashed',
                    ],
                    label: 'All Posts',
                    defaultValue: 'all',
                    noFilterOption: false,
                );
        });
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Post/CreateArticle');
    }


    public function store(StorePostRequest $request)
    {
        // return $request->meta;
        DB::beginTransaction();

        try {
            $blog = Post::create([
                'title' => $request->title,
                'excerpt' => $request->excerpt,
                'published' => $request->status,
                'publish_date' => $request->publish_date,
                'featured_image' => $request->featured_image,
                'allow_comment' => $request->allow_comment,
                'primary_category' => $request->categories[0],
                'user_id' => ($request->author == null) ? auth()->id() : $request->author,
                'content' => json_encode($request->content),
                'jsondata' => json_encode($request->jsondata),
            ]);

            // insert blog categories
            $cat = [];
            foreach ($request->categories as $key => $value) {
                array_push($cat, $value['id']);
            }
            $blog->categories()->sync($cat);
            $blog->syncTags($request->tags);
            // meta tags
            if (!isEmpty($request->meta)) {

                Meta::create([
                    'post_id' =>  $blog->id,
                    'keywords' => json_encode($request->meta['keywords']),
                    'meta_title' => $request->meta['meta_title'],
                    'meta_description' => $request->meta['meta_description'],
                    'opengraph_title' => $request->meta['opengraph_title'],
                    'opengraph_description' => $request->meta['opengraph_description'],
                    'opengraph_image' => $request->meta['opengraph_image'],
                    'opengraph_image_width' => $request->meta['opengraph_image_width'],
                    'opengraph_image_height' => $request->meta['opengraph_image_height'],
                    'twitter_title' => $request->meta['twitter_title'],
                    'twitter_description' => $request->meta['twitter_description'],
                    'twitter_image' => $request->meta['twitter_image'],
                    'twitter_cardtype' => $request->meta['twitter_cardtype'],

                ]);
            } else {

                Meta::create([
                    'post_id' =>  $blog->id
                ]);
            }

            DB::commit();
            // $this->addNotice('Created', __('successfully_added'), 'success', 3000);
            // $entry = Post::where('slug', $blog->slug)->with("tags:name", 'categories', 'meta')->get();
            // return Inertia::location('/backend/article/post/create/'.$blog->slug);
            //    return 
            //     Redirect::route('backend.article.post.create', $blog->slug );
            // return  redirect()->back('backend/article/post/create/'. $blog->slug)->send();
            
            return redirect()->intended(route('backend.article.post.create', $blog->slug));
            return redirect()->intended('backend/article/post/create/' . $blog->slug);
            // return redirect()->route('backend.article.post.create', $blog->slug );

        } catch (\Exception  $th) {
            DB::rollback();
            return $th;
        }
    }

    public function show($id = null)
    {

        if ($id === 'new') {
            return Inertia::render('Admin/Post/CreateArticle', [
                'entry' => Post::make([
                    'id' => 21,
                    'publish_date' => now()->format('Y-m-d H:i:00'),
                    'user_id' =>  auth()->id()
                ]),
                'url' => $id

            ]);
        }

        $entry = Post::where('slug', $id)->with("tags:name", 'categories')->get();
        return Inertia::render('Admin/Post/CreateArticle', [
            'entry' => $entry[0],
            'url' => $id

        ]);
        // return response()->json([
        //     'entry' => $entry,
        // ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}

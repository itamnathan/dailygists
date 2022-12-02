<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use App\Http\Resources\TagsResource;
use App\Models\Tag;
use Inertia\Inertia;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TagsController extends Controller
{


 /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('name', 'LIKE', "%{$value}%");
                });
            });
        });
        
        $tag = QueryBuilder::for(Tag::class)
        ->withCount('articles')
            ->defaultSort('id')
            ->allowedSorts(['id', 'name', 'slug', 'articles_count'])
            ->allowedFilters(['name', 'slug' ,'articles_count', 'id', $globalSearch])
            ->paginate(request('perPage'))
            ->withQueryString();


        return Inertia::render('Admin/Article/Tag', [
            'tags' => $tag,
        ])->table(function (InertiaTable $table) {
            $table
                ->withGlobalSearch()
                ->defaultSort('id')
                ->column(key: 'name',  sortable: true)
                ->column(key: 'slug',  sortable: true)
                ->column(key: 'articles_count', label: 'Count',  sortable: true);
        });
    }


 /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($slug)
    {
         $tag = Tag::where('slug',$slug)->first();
        return Inertia::render('Admin/Article/Edit/TagEdit', [
            'tag' => $tag,
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(TagRequest $request, $slug)
    {
        $node = Tag::find($slug);
        $node->name = $request->name;
        $node->slug = $request->name;
        $node->save();

        return  Redirect::route('backend.article.tag');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($slug)
    {
       Tag::where('slug',$slug)->delete();
    }

    public function apiindex()
    {
        // $entries = Tag::
        // // all();
        // when(request()->has('search'), function ($q) {
        //     $q->where('name', 'LIKE', '%'.request('search').'%')->translate('name', 'en');
        // })
            
        //     ->orderBy('created_at', 'DESC')
        //     ->withCount('articles')
        //     ->paginate(30);
            $variable= Tag::all('name');
            $tags = [];
            foreach ($variable as $key => $value) {
                array_push($tags,$value->name);
            }
            return $tags;
        // return TagsResource::collection($entries);
    }
    public function store(TagRequest $request)
    {
       
        $node = new Tag();
        $node->name = $request->name;
        $node->slug = $request->name;
        $node->save();
        
        // $link = new Link([
        //     'slug' => $node->slug
        // ]);
        // $node->link()->save($link);
    }
}

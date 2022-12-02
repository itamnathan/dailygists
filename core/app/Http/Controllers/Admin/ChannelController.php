<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ChannelRequest;
use App\Models\Channel;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use Intervention\Image\ImageManagerStatic as InterventionImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
class ChannelController extends Controller
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

        $channels = QueryBuilder::for(Channel::class)
            ->withCount('articles')
            ->defaultSort('id')
            ->allowedSorts(['id', 'name', 'description', 'slug', 'articles_count'])
            ->allowedFilters(['name', 'description', 'slug', 'articles_count',  'id', $globalSearch])
            ->paginate(request('perPage'))
            ->withQueryString();


        $allchannels = Channel::get();
        return Inertia::render('Admin/Article/Channel', [
            'allchannels' => $allchannels,
            'channels' => $channels
        ])->table(function (InertiaTable $table) {
            $table
                ->withGlobalSearch()
                ->defaultSort('id')
                ->column(key: 'name',  sortable: true)
                ->column(key: 'description',  sortable: true)
                ->column(key: 'slug',  sortable: true)
                ->column(key: 'articles_count', label: 'Count',  sortable: true);
        });
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('blog::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(ChannelRequest $request)
    {
        $node = new Channel();
        
        $node->name = $request->name;
        $node->slug = $request->name;
        $node->description = $request->description;
        $node->save();
    }
    public function quickstore(ChannelRequest $request)
    {
      
        $node = new Channel();
        
        $node->name = $request->name;
        $node->slug = $request->name;
        $node->save();
        return;
    }
    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('blog::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit(Channel $channel)
    {
      
        return Inertia::render('Admin/Article/Edit/ChannelEdit', [
            'channel' => $channel
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(ChannelRequest $request, $id)
    {
        $node = Channel::find($id);
        $node->name = $request->name;
        $node->slug = $request->name;
        $node->description = $request->description;
        if ($request->image) {
           $node->image = $request->image[0];
        }
        $node->color = $request->color;
        $node->save();

        return  Redirect::route('backend.article.channel');
    }


    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy(Channel $slug)
    {
        $slug->delete();
    }


    public function apiindex()
    {

        $cats =  Channel::get(['id','name','slug','image','color'])->toFlatTree();
        return $cats;
    }
}

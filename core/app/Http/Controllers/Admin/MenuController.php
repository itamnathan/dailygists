<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\StoremenuitemRequest;
use App\Models\menu;
use App\Http\Requests\MenuRequest;
use App\Models\menuitem;
use Inertia\Inertia;
use Modules\Blog\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Redirect;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Routing\Controller;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
        //     $query->where(function ($query) use ($value) {
        //         Collection::wrap($value)->each(function ($value) use ($query) {
        //             $query
        //                 ->orWhere('name', 'LIKE', "%{$value}%")
        //                 ->orWhere('parent_id', 'LIKE', "%{$value}%");
        //         });
        //     });
        // });

        // $categorys = QueryBuilder::for(Category::class)
        //     ->withCount('posts')
        //     ->defaultSort('id')
        //     ->allowedSorts(['id', 'name', 'description', 'slug', 'posts_count'])
        //     ->allowedFilters(['name', 'description', 'slug', 'posts_count', 'parent_id', 'id', $globalSearch])
        //     ->paginate(request('perPage'))
        //     ->withQueryString()->toFlatTree();


        // $categories = Category::get()->toFlatTree();
        return Inertia::render('Admin/Appearance/Menu', [
            // 'categories' => $categories,
            // 'categorys' => $categorys
        ])
            // ->table(function (InertiaTable $table) {
            //     $table
            //         ->withGlobalSearch()
            //         ->defaultSort('id')
            //         ->column(key: 'name',  sortable: true)
            //         ->column(key: 'description',  sortable: true)
            //         ->column(key: 'slug',  sortable: true)
            //         ->column(key: 'posts_count', label: 'Count',  sortable: true);
            // })

        ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function getmenus()
    {

        return Menu::all();
    }
    public function getmenu($id)
    {
        return menuitem::where('menu_id', $id)->get();
    }
    public function deletemenuitem($id)
    {
        menuitem::where('id',$id)->delete();
        return redirect()->back();
    }


    public function deletemenu($id)
    {
        menu::find($id)->delete();

        return 'hello';
        return Inertia::render('Admin/Appearance/Menu', [
           
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\MenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuRequest $request)
    {
        $menu = Menu::where('location', $request->location);
        if ($menu->exists()) {
            $menu->update([
                'location' => ''
            ]);
            Menu::create([
                'name' => $request->name,
                'location' => $request->location
            ]);
            return back();
        } else {
            Menu::create([
                'name' => $request->name,
                'location' => $request->location
            ]);
            return back();
        }
    }
    public function itemsstore(MenuRequest $request)
    {
        
        menuitem::create([
            'name' => $request->name,
            'href' => $request->href,
            'svg' => $request->svg,
            'menu_id' => $request->menu_id,
        ]);
        
        return back();
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatemenuRequest  $request
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(MenuRequest $request, menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(menu $menu)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Http\Requests\StoreBookmarkRequest;
use App\Http\Requests\UpdateBookmarkRequest;

use Illuminate\Support\Str;
use App\Jobs\CreateBookmark;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Inertia\Inertia;

class BookmarkController extends Controller
{

    use DispatchesJobs;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $bookmarks = Bookmark::where('author_id', auth()->id())->paginate(20);
        return Inertia::render('User/Bookmarked', ['bookmarks' => $bookmarks]);
    }
    public function bookmarked(StoreBookmarkRequest $request)
    {
        // dd($request->id);
        $this->dispatchSync(CreateBookmark::fromRequest($request, $uuid = Str::uuid()));


        // Bookmark::create([
        //     'uuid'=>'',
        //     'author_id'=> auth()->id(),
        //     'article_id'=> $id
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function removebookmark($id)
    {
        Bookmark::where('author_id',auth()->id())->where('article_id',$id)->delete();
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBookmarkRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookmarkRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bookmark  $bookmark
     * @return \Illuminate\Http\Response
     */
    public function show(Bookmark $bookmark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bookmark  $bookmark
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookmark $bookmark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBookmarkRequest  $request
     * @param  \App\Models\Bookmark  $bookmark
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBookmarkRequest $request, Bookmark $bookmark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bookmark  $bookmark
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookmark $bookmark)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        // $communityMembers = Cache::remember('communityMembers', now()->addMinutes(5), function () {
        //     return User::withCounts()
        //         ->hasActivity()
        //         ->whereNull('banned_at')
        //         ->inRandomOrder()
        //         ->take(100)
        //         ->get()
        //         ->chunk(20);
        // });

        // $totalUsers = Cache::remember('totalUsers', now()->addDay(), function () {
        //     return number_format(User::count());
        // });

        // $totalThreads = Cache::remember('totalThreads', now()->addDay(), function () {
        //     return number_format(Thread::count());
        // });

        // $totalReplies = Cache::remember('totalReplies', now()->addDay(), function () {
        //     return number_format(Reply::count());
        // });

        // $latestThreads = Cache::remember('latestThreads', now()->addHour(), function () {
        //     return Thread::whereNull('solution_reply_id')
        //         ->whereBetween('threads.created_at', [now()->subMonth(), now()])
        //         ->unlocked()
        //         ->inRandomOrder()
        //         ->limit(3)
        //         ->get();
        // });

        // $latestArticles = Cache::remember('latestArticles', now()->addHour(), function () {
        //     return Article::published()
        //         ->recent()
        //         ->limit(4)
        //         ->get();
        // });
        return Inertia::render('Home');
        // return Inertia::render('home', [
        //     'communityMembers' => $communityMembers,
        //     'totalUsers' => $totalUsers,
        //     'totalThreads' => $totalThreads,
        //     'totalReplies' => $totalReplies,
        //     'latestThreads' => $latestThreads,
        //     'latestArticles' => $latestArticles,
        // ]);
    }

    public function trending()
    {
        $latestArticles = Cache::remember('latestArticles', now()->addHour(), function () {
            return Article::published()
                ->recent()
                ->limit(6)
                ->get();
        });
        return $latestArticles;
    }

    public function latest()
    {
        
        // return Article::published()
        // ->recent()
        // ->limit(6)
        // ->get();
        // $filter = $this->getFilter(['recent', 'popular', 'trending']);

        $latestArticles = Cache::remember('latestArticles', now()->addHour(), function () {
            return Article::published()
                ->recent()
                ->limit(6)
                ->get();
        });
        
        $latestThreads = Cache::remember('latestThreads', now()->addHour(), function () {
            return Thread::whereNull('solution_reply_id')
                ->whereBetween('threads.created_at', [now()->subMonth(), now()])
                ->unlocked()
                ->inRandomOrder()
                ->limit(4)
                ->get();
        });
        $articles = Article::Live();
            // ->notPinned()
            // ->{$filter}();

        return [
                'latestThreads' => $latestThreads,
                'latestArticles' => $latestArticles
            ];
    }

}

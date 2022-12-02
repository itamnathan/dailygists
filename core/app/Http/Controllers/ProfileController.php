<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Article;
use App\Models\Reply;
use App\Models\Thread;
use Illuminate\Support\Facades\Cache;

class ProfileController extends Controller
{
    public function show(Request $request, User $user = null)
    {
        if ($user) {
            $articles = $user->latestArticles(3);
            return Inertia::render('User/Profile', [
                'articles' => $articles,
                'user' => $user
            ]);
        }

        if ($request->user()) {
            return redirect()->route('profile', $request->user()->username());
        }

        abort(404);
    }

    public function dashboard(Request $request)
    {
        $articles = $request->user()->latestArticles(3);

        return Inertia::render('User/Dashboard', [
            'articles' => $articles
        ]);
    }
    public function home(Request $request)
    {



        $communityMembers = Cache::remember('communityMembers', now()->addMinutes(5), function () {
            return User::withCounts()
                ->hasActivity()
                ->whereNull('banned_at')
                ->inRandomOrder()
                ->take(100)
                ->get()
                ->chunk(20);
        });

        $totalUsers = Cache::remember('totalUsers', now()->addDay(), function () {
            return number_format(User::count());
        });

        $totalThreads = Cache::remember('totalThreads', now()->addDay(), function () {
            return number_format(Thread::count());
        });

        $totalReplies = Cache::remember('totalReplies', now()->addDay(), function () {
            return number_format(Reply::count());
        });

        $latestThreads = Cache::remember('latestThreads', now()->addHour(), function () {
            return Thread::whereNull('solution_reply_id')
                ->whereBetween('threads.created_at', [now()->subMonth(), now()])
                ->unlocked()
                ->inRandomOrder()
                ->limit(3)
                ->get();
        });

        $latestArticles = Cache::remember('latestArticles', now()->addHour(), function () {
            return Article::published()
                ->recent()
                ->limit(4)
                ->get();
        });



        // $articles = $request->user()->latestArticles(3);

        return Inertia::render('User/Home', [

            'communityMembers' => $communityMembers,
            'totalUsers' => $totalUsers,
            'totalThreads' => $totalThreads,
            'totalReplies' => $totalReplies,
            'latestThreads' => $latestThreads,
            'latestArticles' => $latestArticles,
        ]);
    }

    public function apiindex()
    {
        return  User::get(['id', 'name']);
    }

    public function blockedusers(Request $request)
    {
        return $request->user()->blockedUsers;
    }

    public function tokens(Request $request)
    {
        return $request->user()->tokens;
    }


    public function notification()
    {
        $notifications = Auth::user()->unreadNotifications()->paginate(10);
        $lastPage = count($notifications) == 0 ? $notifications->lastPage() : null;

        return Inertia::render('User/Notifications',[
           'notifications'=> $notifications,
            'lastPage'=>$lastPage
        ]);
    }

    
    public function markAsRead(string $notificationId): void
    {
        $notification = DatabaseNotification::findOrFail($notificationId);

        $this->authorize(NotificationPolicy::MARK_AS_READ, $notification);

        $notification->markAsRead();

        $this->notificationCount--;

        $this->emit('NotificationMarkedAsRead', $this->notificationCount);
    }
}

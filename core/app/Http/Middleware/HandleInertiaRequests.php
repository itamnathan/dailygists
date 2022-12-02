<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

use App\Models\Setting;
use App\Models\Article;
use App\Models\menu;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        // if ($request->has('ref')) {
        //     session(['referrer' => $request->query('ref')]);
        // }


        $isAdmin = false;
        $writingaccess = false;
        if (auth()->check()) {
            $hasNotification =  $request->user()->unreadNotifications()->count();
            if ($request->user()->type == 7 || $request->user()->type == 6 || $request->user()->type == 5) {
                $isAdmin = true;
            }
            if ($request->user()->type == 7 || $request->user()->type == 6 || $request->user()->type == 5 || $request->user()->type == 4 || $request->user()->type == 3) {
                $writingaccess = true;
            }
        } else {
            $hasNotification = null;
        }
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'isAdmin' => $isAdmin,
                'writingaccess' => $writingaccess,
            ],

            'hasNotification' =>  $hasNotification,

            // 'posts' =>Cache::remember('latestArticles', now()->addHour(), function () {
            //     return Article::published()
            //         ->recent()
            //         ->limit(6)
            //         ->get();
            // }),
            'setting' => Setting::get()->first(),
            'menu' => menu::with('menuitem')->get(),
            'isLoggedIn' => auth()->check(),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}

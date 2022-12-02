<?php

namespace App\Http\Controllers\Articles;

use App\Http\Controllers\Controller;
use App\Http\Middleware\Authenticate;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthoredArticles extends Controller
{
    public function __construct()
    {
        $this->middleware([Authenticate::class, EnsureEmailIsVerified::class]);
    }

    public function __invoke(Request $request)
    {
        return Inertia::render('User/Articles', [
            'articles' => $request->user()
                ->articles()
                ->orderByDesc('submitted_at')
                ->orderByDesc('created_at')
                ->paginate(10),
        ]);
    }
}

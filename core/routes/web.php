<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Admin\ArticlesController as AdminArticlesController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Articles\ArticlesController;
use App\Http\Controllers\Articles\AuthoredArticles;
use App\Http\Controllers\Articles\channelController;
use App\Http\Controllers\Articles\ChannelsController;
// use App\Http\Controllers\Auth\ForgotPasswordController;
// use App\Http\Controllers\Auth\GithubController;
// use App\Http\Controllers\Auth\LoginController;
// use App\Http\Controllers\Auth\RegisterController;
// use App\Http\Controllers\Auth\ResetPasswordController;
// use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\BlockUserController;
use App\Http\Controllers\Forum\TagsController;
use App\Http\Controllers\Forum\ThreadsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MarkNotificationsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReplyAbleController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\Settings\ApiTokenController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController as ProfileSettingsController;
use App\Http\Controllers\Settings\UnblockUserController as UnblockUserSettingsController;
use App\Http\Controllers\SocialImageController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UnblockUserController;
use App\Http\Middleware\Authenticate;

use App\Http\Controllers\BookmarkController;

Route::feeds();

// Home
Route::get('/', [HomeController::class, 'show'])->middleware('referral')->name('home');
Route::view('rules', 'rules')->name('rules');
Route::view('terms', 'terms')->name('terms');
Route::view('privacy', 'privacy')->name('privacy');

Route::get('articles/{article}/social.png', SocialImageController::class)->name('articles.image');

// Sessions
// Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
// Route::post('login', [LoginController::class, 'login'])->name('login.post');
// Route::post('logout', [LoginController::class, 'logout'])->name('logout');

// // Registration
// Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('register');
// Route::post('register', [RegisterController::class, 'register'])->name('register.post');

// // Password reset
// Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.forgot');
// Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.forgot.post');
// Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
// Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset.post');

// Email address verification
// Route::get('email/verify', [VerificationController::class, 'show'])->name('verification.notice');
// Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
// Route::post('email/resend', [VerificationController::class, 'resend'])->name('verification.resend');

// // Social authentication
// Route::get('login/github', [GithubController::class, 'redirectToProvider'])->name('login.github');
// Route::get('auth/github', [GithubController::class, 'handleProviderCallback']);

// Users

Route::middleware(['auth', 'verified'])->group(function () {

    Route::prefix('users')->name('users.')->middleware(['auth', 'verified'])->group(function () {

        Route::get('/articles/following', function () {
            return Inertia::render('User/FollowingArticles');
        })->name('articles.following');
        Route::get('/edit', function () {
            return Inertia::render('User/EditProfile');
        })->name('edit');

        Route::get('/bookmark',[BookmarkController::class, 'index'])->name('bookmark');

        Route::get('/bookmark/{id}',[BookmarkController::class, 'bookmarked'])->name('bookmarked');

        Route::get('/removebookmark/{id}', [BookmarkController::class, 'removebookmark'])->name('removebookmark');

        Route::get('/submitarticle', function () {
            return Inertia::render('User/Submitarticle');
        })->name('submitarticle');
        Route::get('/settings', function () {
            return Inertia::render('User/Setting');
        })->name('settings');
        Route::get('/monetize', function () {
            return Inertia::render('User/Monetize');
        })->name('monetize');
    });
    Route::get('/currentusers/blockedusers', [ProfileController::class, 'blockedusers']);
    Route::get('/currentusers/tokens', [ProfileController::class, 'tokens']);
    Route::redirect('/dashboard', '/user/dashboard');
    Route::get('users/notification', [ProfileController::class, 'notification'])->name('users.notifications');
    Route::get('user/dashboard', [ProfileController::class, 'dashboard'])->name('user.dashboard');
    Route::get('user/home', [ProfileController::class, 'home'])->name('user.home');
    Route::get('user/{username?}', [ProfileController::class, 'show'])->name('profile');
    Route::put('users/{username}/block', BlockUserController::class)->name('users.block');
    Route::put('users/{username}/unblock', UnblockUserController::class)->name('users.unblock');

    // Notifications
    // Route::view('notifications', 'users.notifications')->name('notifications')->middleware(Authenticate::class);
    Route::post('notifications/mark-as-read', MarkNotificationsController::class)->name('notifications.mark-as-read');

    // Settings
    Route::get('settings', [ProfileSettingsController::class, 'edit'])->name('settings.profile');
    Route::put('settings', [ProfileSettingsController::class, 'update'])->name('settings.profile.update');
    Route::put('settings/avatar', [ProfileSettingsController::class, 'avatarupdate'])->name('settings.profile.avatar.update');
    Route::delete('settings', [ProfileSettingsController::class, 'destroy'])->name('settings.profile.delete');
    Route::put('settings/password', [PasswordController::class, 'update'])->name('settings.password.update');
    Route::put('settings/users/{username}/unblock', UnblockUserSettingsController::class)->name('settings.users.unblock');
    Route::post('settings/api-tokens', [ApiTokenController::class, 'store'])->name('settings.api-tokens.store');
    Route::delete('settings/api-tokens', [ApiTokenController::class, 'destroy'])->name('settings.api-tokens.delete');
});
// Forum
Route::prefix('forum')->group(function () {
    Route::get('/', [ThreadsController::class, 'overview'])->name('forum');
    Route::get('create-thread', [ThreadsController::class, 'create'])->name('threads.create');
    Route::post('create-thread', [ThreadsController::class, 'store'])->name('threads.store');

    Route::get('{thread}', [ThreadsController::class, 'show'])->name('thread');
    Route::get('{thread}/edit', [ThreadsController::class, 'edit'])->name('threads.edit');
    Route::put('{thread}', [ThreadsController::class, 'update'])->name('threads.update');
    Route::get('like/{thread}', [ThreadsController::class, 'toggleLike'])->name('threads.like');
    Route::get('replies/{thread}', [ThreadsController::class, 'replies'])->name('threads.replies');
    Route::delete('{thread}', [ThreadsController::class, 'delete'])->name('threads.delete');
    Route::post('{thread}/lock', [ThreadsController::class, 'lock'])->name('threads.lock');
    Route::put('{thread}/mark-solution/{reply}', [ThreadsController::class, 'markSolution'])->name('threads.solution.mark');
    Route::put('{thread}/unmark-solution', [ThreadsController::class, 'unmarkSolution'])->name('threads.solution.unmark');
    Route::post('{thread}/subscribe', [ThreadsController::class, 'subscribe'])->name('threads.subscribe');
    Route::post('{thread}/unsubscribe', [ThreadsController::class, 'unsubscribe'])->name('threads.unsubscribe');
    Route::post('{thread}/mark-as-spam', [ThreadsController::class, 'markAsSpam'])->name('threads.spam.mark');

    Route::get('tags/{tag}', [TagsController::class, 'show'])->name('forum.tag');
});

// Replies
Route::post('replies', [ReplyController::class, 'store'])->name('replies.store');
Route::delete('replies/{reply}', [ReplyController::class, 'delete'])->name('replies.delete');
Route::post('replies/{reply}/mark-as-spam', [ReplyController::class, 'markAsSpam'])->name('replies.spam.mark');
Route::get('replyable/{id}/{type}', [ReplyAbleController::class, 'redirect'])->name('replyable');

// Subscriptions
Route::get('subscriptions/{subscription}/unsubscribe', [SubscriptionController::class, 'unsubscribe'])
    ->name('subscriptions.unsubscribe');

// Articles

Route::prefix('articles')->group(function () {
    Route::get('authored', AuthoredArticles::class)->name('user.articles');
    Route::get('/', [ArticlesController::class, 'index'])->name('articles');
    Route::get('create', [ArticlesController::class, 'create'])->name('articles.create');
    Route::get('like/{article}', [ArticlesController::class, 'toggleLike'])->name('articles.like');
    Route::get('replies/{article}', [ArticlesController::class, 'replies'])->name('articles.replies');
    Route::post('/', [ArticlesController::class, 'store'])->name('articles.store');
    Route::get('{article}/edit', [ArticlesController::class, 'edit'])->name('articles.edit');
    Route::put('{article}', [ArticlesController::class, 'update'])->name('articles.update');
    Route::delete('{article}', [ArticlesController::class, 'delete'])->name('articles.delete');
    // Route::get('channels/{channel}', [ChannelsController::class, 'show'])->name('articles.channel');
});

// Admin
Route::prefix('admin')->name('admin')->group(function () {
    Route::get('/', [AdminArticlesController::class, 'index']);

    // Users
    Route::get('users', [UsersController::class, 'index'])->name('.users');
    Route::put('users/{username}/ban', [UsersController::class, 'ban'])->name('.users.ban');
    Route::put('users/{username}/unban', [UsersController::class, 'unban'])->name('.users.unban');
    Route::delete('users/{username}', [UsersController::class, 'delete'])->name('.users.delete');

    // Articles
    Route::put('articles/{article}/approve', [AdminArticlesController::class, 'approve'])->name('.articles.approve');
    Route::put('articles/{article}/disapprove', [AdminArticlesController::class, 'disapprove'])->name('.articles.disapprove');
    Route::put('articles/{article}/decline', [AdminArticlesController::class, 'decline'])->name('.articles.decline');
    Route::put('articles/{article}/pinned', [AdminArticlesController::class, 'togglePinnedStatus'])->name('.articles.pinned');
});


// category 
Route::get('/channel/{channel:slug}', [channelController::class, 'index'])->name('channel');
Route::get('/channel/edit/{slug}', [channelController::class, 'edit'])->name('channel.edit');
Route::post('/channel/store', [channelController::class, 'store'])->name('channel.store');
Route::post('/channel/update/{id}', [channelController::class, 'update'])->name('channel.update');
Route::DELETE('/channel/delete/{slug}', [channelController::class, 'destroy'])->name('channel.delete');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/', [HomeController::class, 'show'])->name('home');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/admin.php';
require __DIR__ . '/user.php';
Route::get('{channel:slug}/{article}', [ArticlesController::class, 'show'])->scopeBindings()->name('articles.show');
require __DIR__ . '/auth.php';
require __DIR__ . '/media.php';

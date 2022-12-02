<?php

use App\Http\Controllers\Admin\ArticlesController;
use App\Http\Controllers\Admin\ChannelController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\TagsController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth', 'isAdmin'])->prefix('backend')->name('backend.')->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('article')->name('article.')->group(function () {
        Route::name('article.')->group(function () {

            // posts 
            Route::get('/', [ArticlesController::class, 'index'])->name('index');
            Route::get('/article/create/{slug}', [ArticlesController::class, 'show'])->name('create');
            Route::get('/article/edit/{id}', [ArticlesController::class, 'edit'])->name('edit');
            Route::post('/article/store', [ArticlesController::class, 'store'])->name('store');
            Route::put('/article/update/{id}', [ArticlesController::class, 'update'])->name('update');
            Route::DELETE('/article/delete/{id}', [ArticlesController::class, 'destroy'])->name('delete');
        });
        // tags 
        Route::get('/tag', [TagsController::class, 'index'])->name('tag');
        Route::get('/tag/edit/{slug}', [TagsController::class, 'edit'])->name('tag.edit');
        Route::post('/tag/store', [TagsController::class, 'store'])->name('tag.store');
        Route::put('/tag/update/{id}', [TagsController::class, 'update'])->name('tag.update');
        Route::DELETE('/tag/delete/{slug}', [TagsController::class, 'destroy'])->name('tag.delete');
        // channel 
        Route::get('/channel', [ChannelController::class, 'index'])->name('channel');
        Route::get('/channel/edit/{channel:slug}', [ChannelController::class, 'edit'])->name('channel.edit');
        Route::post('/channel/store', [ChannelController::class, 'store'])->name('channel.store');
        Route::post('/channel/update/{id}', [ChannelController::class, 'update'])->name('channel.update');
        Route::DELETE('/channel/delete/{slug}', [ChannelController::class, 'destroy'])->name('channel.delete');
    });


    Route::prefix('menu')->name('menu.')->group(function () {
        Route::get('/', [MenuController::class, 'index'])->name('menu');
        Route::post('/store', [MenuController::class, 'store'])->name('store');
        Route::get('/delete/{id}', [MenuController::class, 'deletemenu'])->name('deletemenu');
        Route::get('/items/delete/{id}', [MenuController::class, 'deletemenuitem'])->name('items.deletemenuitem');
        Route::post('/items/store', [MenuController::class, 'itemsstore'])->name('items.store');
        Route::get('/createitems', [MenuController::class, 'createitems'])->name('createitems');

        Route::get('/items', [MediaController::class, 'items'])->name('items');
        // posts 
        // Route::get('/post', [PostController::class, 'index'])->name('post');
        // Route::get('/post/new', [PostController::class, 'create'])->name('post.new');
        // Route::get('/post/edit/{slug}', [PostController::class, 'edit'])->name('post.edit');
        // Route::post('/post/store', [PostController::class, 'store'])->name('post.store');
        // Route::put('/post/update/{id}', [PostController::class, 'update'])->name('post.update');
        // Route::DELETE('/post/delete/{slug}', [PostController::class, 'destroy'])->name('post.delete');

    });

    Route::prefix('user')->name('user.')->group(function () {

        // Users
        Route::put('users/{username}/edit', [UsersController::class, 'updateuser'])->name('users.edit.update');
        Route::get('users', [UsersController::class, 'index'])->name('users');
        Route::get('users/{username}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::put('users/{username}/ban', [UsersController::class, 'ban'])->name('users.ban');
        Route::put('users/{username}/unban', [UsersController::class, 'unban'])->name('users.unban');
        Route::delete('users/{username}', [UsersController::class, 'delete'])->name('users.delete');
    });
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::get('/', [SettingsController::class, 'index'])->name('index');
        Route::put('/settings', [SettingsController::class, 'update'])->name('update');
    });
    Route::prefix('media')->group(function () {
        Route::get('/', [MediaController::class, 'index'])->name('media');
        Route::get('/berg', [MediaController::class, 'berg'])->name('berg');
        // posts 
        // Route::get('/post', [PostController::class, 'index'])->name('post');
        // Route::get('/post/new', [PostController::class, 'create'])->name('post.new');
        // Route::get('/post/edit/{slug}', [PostController::class, 'edit'])->name('post.edit');
        // Route::post('/post/store', [PostController::class, 'store'])->name('post.store');
        // Route::put('/post/update/{id}', [PostController::class, 'update'])->name('post.update');
        // Route::DELETE('/post/delete/{slug}', [PostController::class, 'destroy'])->name('post.delete');

    });
});

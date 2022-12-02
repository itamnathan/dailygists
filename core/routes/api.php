<?php

use App\Http\Controllers\Admin\MenuController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Articles\ArticlesController;
use App\Http\Controllers\Articles\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Articles

Route::get('/menu/getmenus', [MenuController::class, 'getmenus']);
Route::get('/menu/{id}', [MenuController::class, 'getmenu']);
Route::get('/menu/{id}', [MenuController::class, 'getmenu']);
Route::get('/menu/location/{location}', [SitesettingsController::class, 'getheaderitems']);
Route::prefix('articles')->middleware('throttle:api')->group(function () {
    Route::post('/', [ArticlesController::class, 'store'])->name('api.articles.store');
    Route::put('{article}', [ArticlesController::class, 'update'])->name('api.articles.update');
    Route::delete('{article}', [ArticlesController::class, 'delete'])->name('api.articles.delete');
});


Route::get('/article/trending', [HomeController::class, 'trending']);

Route::get('/article/morefromus/', [articlesController::class, 'morefromus']);
Route::get('/article/latest', [HomeController::class, 'latest']);
Route::get('/article/channelrelatedarticle/{id}', [articlesController::class, 'channelrelatedarticle']);
Route::get('/article/authorarticles/{id}', [articlesController::class, 'authorarticle']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/authors', [ProfileController::class, 'apiindex'])->name('authors.index');
// Blog Cats...
Route::get('/categories', [CategoryController::class, 'apiindex'])->name('cats.index');
Route::get('/api/cats/{id?}', [CategoryController::class, 'show'])->name('cats.show');
Route::post('/api/catstore', [CategoryController::class, 'quickstore'])->name('cats.store');
Route::delete('/api/cats/{id}', [CategoryController::class, 'delete'])->name('cats.delete');

// Blog Tags...
Route::get('/channels', [ArticlesController::class, 'channelindex'])->name('channels.index');
Route::get('/tags', [ArticlesController::class, 'tagindex'])->name('tags.index');
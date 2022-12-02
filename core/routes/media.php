<?php

use App\Http\Controllers\Admin\MediaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



$name       = config('filemanager.name.prefix', 'mediamanager');
$middleware = config('filemanager.middleware', ['auth:sanctum']);
Route::prefix($name)->name('laravel-file-manager.')->middleware($middleware)->group(function () {
    Route::post('setup', [MediaController::class, 'setup'])->name('setup');
    Route::post('delete-images', [MediaController::class, 'deleteImages'])->name('delete-images');
    Route::post('delete-folder', [MediaController::class, 'deleteFolder'])->name('delete-folder');
    Route::post('create-folder', [MediaController::class, 'createFolder'])->name('create-folder');
    Route::post('upload-images', [MediaController::class, 'uploadImages'])->name('upload-images');
    Route::post('upload-image', [MediaController::class, 'uploadImage'])->name('upload-image');
    Route::post('ckuploadImage', [MediaController::class, 'ckuploadImage'])->name('ckuploadImage');
});

<?php


use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as InterventionImage;

function encodeSave($imageFile , $imageSize , $imageFormat , $savePath , $imageName){
    $imageOutput = InterventionImage::make($imageFile)->resize($imageSize , null, function ($constraint) {
        $constraint->aspectRatio();
    })->encode($imageFormat , 100);
    Storage::put($savePath . $imageName , $imageOutput);
}
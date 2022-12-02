<?php



function storagePath($imageSize)
{
    $folderName = config('filemanager.name.folder' , 'images');
    switch ($imageSize)
    {
        case 'lg':
            return 'public/'. $folderName .'/lg/';
        case 'md':
            return 'public/'. $folderName .'/md/';
        case 'sm':
            return 'public/'. $folderName .'/sm/';
        default:
            return 'public/'. $folderName .'/xl/';
    }
}
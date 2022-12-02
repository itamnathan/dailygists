<?php

use App\Models\User;

function userName($string)
{
    $name = strtolower(preg_replace("/[\s-]+/", "_", $string));
    $username =  $name;
    $i = 0;
    while (User::whereUsername($username)->exists()) {
        $i++;
        $username = $name . $i;
    }
    return $username;
}

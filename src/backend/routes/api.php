<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/





Route::group(['prefix' => 'admin', 'middleware' => 'role:Admin,api'], function () {
    require 'api/types/admin.php';
});
Route::group(['prefix' => 'user','middleware' => 'role:User,api'], function () {
    require 'api/types/user.php';
});

require 'api/types/guest.php';

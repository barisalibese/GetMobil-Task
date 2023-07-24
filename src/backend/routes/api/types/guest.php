<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\FoodController;
use Illuminate\Support\Facades\Route;


Route::post('/admin/login',[AdminController::class,'login']);
Route::post('/admin/login',[AdminController::class,'login']);
Route::post('/login',[UserController::class,'login']);
Route::post('/register',[UserController::class,'register']);
Route::get('/ingredients',[FoodController::class,'getIngredients']);
Route::get('/recipes',[FoodController::class,'getRecipes']);

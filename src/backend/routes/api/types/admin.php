<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\{
    FoodIngredientController,
    FoodRecipeController
};
Route::resource('ingredients',FoodIngredientController::class);
Route::resource('recipes',FoodRecipeController::class);

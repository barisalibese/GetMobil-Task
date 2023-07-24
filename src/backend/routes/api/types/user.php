<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\User\UserFridgeController;
Route::group(['prefix'=>'ingredients'],function (){
   Route::get('/',[UserFridgeController::class,'getIngredients']);
   Route::get('/:id',[UserFridgeController::class,'getIngredient']);
   Route::post('/',[UserFridgeController::class,'setIngredient']);
});
Route::get('random-recipe',[UserFridgeController::class,'getRandomRecipe']);

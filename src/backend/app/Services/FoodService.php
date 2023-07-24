<?php


namespace App\Services;


use App\Libraries\Response;
use App\Models\FoodIngredient;
use App\Models\FoodRecipe;

class FoodService
{
    public function getIngredients(){
        return new Response(Response::COMPLETE,'success',FoodIngredient::where('value','>',0)->get());
    }
    public function getRecipesWithIngredients(){
        return new Response(Response::COMPLETE,'success',
            FoodRecipe::with(['ingredients'])->get()
        );
    }
}

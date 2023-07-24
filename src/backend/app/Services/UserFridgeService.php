<?php


namespace App\Services;


use App\Libraries\Response;
use App\Models\FoodIngredient;
use App\Models\FoodRecipe;
use App\Models\User;
use App\Models\UserFridge;
use Illuminate\Support\Facades\Auth;

class UserFridgeService
{
    private User $user;

    public function __construct()
    {
        $this->user = auth('api')->user();
    }

    public function getUserIngredient($ingredient_id): Response
    {
        return new Response(Response::COMPLETE, 'Success', $this->user->ingredients()->wherePivot('ingredient_value', '>', 0)->where('food_ingredients.id', $ingredient_id)->first());
    }

    public function getUserIngredients(): Response
    {
        return new Response(Response::COMPLETE, 'Success', $this->user->ingredients()->wherePivot('ingredient_value', '>', 0)->get());
    }

    public function setUserIngredient($data): Response
    {
        $userFridge = UserFridge::where('food_ingredient_id', $data['id'])
            ->where('user_id', $this->user->id)->first();
        if (!empty($userFridge)) {
            $ingredient = $this->getUserIngredient($data['id'])->getBody();
            if ($ingredient->value > $data['value']) {
                $ingredient->value = $ingredient->value - $data['value'];
                $ingredient->save();
                $userFridge->ingredient_value = $data['value'] + $userFridge->ingredient_value;
                $userFridge->save();
                return new Response(Response::COMPLETE, 'Malzeme Başaraılı Bir Şekilde Alındı.');
            }
            return new Response(Response::FAILED, 'Almaya Çalışığınız Malzeme Değeri Stoktan ' . $data['value'] - $ingredient->value . ' kadar fazla');
        } else {
            $ingredient = FoodIngredient::where('value', '>', 0)->where('id', $data['id'])->first();
            if ($ingredient->value > $data['value']) {
                UserFridge::create([
                    'user_id' => $this->user->id,
                    'food_ingredient_id' => $data['id'],
                    'ingredient_value' => $data['value']
                ]);
                return new Response(Response::COMPLETE, 'Malzeme Başaraılı Bir Şekilde Alındı.');
            }
            return new Response(Response::FAILED, 'Almaya Çalışığınız Malzeme Değeri Stoktan ' . $data['value'] - $ingredient->value . ' kadar fazla');
        }
    }

    public function getRandomRecipeByIngredients(): Response
    {
        $userRecipes = $this->calculateRecipesUserCan();
        if (!empty($userRecipes)) {
            $recipeKey = array_rand($userRecipes);
            return new Response(Response::COMPLETE, 'Success', FoodRecipe::find($userRecipes[$recipeKey]));
        }
        return new Response(Response::FAILED, 'Malzemelerinize Göre Uygun Tarif Bulunamadı.');

    }

    private function calculateRecipesUserCan(): array
    {
        $userRecipes = [];
        $recipes = FoodRecipe::with(['ingredients'])->has('ingredients')->get();
        foreach ($recipes as $recipe) {
            $continue = false;
            foreach ($recipe->ingredients as $ingredient) {
                    if (!$this->user->ingredients()->where('food_ingredients.id', $ingredient->id)->wherePivot('ingredient_value', '>=', $ingredient->pivot->complete_value)->exists()) {
                        $continue = true;
                        break;
                }
            }
            if (!$continue){
                $userRecipes[] = $recipe->id;
            }
        }
        return $userRecipes;
    }
}

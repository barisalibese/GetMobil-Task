<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FoodRecipeIngredient extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable=['food_ingredient_id','food_recipe_ingredient_id','complete_value'];

    public function ingredients(){
        return $this->belongsTo(FoodIngredient::class);
    }

    public function recipes(){
        return $this->belongsTo(FoodRecipe::class);
    }
}

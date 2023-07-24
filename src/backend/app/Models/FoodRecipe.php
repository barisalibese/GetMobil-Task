<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class FoodRecipe extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable=['name','image_url'];
    public function ingredients(){

        return $this->belongsToMany(FoodIngredient::class,FoodRecipeIngredient::class)->withPivot(['complete_value']);
    }
}

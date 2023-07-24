<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FoodIngredient extends Model
{
    use HasFactory;
    protected $fillable=['name','image_url','type','value'];
    use SoftDeletes;

    public function user(){
        $this->belongsToMany(User::class,UserFridge::class)->withPivot('ingredient_value');
    }
}

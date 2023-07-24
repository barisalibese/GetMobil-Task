<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserFridge extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable=['user_id','food_ingredient_id','ingredient_value'];
}

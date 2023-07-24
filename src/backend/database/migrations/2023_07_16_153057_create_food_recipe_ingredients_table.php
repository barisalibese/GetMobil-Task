<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('food_recipe_ingredients', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\FoodRecipe::class);
            $table->foreignIdFor(\App\Models\FoodIngredient::class);
            $table->float('complete_value')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('food_recipe_ingredients');
    }
};

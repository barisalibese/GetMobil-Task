<?php


namespace App\Http\Controllers\Api;



use App\Services\FoodService;

class FoodController extends ApiController
{
    public FoodService $service;
    public function __construct(){
        parent::__construct();
        $this->service= new FoodService();
    }
    public function getIngredients(){
        return $this->response->setResponse($this->service->getIngredients());
    }
    public function getRecipes(){
        return $this->response->setResponse($this->service->getRecipesWithIngredients());
    }
}

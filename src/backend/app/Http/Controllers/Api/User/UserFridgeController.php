<?php


namespace App\Http\Controllers\Api\User;


use App\Http\Controllers\Api\ApiController;
use App\Libraries\ApiResponse;
use App\Services\UserFridgeService;
use Illuminate\Http\Request;

class UserFridgeController extends ApiController
{
    public UserFridgeService $service;

    public function __construct(UserFridgeService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    public function getIngredients(): ApiResponse
    {
        return $this->response->setResponse($this->service->getUserIngredients());
    }

    public function getIngredient($id): ApiResponse
    {
        return $this->response->setResponse($this->service->getUserIngredient($id));
    }

    public function getRandomRecipe(): ApiResponse
    {
        return $this->response->setResponse($this->service->getRandomRecipeByIngredients());
    }

    public function setIngredient(Request $request): ApiResponse
    {
        return $this->response->setResponse($this->service->setUserIngredient($request->all()));
    }
}

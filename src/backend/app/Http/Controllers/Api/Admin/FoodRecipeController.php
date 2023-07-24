<?php


namespace App\Http\Controllers\Api\Admin;


use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Admin\IngredientCreateRequest;
use App\Http\Requests\Admin\IngredientUpdateRequest;
use App\Services\Recipe\Admin\AdminFoodRecipeService;
use Illuminate\Http\Request;

class FoodRecipeController extends ApiController
{
    public AdminFoodRecipeService $service;

    public function __construct(AdminFoodRecipeService $service)
    {
        parent::__construct();
        $this->service = $service;
    }

    public function index()
    {
        return $this->response->setResponse($this->service->get());
    }

    public function show($id)
    {
        return $this->response->setResponse($this->service->show($id));
    }

    public function store(Request $request)
    {
        return $this->response->setResponse($this->service->store($request->all()));
    }

    public function update($id,IngredientUpdateRequest $request)
    {
        return $this->response->setResponse($this->service->update($id,$request->all()));
    }

    public function destroy($id)
    {
        return $this->response->setResponse($this->service->delete($id));
    }
}

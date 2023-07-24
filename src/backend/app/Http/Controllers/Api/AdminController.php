<?php


namespace App\Http\Controllers\Api;


use App\Http\Requests\Admin\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Services\User\UserService;
use Illuminate\Http\Request;

class AdminController extends ApiController
{
    public UserService $service;
    public function __construct(){
        parent::__construct();
        $this->service= new UserService('Admin');
    }
    public function login(LoginRequest $request){
        return $this->response->setResponse($this->service->login($request));
    }
}

<?php


namespace App\Http\Controllers\Api;


use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Services\User\UserService;

class UserController extends ApiController
{
    public UserService $service;
    public function __construct(){
        parent::__construct();
        $this->service= new UserService('User');
    }
    public function login(LoginRequest $request){
        return $this->response->setResponse($this->service->login($request));
    }
    public function register(RegisterRequest $request){
        return $this->response->setResponse($this->service->register($request));
    }
}

<?php


namespace App\Services\User;



use App\Libraries\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserService
{
    private string $role;
    public function __construct($role){
        $this->role=$role;
    }
    public function register($request){
        if (User::where('email',$request->input('email'))->exists())
        {
            return new Response(Response::FAILED,'user exists');
        }
        $user=User::create([
            'email'=>$request->input('email'),
            'name'=>$request->input('name'),
            'password'=>bcrypt($request->input('password'))
        ]);
        $user->assignRole($this->role);
        return new Response(Response::COMPLETE,'Success');
    }
    public function login($request){
        info('asşlkgjdsakljg');
        $credentials=[
          'email'=>$request->input('email'),
          'password'=>$request->input('password')
        ];
        if(Auth::attempt($credentials)){
            $user=Auth::user();
            if($user->hasRole($this->role)){
                $tokenResult       = $user->createToken('User Access Token');
                return new Response(Response::COMPLETE,'Success',[
                    'Bearer Token'=>$tokenResult->accessToken
                ]);
            }
            return new Response(Response::FAILED,'Invalid User Role');
        }
        return new Response(Response::FAILED,'email or password wrong!');
    }
}

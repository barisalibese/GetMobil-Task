<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Client;
use Symfony\Component\HttpFoundation\Response;

class ApiBootstrap
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $headers   = [
            'ClientID'     => $request->header('ClientID'),
            'ClientSecret' => $request->header('ClientSecret'),
            'GrantType'    => $request->header('GrantType'),
        ];
        $validator = Validator::make($headers, [
            'GrantType'    => 'required',
            'ClientSecret' => 'required',
            'ClientID'     => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return new JsonResponse(['message'=>"Necessary Parameters Are Missing"],403);
        }
        if (!Client::where('secret', $headers['ClientSecret'])->where('id', $headers['ClientID'])->where('password_client', 1)->exists()) {
            return new JsonResponse(['message'=>"Invalid Client"],403);
        }
        return $next($request);
    }

}

<?php

namespace App\Http\Requests\User;

use App\Libraries\FailedValidationResponse;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    use FailedValidationResponse;

    public function attributes()
    {
        return [
            'email' => 'E-mail',
            'password' => 'Şifre',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' =>[
                'required',
                'string',
                'regex:/[a-zA-Z]/', // must contain at least one character
                'regex:/[0-9]/', // must contain at least one digit
                'min:8',
            ],
        ];
    }
}

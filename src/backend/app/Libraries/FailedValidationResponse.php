<?php

namespace App\Libraries;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

trait FailedValidationResponse
{
    protected function failedValidation(Validator $validator)
    {
            $response = (new ApiResponse())
                ->setStatusCode(ApiResponse::HTTP_BAD_REQUEST)
                ->setBody(['errors' => $validator->errors()->getMessageBag()->all()]);
            throw new HttpResponseException($response);
    }
}

<?php

namespace App\Http\Requests\Admin;

use App\Libraries\FailedValidationResponse;
use Illuminate\Foundation\Http\FormRequest;

class IngredientCreateRequest extends FormRequest
{
    use FailedValidationResponse;

    public function attributes()
    {
        return [
            'name' => 'Malzeme Adı',
            'type' => 'Malzeme Tipi',
            'value' => 'Malzeme Değeri',
            'file' => 'Malzeme resmi',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        info(json_encode(request()->all()));
        return [
            'name' => 'required|string',
            'type' => 'required|in:Adet,Gram',
            'value'=> 'required|int',
            'file' => 'file',
        ];
    }
}

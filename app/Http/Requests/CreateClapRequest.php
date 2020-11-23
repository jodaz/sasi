<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClapRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'axis_id' => 'required'
            'parish_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Ingrese el nombre del clap',
            'axis_id.required' => 'Seleccione un eje.'
            'parish_id.required' => 'Seleccione una parroquia.'
        ];
    }
}

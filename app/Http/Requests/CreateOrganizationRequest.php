<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrganizationRequest extends FormRequest
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
            'rif' => 'required|unique:organizations',
            'name' => 'required',
            'address' => 'required',
            'organization_type_id' => 'required',
            'community_id' => 'required',
            'parish_id' => 'required',
            'category_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'rif.required' => 'Ingrese el RIF de la organización',
            'rif.unique' => 'El RIF ingresado ha sido utilizado anteriormente',
            'name.required' => 'Ingrese el RIF de la organización',
            'address.required' => 'Ingrese el RIF de la organización',
            'organization_type_id.required' => 'Seleccione un tipo de institución',
            'category_id.required' => 'Seleccione un sector.',
            'community_id.required' => 'Seleccione una comunidad.',
            'parish_id.required' => 'Seleccione una parroquia.',
        ];
    }
}

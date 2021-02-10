<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
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
            'first_name' => 'required',
            'dni' => 'required|unique:profiles',
            'surname' => 'required',
            'address' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'citizenship_id' => 'required',
            'parish_id' => 'required',
            'community_id' => 'required',
            'genre_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'Ingrese su nombre',
            'dni.required' => 'Ingrese su cédula de identidad',
            'dni.unique' => 'La cédula ya ha sido registrada',
            'surname.required' => 'Ingrese su apellido',
            'email.required' => 'Ingrese su correo',
            'address.required' => 'Ingrese su dirección',
            'email.email' => 'Ingrese un correo electrónico válido',
            'email.unique' => 'Este correo ya ha sido utilizado',
            'password.required' => 'Ingrese una contraseña',
            'genre_id.required' => 'Seleccione un género',
            'citizenship_id.required' => 'Seleccione su nacionalidad',
            'community_id.required' => 'Seleccione su comunidad',
            'parish_id.required' => 'Seleccione su parroquia',
            'password.confirmed' => '¡La contraseña no coincide!'
        ];
    } 
}

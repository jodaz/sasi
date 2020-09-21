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
            'surname' => 'required',
            'email' => 'required|unique',
            'password' => 'required|confirmed',
            'address' => 'required',
            'dni' => 'required|unique',
            'citizenship' => 'required',
            'community' => 'required',
            'parish' => 'required',
            'genre' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'Ingrese su primer nombre',
            'surname.required' => 'Ingrese su primer apellido',
            'email.required' => 'Ingrese su correo',
            'email.unique' => 'Este correo ya ha sido utilizado',
            'password.required' => 'Ingrese una contraseña',
            'address.required' => 'Ingrese una direccion',
            'dni.required' => 'Ingrese su dni',
            'dni.unique' => 'La cédula ingresada ya ha sido registrada',
            'citizenship.required' => 'Seleccione su ciudadanía',
            'community.required' => 'Seleccione una comunidad',
            'parish.required' => 'Seleccione una parroquia',
            'genre.required' => 'Seleccione su género'
        ];
    } 
}

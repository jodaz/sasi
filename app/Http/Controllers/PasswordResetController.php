<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\PasswordResetRequest;
use App\Notifications\PasswordResetNotification;
use App\Notifications\PasswordResetSuccessNotification;
use App\User;
use App\PasswordReset;
use Auth;
use Hash;
use Illuminate\Support\Facades\Validator;

class PasswordResetController extends Controller
{
    public function recover(PasswordResetRequest $request)
    {
        $user = User::whereEmail($request->get('email'))->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => '¡No pudimos encontrar a un usuario con ese correo electrónico!'
            ]);
        }

        $hash = str_replace('/', '', Hash::make($request->get('email')));

        $passwordReset = PasswordReset::create([
            'email' => $request->get('email'),
            'token' => $hash
        ]);

        $user->notify(new PasswordResetNotification($passwordReset->token));

        return response()->json([
            'success' => true,
            'message' => 'Te hemos enviado un correo con un link.'
        ]);
    }

    public function findToken($token)
    {
        $passwordReset = PasswordReset::whereToken($token)->first();

        if (!$passwordReset) {
            return response()->json([
                'success' => false,
                'message' => 'El link utilizado ha dejado de ser válido.'
            ], 404);
        }

        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            return response()->json([
                'message' => 'El link utilizado es inválido.'
            ], 404);
        }
    }

    public function resetPassword(ChangePasswordRequest $request)
    {
        $passwordReset = PasswordReset::whereToken($request->token)->first();

        if (!$passwordReset) {
            return response()->json([
                'success' => false,
                'message' => 'El link utilizado ha dejado de ser válido.'
            ], 404);
        }

        $user = User::whereEmail($passwordReset->email)->first();

        $user->password = Hash::make($request->get('password'));
        $user->save();
        $passwordReset->delete();

        $user->notify(new PasswordResetSuccessNotification());

        return response()->json([
            'success' => true,
            'message' => '¡Su contraseña ha sido actualizada!'
        ]);
    }
}

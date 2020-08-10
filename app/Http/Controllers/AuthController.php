<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\User;
use Auth;
use Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:100',
            'surname' => 'required|string|max:100',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'community_id' => 'required',
            'parish_id' => 'required',
            'genre_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $password = Hash::make($request->password);
        // Create user
        User::create([
            'first_name' => $request->get('first_name'),
            'second_name' => $request->get('second_name'),
            'surname' => $request->get('surname'),
            'second_surname' => $request->get('second_surname'),
            'email' => $request->get('email'),
            'password' => $password,
            'address' => $request->get('address'),
            'identification' => $request->get('identification'),
            'community_id' => $request->get('community_id'),
            'parish_id' => $request->get('parish_id'),
            'genre_id' => $request->get('genre_id')
        ]);

        return response()->json([
            'success' => true,
            'message' => '¡Usuario creado!'
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Tu contraseña o correo son incorrectos'
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->save();

        return response()->json([
            'token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at)
                    ->toDateTimeString(),
            'user' => $request->user()
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([ 'success' => true ]);
    }

    public function getUser(Request $request)
    {
        return response()->json($request->user());
    }
}

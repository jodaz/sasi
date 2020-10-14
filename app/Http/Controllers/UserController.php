<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Genre;
use App\Citizenship;
use App\Parish;
use App\Community;
use Illuminate\Support\Str;
use App\Notifications\SignupActivate;
use App\Http\Requests\CreateUserRequest;
use Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = User::latest()->with(['role']);
        $results = $request->page['number'] * $request->page['size'];

        return $query->paginate($results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $citizenships = Citizenship::get()->map(function ($citizenship) {
            return [
                'label' => $citizenship->name,
                'value' => $citizenship->id
            ]; 
        });

        $genres = Genre::get()->map(function ($citizenship) {
            return [
                'label' => $citizenship->name,
                'value' => $citizenship->id
            ]; 
        });

        $parishes = Parish::get()->map(function ($parish) {
            return [
                'label' => $parish->name,
                'value' => $parish->id
            ]; 
        });

        return response()->json([
            'parishes' => $parishes,
            'genres' => $genres,
            'citizenships' => $citizenships
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $password = Hash::make($request->password);

        $user = User::create([
            'first_name' => $request->first_name,
            'surname' => $request->surname,
            'dni' => $request->dni,
            'email' => $request->email,
            'password' => $request->password,
            'activation_token' => Str::random(60),
            'active' => false,
            'role_id' => 3 // By default, users are common  
        ]);

        $user->notify(new SignupActivate($user->activation_token));

        return response()->json([
            'success' => true,
            'message' => '¡Usuario creado!'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return Response($user->load('applications', 'organizations'));
    }

    public function activate($token)
    {
        $user = User::where('activation_token', $token)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => '¡El usuario ya tiene una cuenta activa!'
            ], 404);
        }

        $user->active = true;
        $user->activation_token = '';
        $user->save();

        return response()->json([
            'success' => true,
            'message' => '¡Su cuenta ha sido activada!'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

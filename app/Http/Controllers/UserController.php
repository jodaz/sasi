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
use Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::get();
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
    public function store(Request $request)
    {
        $password = Hash::make($request->password);
        $citizenshipCorr = Citizenship::find($request->get('citizenship')['value'])
            ->correlative;
        $identification = $citizenshipCorr.'-'.$request->get('identification');

        $user = User::create([
            'first_name' => $request->get('first_name'),
            'surname' => $request->get('surname'),
            'email' => $request->get('email'),
            'password' => $password,
            'address' => $request->get('address'),
            'dni' => $identification,
            'community_id' => $request->get('community')['value'],
            'parish_id' => $request->get('parish')['value'],
            'genre_id' => $request->get('genre')['value'],
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
                'message' => 'This activation token is invalid.'
            ], 404);
        }

        $user->active = true;
        $user->activation_token = '';
        $user->save();

        return $user;
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Citizenship;
use App\Parish;

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

        $parishes = Parish::get()->map(function ($parish) {
            return [
                'label' => $parish->name,
                'value' => $parish->id
            ]; 
        });

        return response()->json([
            'parishes' => $parishes,
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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

    public function changePassword(Request $request)
    {
        $newPassword = $request->input('new-password');
        $currentPass = $request->input('current-password');
        $user = Auth::user();
        
        if (!Hash::check($currentPass, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'La contraseña actual es incorrecta'
            ]);
        }

        if ($currentPass == $newPassword) {
            return response()->json([
                'success' => false,
                'message' => 'La nueva contraseña no debe ser igual a la anterior'
            ]);
        }

        $user->password = bcrypt($newPassword);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => '¡Contraseña actualizada!'
        ]);
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

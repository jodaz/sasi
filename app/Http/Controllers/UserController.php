<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Genre;
use App\Citizenship;
use App\Parish;
use App\Community;
use App\Profile;
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
        $results = $request->perPage;

        if ($request->has('filter')) {
            $filters = $request->filter;
            // Get fields
            $email = $filters['email'];
            
            $query->whereLike('email', $email);
        }

        return $query->paginate($results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    { 
        $citizenshipCorr = Citizenship::find($request->get('citizenship_id'))
            ->correlative;
        $identification = $citizenshipCorr.'-'.$request->get('identification');

        $password = Hash::make($request->password);

        $profile = Profile::create([
            'dni' => $request->dni,
            'first_name' => $request->first_name,
            'second_name' => $request->second_name,
            'surname' => $request->surname,
            'second_surname' => $request->second_surname,
            'address' => $request->address,
            'community_id' => $request->community_id,
            'parish_id' => $request->parish_id,
            'citizenship_id' => $request->citizenship_id,
            'genre_id' => $request->genre_id
        ]);

        $user = User::create([
            'dni' => $request->dni,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => $request->password,
            'activation_token' => Str::random(60),
            'active' => false,
            'role_id' => 3 // By default, users are guest  
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

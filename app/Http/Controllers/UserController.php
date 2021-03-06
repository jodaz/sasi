<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Rol;
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
        $query = User::latest()->with(['role', 'profile']);
        $results = $request->perPage;

        if ($request->has('filter')) {
            $filters = $request->filter;
            // Get fields
            if (array_key_exists('email', $filters)) {
                $query->whereLike('email', $filters['email']);
            }
            if (array_key_exists('name', $filters)) {
                $query->whereHas('profile', function ($query) use ($filters) {
                    return $query->whereLike('first_name', $filters['name']);
                });
            }
            if (array_key_exists('surname', $filters)) {
                $query->whereHas('profile', function ($query) use ($filters) {
                    return $query->whereLike('surname', $filters['surname']);
                });
            }
            if (array_key_exists('rol', $filters)) {
                $query->whereHas('role', function ($query) use ($filters) {
                    return $query->whereLike('name', $filters['rol']);
                });
            }
            if (array_key_exists('status', $filters)) {
                $status = ($filters['status'] == 'Activos') ? 1 : 0;
                $query->whereActive($status);
            }
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
        $citizenships = Citizenship::get();
        $parishes = Parish::get();
        $communities = Community::get();
        $genres = Genre::get();

        return response()->json([
            'genres' => $genres,
            'parishes' => $parishes,
            'citizenships' => $citizenships,
            'communities' => $communities
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

        $profile = Profile::create([
            'dni' => $request->dni,
            'first_name' => $request->first_name,
            'second_name' => $request->second_name,
            'surname' => $request->surname,
            'second_surname' => $request->second_surname,
            'address' => $request->address,
            'phone' => $request->phone,
            'community_id' => $request->community_id,
            'parish_id' => $request->parish_id,
            'citizenship_id' => $request->citizenship_id,
            'genre_id' => $request->genre_id
        ]);

        $user = $profile->user()->create([
            'email' => $request->email,
            'password' => $password,
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
        $query = $user->load([
                'profile.applications',
                'profile.organizations'
            ])->loadCount('applications');

        return Response($query);
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
    public function update(Request $request, User $user)
    {
        $user->update(['role_id' => $request->get('role_id')]);;

        return response()->json([
            'id' => $user->id,
            'attributes' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function changeStatus(User $user)
    {
        $status = $user->active;
        $user->active = !$status;
        $user->save();
        $message = 'desactivado';

        if (!$status) {
            $message = 'activado';
        }

        return response()->json([
            'message' => 'El usuario '.$user->profile->fullName.' ha sido '.$message
        ]);
    }
}

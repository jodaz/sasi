<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Citizenship;

class CitizenshipController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Citizenship::query();
        $results = $request->perPage;

        if ($request->has('filter')) {
            $filters = $request->filter;
            // Get fields
            // if (array_key_exists('email', $filters)) {
            //     $query->whereLike('email', $filters['email']);
            // }
            // if (array_key_exists('name', $filters)) {
            //     $query->whereHas('profile', function ($query) use ($filters) {
            //         return $query->whereLike('first_name', $filters['name']);
            //     });
            // }
            // if (array_key_exists('surname', $filters)) {
            //     $query->whereHas('profile', function ($query) use ($filters) {
            //         return $query->whereLike('surname', $filters['surname']);
            //     });
            // }
            // if (array_key_exists('rol', $filters)) {
            //     $query->whereHas('role', function ($query) use ($filters) {
            //         return $query->whereLike('name', $filters['rol']);
            //     });
            // }
            // if (array_key_exists('status', $filters)) {
            //     $status = ($filters['status'] == 'Activos') ? 1 : 0;
            //     $query->whereActive($status);
            // }
        }

        return $query->paginate($results);
    }
}

<?php

namespace App\Http\Controllers;

use App\Application;
use App\User;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function home()
    {
        $applications = Application::whereStateId(2)->count();
        $users = User::with('profile')->count();
        
        $data = [
            'applications' => [
                'name' => 'Solicitudes aprobadas',
                'amount' => $applications
            ],
            'users' => [
                'name' => 'Usuarios registrados',
                'amount' => $users
            ]
        ];

        return response()->json($data);
    } 
}

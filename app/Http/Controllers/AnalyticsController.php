<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use App\User;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function home()
    {
        $applications = Application::whereStateId(2)->count();
        $users = User::with('profile')->count();
        $categories = Category::withCount('applications')->get()->map(function ($value, $key) {
            return [
                'name' => $value['name'],
                'value' => $value['applications_count']
            ];
        });

        $data = [
            'applications' => [
                'name' => 'Solicitudes aprobadas',
                'amount' => $applications
            ],
            'users' => [
                'name' => 'Usuarios registrados',
                'amount' => $users
            ],
            'categories' => $categories,
        ];

        return response()->json($data);
    }
}

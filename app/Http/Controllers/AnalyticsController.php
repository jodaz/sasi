<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use App\User;
use App\State;
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
        $appsByStatus = State::withCount('applications')->get()->map(function ($value, $key) {
            return [
                'name' => $value['list_name'],
                'value' => $value['applications_count']
            ];
        });

        $data = [
            'applications' => $applications,
            'users' => $users,
            'categories' => $categories,
            'status' => $appsByStatus
        ];

        return response()->json($data);
    }
}

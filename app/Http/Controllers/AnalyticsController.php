<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use App\User;
use App\State;
use Illuminate\Http\Request;
use PDF;
use Carbon\Carbon;

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

    public function report()
    {
        $applications = Application::withTrashed()->whereStateId(2)->orderBy('id', 'DESC')->get();
        $total = $applications->count();
        $emissionDate = date('d-m-Y', strtotime(Carbon::now()));

        $data = compact(['applications', 'emissionDate', 'total']);

        $pdf = PDF::loadView('pdf.report', $data);
        return $pdf->download('reporte-solicitudes.pdf');
    }
}

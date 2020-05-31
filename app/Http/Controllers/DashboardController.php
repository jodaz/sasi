<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $config = [
        'moduleName' => 'Dashboard',
        'moduleLabel' => 'Dashboard',
        'routeView' => 'dashboard.index',
        'routeLink' => 'profile',
        'msgEmpty' => 'No hay datos disponibles',
        'messageSuccess' => 'Operación realizada con éxito'
    ];

    public function index()
    {
        return view('dashboard.index')
            ->with('breadcrumbAction', '')
            ->with('config', $this->config);
    }
}

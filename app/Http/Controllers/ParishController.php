<?php

namespace App\Http\Controllers;

use App\Parish;
use DataTables;
use Illuminate\Http\Request;

class ParishController extends Controller
{
    protected $config = [
        'moduleName' => 'Parroquias',
        'moduleLabel' => 'Parroquias',
        'routeView' => 'parishes.index',
        'routeLink' => 'profile',
        'msgEmpty' => 'No hay datos disponibles',
        'messageSuccess' => 'Operación realizada con éxito'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            return DataTables::of(Parish::get())
                ->make(true);
        }

        return view('parishes.index')
            ->with('config', $this->config)
            ->with('breadcrumbAction', '');
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


}

<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use DataTables;
use Auth;
use PDF;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    protected $config = [
        'moduleName' => 'Solicitudes',
        'moduleLabel' => 'Solicitudes',
        'routeView' => 'applications.index',
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
            return DataTables::of(Application::get())
                ->make(true);
        }

        return view('applications.index')
            ->with('config', $this->config)
            ->with('breadcrumbAction', 'Nueva solicitud');
    }

    public function pending(Request $request)
    {
        $query = Application::whereNull('approved_at')
            ->get();

        if ($request->ajax()) {
            return DataTables::of($query)
                ->make(true);
        }

        return view('applications.index')
            ->with('config', $this->config)
            ->with('title', 'Solicitudes pendientes')
            ->with('route', 'pending-applications')
            ->with('breadcrumbAction', '');
    }

    public function approved(Request $request)
    {
        $query = Application::whereNotNull('approved_at')
            ->get();

        if ($request->ajax()) {
            return DataTables::of($query)
                ->make(true);
        }

        return view('applications.index')
            ->with('config', $this->config)
            ->with('title', 'Solicitudes aprobadas')
            ->with('route', 'approved-applications')
            ->with('breadcrumbAction', '');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('applications.create')
            ->with('config', $this->config)
            ->with('categories', Category::pluck('name', 'id'))
            ->with('breadcrumbAction', 'create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $application = new Application($request->input());
        $application->state_id = 1;

        $user->applications()->save($application);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Application $application)
    {
        //
    }
}

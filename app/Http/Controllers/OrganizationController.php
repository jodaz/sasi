<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Organization;
use DataTables;

class OrganizationController extends Controller
{
    protected $config = [
        'moduleName' => 'Organizaciones',
        'moduleLabel' => 'Organizaciones',
        'routeView' => 'organizations.index',
        'routeLink' => 'profile',
        'msgEmpty' => 'No hay datos disponibles',
        'messageSuccess' => 'Operación realizada con éxito'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        if ($req->ajax()) {
            return DataTables::of(Organization::get())
                ->make(true);
        }

        return view('organizations.index')
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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

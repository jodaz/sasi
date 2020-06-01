<?php

namespace App\Http\Controllers;

use App\Novelty;
use App\Category;
use App\State;
use Illuminate\Http\Request;
use DataTables;
use Auth;

class NoveltyController extends Controller
{
    protected $config = [
        'moduleName' => 'Denuncias',
        'moduleLabel' => 'Denuncias',
        'routeView' => 'novelties.index',
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
            return DataTables::of(Novelty::get())
                ->make(true);
        }

        return view('noveltys.index')
            ->with('config', $this->config)
            ->with('breadcrumbAction', '');
    }

    public function pending(Request $request)
    {
        //
    }

    public function approved(Request $request)
    {
        //
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('novelties.create')
            ->with('categories', Category::pluck('name', 'id'))
            ->with('config', $this->config)
            ->with('breadcrumbAction', '');
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
        $novelty = new Novelty($request->input());
        $novelty->state_id = 1;
        $novelty->votes = 1;

        $user->novelties()->save($novelty);

        return redirect()->back()
            ->withSuccess('¡Denuncia publicada!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Novelty  $novelty
     * @return \Illuminate\Http\Response
     */
    public function show(Novelty $novelty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Novelty  $novelty
     * @return \Illuminate\Http\Response
     */
    public function edit(Novelty $novelty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Novelty  $novelty
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Novelty $novelty)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Novelty  $novelty
     * @return \Illuminate\Http\Response
     */
    public function destroy(Novelty $novelty)
    {
        //
    }
}

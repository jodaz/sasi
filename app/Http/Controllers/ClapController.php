<?php

namespace App\Http\Controllers;

use App\Clap;
use App\Http\Requests\CreateClapRequest;
use Illuminate\Http\Request;

class ClapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Clap::query();
        $results = $request->perPage;

        if ($request->has('filter')) {
            $filters = $request->filter;
            $name = $filters['name'];
            $query->whereLike('name', $name);
        }

        return $query->paginate($results);
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
        $clap = Clap::create($request->all());

        return $clap; 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Clap  $clap
     * @return \Illuminate\Http\Response
     */
    public function show(Clap $clap)
    {
        return Response($clap);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Clap  $clap
     * @return \Illuminate\Http\Response
     */
    public function edit(Clap $clap)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Clap  $clap
     * @return \Illuminate\Http\Response
     */
    public function update(CreateClapRequest $request, Clap $clap)
    {
        $clap->update($request->all());

        return response()->json([
            'success' => true,
            'message' => '¡El clap '.$clap->name.' fue actualizado!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Clap  $clap
     * @return \Illuminate\Http\Response
     */
    public function destroy(Clap $clap)
    {
        $clap->delete();

        return response()->json([
            'success' => true,
            'message' => '¡El clap '.$clap->name.' fue eliminado!'
        ]);
    }
}

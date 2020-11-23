<?php

namespace App\Http\Controllers;

use App\Axis;
use App\Http\Requests\CreateAxisRequest;
use Illuminate\Http\Request;

class AxisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Axis::query();
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
    public function store(CreateAxisRequest $request)
    {
        $axis = Axis::create($request->all());

        return $axis; 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Axis  $axis
     * @return \Illuminate\Http\Response
     */
    public function show(Axis $axis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Axis  $axis
     * @return \Illuminate\Http\Response
     */
    public function edit(Axis $axis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Axis  $axis
     * @return \Illuminate\Http\Response
     */
    public function update(CreateAxisRequest $request, Axis $axis)
    {
        $axis->update($request->all());

        return response()->json([
            'success' => true,
            'message' => '¡El eje '.$axis->name.' fue actualizado!'
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Axis  $axis
     * @return \Illuminate\Http\Response
     */
    public function destroy(Axis $axis)
    {
        $axis->delete();

        return response()->json([
            'success' => true,
            'message' => '¡La categoría '.$axis->name.' fue eliminada!'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Axis;
use App\Parish;
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
        $query = Axis::with('parishes');
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
        return Parish::get()->toArray();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateAxisRequest $request)
    {
        $axis = Axis::create([
            'name' => $request->get('name')
        ]);

        $axis->parishes()->sync($request->get('parish'));

        return $axis; 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Axis  $axis
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $axis = Axis::find($request->axe);

        return Response($axis);
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
    public function update(CreateAxisRequest $request)
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
    public function destroy(Request $request)
    {
        $axis = Axis::find($request->axe);
        $axis->delete();

        return response()->json([
            'success' => true,
            'message' => '¡El eje '.$axis->name.' fue eliminado!'
        ]);
    }
}

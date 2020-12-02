<?php

namespace App\Http\Controllers;

use App\Community;
use App\Parish;
use App\Http\Requests\CreateCommunityRequest;
use Illuminate\Http\Request;

class CommunityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Community::query()->withCount('applications');
        $results = $request->perPage;

        if ($request->has('filter')) {
            $filters = $request->filter;
            // Get fields
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
        return Parish::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateCommunityRequest $request)
    {
        $community = Community::create([
            'name' => $request->name
        ]);
        $community->parishes()->sync($request->parishes);

        return response()->json([
            'success' => true,
            'message' => '¡La comunidad '.$community->name.' ha sido creada!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function show(Community $community)
    {
        return $community->load(['applications'])
            ->loadCount('applications');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function edit(Community $community)
    {
        return $community->load('parishes');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Community $community)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function destroy(Community $community)
    {
        $community->delete();

        return response()->json([
            'message' => "¡Ha sido eliminada la comunidad {$community->name}!"
        ]);
    }
}

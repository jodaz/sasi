<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Organization;
use App\Community;
use App\Parish;
use App\OrganizationType;
use App\Category;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Organization::query()->withCount('applications');
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
        return Response([
            'categories' => Category::get(),
            'parishes' => Parish::with('communities')->get(),
            'types' => OrganizationType::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $profile = $request->user()->profile;

        $organization = $profile->organizations()->create([
            'name' => $request->get('name'),
            'rif' => $request->get('rif'),
            'address' => $request->get('address'),
            'category_id' => $request->get('categories'),
            'parish_id' => $request->get('parishes'),
            'organization_type_id' => $request->get('types'),
            'community_id' => $request->get('communities')
        ]);

        return Response([
            'success' => true,
            'message' => '¡Ha agregado a '.$organization->name.' con éxito'
        ]);
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

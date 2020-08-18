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
    public function index()
    {
        return Organization::with(['user'])
            ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $parishes = Parish::get()->map(function ($item) {
            return [
                'label' => $item->name,
                'value' => $item->id
            ]; 
        });
        $types = OrganizationType::get()->map(function ($item) {
            return [
                'label' => $item->name,
                'value' => $item->id
            ]; 
        });
        $categories = Category::get()->map(function ($item) {
            return [
                'label' => $item->name,
                'value' => $item->id
            ]; 
        });

        return Response([
            'categories' => $categories,
            'parishes' => $parishes,
            'types' => $types
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
        $user = $request->user();

        $organization = $user->organizations()->create([
            'name' => $request->get('name'),
            'rif' => $request->get('rif'),
            'address' => $request->get('address'),
            'category_id' => $request->get('category')['value'],
            'parish_id' => $request->get('parish')['value'],
            'organization_type_id' => $request->get('type')['value'],
            'community_id' => $request->get('community')['value'],
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

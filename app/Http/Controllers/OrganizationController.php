<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Organization;
use App\Community;
use App\Parish;
use App\OrganizationType;
use App\Category;
use App\Http\Requests\CreateOrganizationRequest;

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
        $user = $request->user();

        if ($request->has('filter')) {
            $filters = $request->filter;
            if (array_key_exists('rif', $filters)) {
                $query->whereLike('rif', $filters['rif']);
            }
            if (array_key_exists('name', $filters)) {
                $query->whereLike('name', $filters['name']);
            }
            if (array_key_exists('created_at', $filters)) {
                $query->whereDate('created_at', $filters['created_at']);
            }
            if (array_key_exists('address', $filters)) {
                $query->whereLike('address', $filters['address']);
            }
        }

        if ($user->role_id == 3) {
            $query->whereProfileId($user->profile_id);
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
            'communities' => Community::get(),
            'parishes' => Parish::get(),
            'types' => OrganizationType::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateOrganizationRequest $request)
    {
        $profile = $request->user()->profile;

        $organization = $profile->organizations()->create($request->all());

        return Response([
            'success' => true,
            'id' => $organization->id,
            'attributes' => $organization
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Organization $organization)
    {
        $organization = $organization->load([
            'category'
        ])->loadCount('applications');

        return Response($organization);
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

<?php

namespace App\Http\Controllers;

use App\Parish;
use Illuminate\Http\Request;

class ParishController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Parish::get();
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

    public function show(Parish $parish)
    {
        return Response($parish->load('applications', 'users'));
    }

    public function getCommunities(Parish $parish)
    {
        $communities = $parish->communities->map(function ($c) {
            return [
                'label' => $c->name,
                'value' => $c->id
            ]; 
        });

        return Response($communities);
    }
}

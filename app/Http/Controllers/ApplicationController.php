<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use Auth;
use PDF;
use Mail;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('state')) {
            $results = $request->page * 10;

            $query = Application::whereStateId($request->state)
                ->orderBy('created_at', 'DESC')
                ->paginate($results);
        } else {
            $query = Application::with(['state'])->get();
        }


        return $query;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('applications.create')
            ->with('config', $this->config)
            ->with('categories', Category::pluck('name', 'id'))
            ->with('breadcrumbAction', 'create');
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
        $application = new Application($request->get());
        $application->state_id = 1;

        $user->applications()->save($application);

        return response()->json([
            'success' => true,
            'message' => '¡Solicitud recibida!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    public function approve(Application $application)
    {
        $application->approved_at = Carbon::now();
        $application->save();

        return redirect()->back(); 
    }

    public function download(Application $application)
    {
        $user = $application->user;
        $pdf = PDF::loadView('pdf.application', compact(['user', 'application']));
        
        return $pdf->download('solicitud.pdf');  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Application $application)
    {
        //
    }
}

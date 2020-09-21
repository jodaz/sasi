<?php

namespace App\Http\Controllers;

use App\Application;
use App\Category;
use App\Http\Requests\CreateApplicationRequest;
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
        $user = $request->user();
        $query = Application::query();

        if ($user->role_id == 3) {
            $query->whereUserId($user->id);
        }

        if ($request->has('state')) {
            $results = $request->page * 10;

            $query = $query->whereStateId($request->state)
                ->with(['user', 'category'])
                ->orderBy('created_at', 'DESC')
                ->paginate($results);

            return $query;
        }

        return $query->with(['state'])->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $categories = Category::get()->map(function ($category) {
            return [
                'label' => $category->name,
                'value' => $category->id
            ]; 
        });

        return $categories;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateApplicationRequest $request)
    {
        $user = $request->user();
        $category = $request->get('category')['value'];
        $application = new Application($request->all());
        $application->state_id = 1;
        $application->category_id = $category;

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
        $application->state_id = 2;
        $application->save();

        return Response([
            'success' => true,
            'message' => '¡Solicitud aprobada!'
        ]);
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
        if ($application->state_id == 2) {
            return Response([
                'success' => false,
                'message' => 'Las solicitudes aprobadas no pueden ser borradas'
            ]);
        }
        $application->delete();

        return Response([
            'success' => true,
            'message' => '¡Solicitud borrada!'
        ]);
    }
}

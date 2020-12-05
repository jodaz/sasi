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
        $results = $request->perPage;

        $query = Application::withTrashed()
            ->latest()
            ->with('category');

        if ($request->has('filter')) {
            $filters = $request->filter;
            // Get fields
            foreach($filters as $filter) {
                if ($filter == 'Pendiente' || $filter == 'Aprobado' || $filter == 'Denegado') {
                    $query->whereHas('state', function ($query) use ($filter) {
                         return $query->whereName($filter);
                     });
                } else {
                    $query->whereLike($filter, $filters[$filter]);
                }
            }
        }

        return $query->paginate($results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Category::get()->toArray();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateApplicationRequest $request)
    {
        $profile = $request->user()->profile;
        $category = $request->get('category');
        $application = new Application($request->all());
        $application->num = Application::getNewNum();
        $application->state_id = 1;
        $application->category_id = $category;

        $profile->applications()->save($application);

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
        return Response($application->load(['category', 'state', 'profile']));
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
        $pdf = PDF::loadView('pdf.certification', compact(['user', 'application']));
        
        return $pdf->download('certificado.pdf');
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
        $application->update([ 'state_id' => 3 ]);

        return Response([
            'success' => true,
            'message' => '¡Solicitud borrada!'
        ]);
    }
}

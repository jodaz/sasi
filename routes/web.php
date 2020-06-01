<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', function() {
    if (Auth::check()) {
        return redirect('dashboard');
    }
    return redirect('login');
});

Route::prefix('/')->middleware('auth')->group(function() {
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');

    Route::resource('applications', 'ApplicationController');
    Route::resource('novelties', 'NoveltyController');
    Route::resource('users', 'UserController');
    Route::resource('organizations', 'OrganizationController');
    Route::resource('sectors', 'SectorController');
    Route::resource('communities', 'CommunityController');
    Route::resource('parishes', 'ParishController');

    /**
     * Reports
     */
    Route::get('pending-applications', 'ApplicationController@pending')
        ->name('pending-applications');
    Route::get('pending-novelties', 'NoveltyController@pending')
        ->name('pending-novelties');
    Route::get('approved-applications', 'ApplicationController@approved')
        ->name('approved-applications');
    Route::get('approved-novelties', 'NoveltyController@approved')
        ->name('approved-novelties');

    /**
     * Approve
     */
    Route::get('applications/{application}/approve', 'ApplicationController@approve');

    /**
     * Pdf
     */
    Route::get('applications/{application}/download', 'ApplicationController@download');
});


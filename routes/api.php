<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Users
 */
Route::post('login', 'AuthController@login');
Route::post('recover-account', 'PasswordResetController@recover');
Route::post('reset-password', 'PasswordResetController@resetPassword');
Route::get('activate-account/{token}', 'UserController@activate');

Route::get('applications/{application}/download', 'ApplicationController@download')
    ->name('applications.download-cert');

Route::get('parishes/{parish}/communities', 'ParishController@getCommunities')
    ->name('parish.communities');
Route::resource('users', 'UserController');

// Authenticated only
Route::middleware('auth:api')->group(function () {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@getUser');
    Route::post('update-password', 'UpdatePasswordController');

    Route::resource('users', 'UserController')->only([
        'index', 'destroy', 'update', 'show'
    ]);

    Route::get('states', 'StateController');
    Route::resource('parishes', 'ParishController');
    Route::resource('communities', 'CommunityController');
    Route::post('categories/delete', 'CategoryController@deleteMany');
    Route::resource('categories', 'CategoryController');
    Route::resource('organizations', 'OrganizationController')->except('edit');

    // Applications
    Route::resource('applications', 'ApplicationController');
    // Analytics
    Route::prefix('analytics')->group(function () {
        Route::get('home', 'AnalyticsController@home');
    });
});


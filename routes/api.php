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
Route::get('reset-password/{token}', 'PasswordResetController@findToken');
Route::post('register', 'AuthController@register');
Route::resource('users', 'UserController');
// Authenticated only
Route::middleware('auth:api')->group(function () {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@getUser');
    Route::post('update-password', 'UpdatePasswordController');

    Route::resource('users', 'UserController')->only([
        'index', 'destroy', 'update', 'show'
    ]);
});

Route::middleware('auth:api')->group(function() {
    Route::resource('parishes', 'ParishController');
    Route::resource('communities', 'CommunityController');
    Route::resource('categories', 'CategoryController');
    Route::resource('organizations', 'OrganizationController');

    /// Applications
    Route::get('applications/{application}/approve', 'ApplicationController@approve');
    Route::resource('applications', 'ApplicationController');
});

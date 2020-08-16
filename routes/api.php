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

Route::post('login', 'AuthController@login');
Route::post('recover-account', 'PasswordResetController@recover');
Route::post('reset-password', 'PasswordResetController@resetPassword');
Route::get('reset-password/{token}', 'PasswordResetController@findToken');
Route::post('register', 'AuthController@register');

Route::middleware('auth:api')->group(function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@getUser');

    Route::resource('applications', 'ApplicationController');
    Route::resource('users', 'UserController');
    Route::resource('parishes', 'ParishController');
    Route::resource('communities', 'CommunityController');
    Route::resource('categories', 'CategoryController');
});

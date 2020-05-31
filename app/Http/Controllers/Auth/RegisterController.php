<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Mail;
use Illuminate\Http\Request;
use Redirect;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'names' => ['required', 'string', 'max:30'],
            'surnames' => ['required', 'string', 'max:30'],
            'identification' => ['required', 'string', 'max:30'],
            'email' => ['required', 'string', 'email', 'max:40', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $user = User::create([
            'names' => $request->input('names'),
            'surnames' => $request->input('surnames'),
            'address' => $request->input('address'),
            'identification' => $request->input('identification'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'password' => Hash::make($request->input('password')),
            'remember_token' => $request->input('_token'),
            'genre_id' => 1,// $request->input('genre_id'),
            'parish_id' => 1,// $request->input('parish_id'),
            'community_id' => 1// $request->input('community_id'),
        ]);

        $content = [
            'text' => '¡Gracias por registrarte en Sasi!' 
        ];
        $subject = $request->input('email');
        $for = $request->input('email');

        Mail::send('emails.signup', $content, function ($msj) use ($subject, $for) {
            $msj->subject($subject);
            $msj->to($for);
        });

        return redirect()->route('dashboard')
            ->with('success', '¡Gracias por regístrarte!, revisa tu correo electrónico para continuar.');
    }
}

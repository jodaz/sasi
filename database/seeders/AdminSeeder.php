<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Profile;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $profile = Profile::create([
            'first_name' => config('app.first_name'),
            'surname' => config('app.surname'),
            'address' => config('app.address'),
            'dni' => config('app.dni'),
            'community_id' => 1,
            'parish_id' => 1,
            'citizenship_id' => 1,
            'genre_id' => 1
        ]);

        User::create([
            'email' => config('app.email'),
            'password' => bcrypt('qwerty123'),
            'active' => true,
            'activation_token' => Str::random(60),
            'remember_token' => Str::random(10),
            'role_id' => 1,
            'profile_id' => $profile->id
        ]);
    }
}

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Community;
use App\Parish;
use App\Genre;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$genres = Genre::all();
$communities = Community::all();
$parishes = Parish::all();

$factory->define(User::class, function (Faker $faker) use ($genres, $communities, $parishes) {
    return [
        'first_name' => $faker->name,
        'surname' => $faker->lastName,
        'dni' => $faker->ein,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('qwerty123'),
        'genre_id' => $genres->random(1)->first(),
        'community_id' => $communities->random(1)->first(),
        'parish_id' => $parishes->random(1)->first(),
        'address' => $faker->address,
        'remember_token' => Str::random(10),
        'role_id' => 3
    ];
});

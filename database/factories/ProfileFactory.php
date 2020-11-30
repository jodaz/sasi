<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use App\Community;
use App\Parish;
use App\Genre;
use App\Citizenship;
use Faker\Generator as Faker;

$genres = Genre::all();
$citizenships = Citizenship::all();
$communities = Community::all();
$parishes = Parish::all();

$factory->define(Profile::class, function (Faker $faker) use ($citizenships, $genres, $communities, $parishes) {
    $community = $communities->random(1)->first()->id;
    $parish = $parishes->random(1)->first()->id;
    $genre = $genres->random(1)->first()->id;
    $citizen = $citizenships->random(1)->first()->id;

    return [
        'first_name' => $faker->name,
        'surname' => $faker->lastName,
        'second_name' => $faker->firstName,
        'second_surname' => $faker->lastName,
        'dni' => $faker->unique()->randomNumber,
        'phone' => $faker->tollFreePhoneNumber,
        'address' => $faker->address,
        'community_id' => $community,
        'parish_id' => $parish,
        'citizenship_id' => $citizen,
        'genre_id' => $genre
    ];
});

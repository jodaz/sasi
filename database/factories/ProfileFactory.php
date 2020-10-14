<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use App\Community;
use App\Parish;
use App\Genre;
use Faker\Generator as Faker;

$genres = Genre::all();
$communities = Community::all();
$parishes = Parish::all();

$factory->define(Profile::class, function (Faker $faker) use ($genres, $communities, $parishes) {
    $community = $communities->random(1)->first()->id;
    $parish = $parishes->random(1)->first()->id;
    $genre = $genres->random(1)->first()->id;

    return [
        'second_name' => $faker->firstName,
        'second_surname' => $faker->lastName,
        'address' => $faker->address,
        'community_id' => $community,
        'parish_id' => $parish,
        'genre_id' => $genre
    ];
});

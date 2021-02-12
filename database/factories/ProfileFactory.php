<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use App\Clap;
use App\Genre;
use App\Citizenship;
use Faker\Generator as Faker;

$genres = Genre::all();
$citizenships = Citizenship::all();
$claps = Clap::all();

$factory->define(Profile::class, function (Faker $faker) use ($genres, $claps, $citizenships) {
    $genre = $genres->random(1)->first()->id;
    $citizen = $citizenships->random(1)->first()->id;

    return [
        'first_name' => $faker->name,
        'surname' => $faker->lastName,
        'second_name' => $faker->firstName,
        'second_surname' => $faker->lastName,
        'dni' => $faker->unique()->randomNumber,
        'clap_id' => 1,
        'birth_date' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'phone' => $faker->tollFreePhoneNumber,
        'address' => $faker->address,
        'community_id' => $community,
        'parish_id' => $parish,
        'citizenship_id' => $citizen,
        'genre_id' => $genre
    ];
});

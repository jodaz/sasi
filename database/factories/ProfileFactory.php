<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use App\Clap;
use App\Genre;
use Faker\Generator as Faker;

$genres = Genre::all();
$claps = Clap::all();

$factory->define(Profile::class, function (Faker $faker) use ($genres, $claps) {
    $genre = $genres->random(1)->first()->id;

    return [
        'first_name' => $faker->name,
        'surname' => $faker->lastName,
        'second_name' => $faker->firstName,
        'second_surname' => $faker->lastName,
        'dni' => $faker->unique()->randomNumber,
        'clap_id' => 1,
        'birth_date' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'genre_id' => $genre
    ];
});

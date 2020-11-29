<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Clap;
use Faker\Generator as Faker;

// $parishes = Parish::all();
// $axes = Axis::all();

$factory->define(Clap::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});

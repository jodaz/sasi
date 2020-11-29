<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Axis;
use Faker\Generator as Faker;

$factory->define(Axis::class, function (Faker $faker) {
    return [
        'name' => $faker->name
    ];
});

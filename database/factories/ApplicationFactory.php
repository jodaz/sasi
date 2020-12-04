<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Application;
use Faker\Generator as Faker;

$factory->define(Application::class, function (Faker $faker) {
    return [
        'num' => Application::getNewNum(),
        'title' => $faker->sentence,
        'description' => $faker->text($maxNbChars = 200),
        'state_id' => rand(1, 2),
    ];
});

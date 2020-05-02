<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Todo;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'text' => $faker->text,
        'user_id' => factory(\App\User::class),
    ];
});

<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Community;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Community::create(['name' => 'Centro']);

        User::create([
            'first_name' => env('FIRST_NAME', 'admin'),
            'surname' => env('SURNAME', 'user'),
            'email' => env('EMAIL', 'email@example.com'),
            'identification' => env('IDENTIFICATION', 'V-00000000'),
            'password' => bcrypt(env('PASSWORD', 'query123')),
            'genre_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'role_id' => 1,
            'address' => 'NULL'
        ]);
    }
}

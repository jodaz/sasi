<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'names' => 'Jesús Armando',
            'surnames' => 'Ordosgoitty Díaz',
            'email' => 'jesuodz@outlook.com',
            'identification' => 'V-27572434',
            'password' => bcrypt('qwerty123'), 
            'genre_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'address' => 'Avenida Libertad #217'
        ]);
    }
}

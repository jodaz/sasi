<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(GenresSeeder::class);
        $this->call(ParishesSeeder::class);
        $this->call(CommunitiesSeeder::class);
        $this->call(CommunityParishSeeder::class);
        $this->call(StatesSeeder::class);
    }
}

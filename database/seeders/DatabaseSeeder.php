<?php

use Illuminate\Database\Seeder;
use App\Application;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ParishesSeeder::class);
        $this->call(StatesSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(CommunitiesSeeder::class);
        $this->call(CommunityParishSeeder::class);
        $this->call(CategoriesSeeder::class);

        if (App::environment() == 'production') {
           $this->call(AdminSeeder::class);
        }

        if (App::environment() == 'local') {
            $this->call(TestSeeder::class);
        }
    }
}

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
        $this->call(CitizenshipsSeeder::class);
        $this->call(GenresSeeder::class);
        $this->call(ParishesSeeder::class);
        $this->call(StatesSeeder::class);
        $this->call(OrganizationTypesSeeder::class);
        $this->call(RolesSeeder::class);

        if (App::environment() == 'production') {
           $this->call(AdminSeeder::class); 
        } 

        if (App::environment() == 'local') {
            $this->call(CommunitiesSeeder::class);
            $this->call(CommunityParishSeeder::class);
            $this->call(TestSeeder::class);
        }
    }
}

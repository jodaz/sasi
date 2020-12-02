<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Application;
use App\Category;
use App\Profile;
use Illuminate\Support\Str;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create categories
        $categories = factory(Category::class, 10)->create();
        
        // Create users
        factory(Profile::class, 100)
            ->create()
            ->each(function ($profile) use ($categories) {
                $category = $categories->random(1)->first();
                
                $user = $profile->user()->save(factory(User::class)->make());

                // Create applications
                factory(Application::class, rand(1, 5))
                    ->make()
                    ->each(function ($application) use ($category, $profile){
                        $application
                            ->profile()->associate($profile)
                            ->category()->associate($category)
                            ->save();
                    });
            });
        
        // Admin user
        $admin = Profile::create([
            'first_name' => 'Jesús',
            'surname' => 'Ordosgoitty',
            'genre_id' => 1,
            'citizenship_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'address' => 'Ave. Libertad 123',
            'dni' => '27572434',
        ]);
        $admin->user()->create([
            'email' => 'admin@gmail.com',
            'password' => bcrypt('qwerty123'),
            'role_id' => 1,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
        
        // Analyst user
        $analyst = Profile::create([
            'first_name' => 'Andreina',
            'citizenship_id' => 1,
            'surname' => 'Santana',
            'genre_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'address' => 'Ave. Libertad 123',
            'dni' => 'V-26292605',
        ]);
        $analyst->user()->create([
            'email' => 'analista@gmail.com',
            'password' => bcrypt('qwerty123'),
            'role_id' => 2,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
    }
}

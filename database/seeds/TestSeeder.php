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
        factory(User::class, 100)
            ->create()
            ->each(function ($user) use ($categories) {
                $category = $categories->random(1)->first();
                
                $profile = $user->profile()->save(factory(Profile::class)->make());

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
        $admin = User::create([
            'first_name' => 'Jesús',
            'surname' => 'Ordosgoitty',
            'email' => 'jesuodz@gmail.com',
            'password' => bcrypt('qwerty123'),
            'dni' => 'V-27572434',
            'role_id' => 1,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
        $admin->profile()->create([
            'genre_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'address' => 'Ave. Libertad 123'
        ]);
        
        // Analyst user
        $analyst = User::create([
            'first_name' => 'Andreina',
            'surname' => 'Santana',
            'email' => 'nomesetucorreo@gmail.com',
            'dni' => 'V-26292605',
            'password' => bcrypt('qwerty123'),
            'role_id' => 2,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
        $analyst->profile()->create([
            'genre_id' => 1,
            'community_id' => 1,
            'parish_id' => 1,
            'address' => 'Ave. Libertad 123'
        ]);
    }
}

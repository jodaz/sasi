<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Application;
use App\Category;
use App\Profile;
use App\Parish;
use App\Clap;
use App\Axis;
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
        $parishes = Parish::all();
        $categories = factory(Category::class, 16)->create();
        $axes = factory(Axis::class, 10)->create()->each(function ($axis) use ($parishes) {
            $parish = $parishes->random(1)->first()->id;

            $axis->parishes()->sync([
                $parish
            ]);

            factory(Clap::class, rand(1, 5))
                ->make()
                ->each(function ($clap) use ($parish, $axis) {
                    $clap
                        ->parish()->associate($parish)
                        ->axis()->associate($axis)
                        ->save();
                });
        });
        
        // Create users
        factory(Profile::class, 100)
            ->create()
            ->each(function ($profile) use ($categories) {
                $category = $categories->random(1)->first();
                

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
            'birth_date' => '1998-02-26',
            'dni' => '27572434',
            'clap_id' => 1
        ]);
        $admin->user()->create([
            'email' => 'jesuodz@gmail.com',
            'password' => bcrypt('qwerty123'),
            'role_id' => 1,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
        
        // Analyst user
        $analyst = Profile::create([
            'first_name' => 'Andreina',
            'surname' => 'Santana',
            'genre_id' => 1,
            'birth_date' => '1998-02-26',
            'dni' => '26292605',
            'clap_id' => 1
        ]);
        $analyst->user()->create([
            'email' => 'nomesetucorreo@gmail.com',
            'password' => bcrypt('qwerty123'),
            'role_id' => 2,
            'active' => true,
            'activation_token' => Str::random(60),
        ]);
    }
}

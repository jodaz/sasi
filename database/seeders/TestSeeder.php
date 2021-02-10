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
        // Create axis
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
        $categories = factory(Category::class, 5)->create();

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
            'birth_date' => '1998-02-26',
            'dni' => '27572434',
            'clap_id' => 1,
            'citizenship_id' => 1,
            'dni' => '27572434',
        ]);
        $admin->user()->create([
            'email' => 'admin@admin.com',
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
            'birth_date' => '1998-02-26',
            'dni' => '26292605',
            'clap_id' => 1
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

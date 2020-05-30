<?php

use Illuminate\Database\Seeder;
use App\Genre;

class GenresSeeder extends Seeder
{
    public $genres = Array(
        'MASCULINO',
        'FEMENINO'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->genres as $key => $genre) {
            Genre::create([
                'name' => $genre
            ]);
        }
    }
}

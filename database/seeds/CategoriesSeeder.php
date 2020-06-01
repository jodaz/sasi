<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesSeeder extends Seeder
{
    protected $categories = Array(
        'Económico',
        'Salud'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->categories as $category) {
            Category::create([
                'name' => $category
            ]);
        }
    }
}

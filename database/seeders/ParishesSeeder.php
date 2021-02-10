<?php

use Illuminate\Database\Seeder;
use App\Parish;

class ParishesSeeder extends Seeder
{
    public $parishes = Array(
        'BOLÍVAR',
        'MACARAPANA',
        'SANTA CATALINA',
        'SANTA ROSA',
        'SANTA TERESA'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->parishes as $key => $parish) {
            Parish::create([
                'name' => $parish
            ]);
        }
    }
}

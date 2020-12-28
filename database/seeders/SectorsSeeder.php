<?php

use Illuminate\Database\Seeder;
use App\Sector;

class SectorsSeeder extends Seeder
{
    protected $sectors = Array(
        'TURISMO', 'COMERCIO'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->sectors as $sector) {
            Sector::create([
                'name' => $sector
            ]);
        } 
    }
}

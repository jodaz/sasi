<?php

use Illuminate\Database\Seeder;
use App\Citizenship;

class CitizenshipsSeeder extends Seeder
{
    protected $citizenships = [
        'VENEZOLANO(A)' => 'V-',
        'EXTRANJERO(A)' => 'E-'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->citizenships as $key => $value) {
            Citizenship::create([
                'name' => $key,
                'correlative' => $value
            ]);
        }
    }
}

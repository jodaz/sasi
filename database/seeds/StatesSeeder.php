<?php

use Illuminate\Database\Seeder;
use App\State;

class StatesSeeder extends Seeder
{
    public $states = Array(
        'Pendiente',
        'Aprobado',
        'Denegado'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->states as $key => $state) {
            State::create([
                'name' => $state
            ]);
        }
    }
}

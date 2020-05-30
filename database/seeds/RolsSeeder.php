<?php

use Illuminate\Database\Seeder;
use App\Rol;

class RolsSeeder extends Seeder
{
    protected $rols = Array(
        'user',
        'admin',
        'analyst',
        'support'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->rols as $key => $value) {
            Rol::create([
                'name' => $value
            ]);
        }
    }
}

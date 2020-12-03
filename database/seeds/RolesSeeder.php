<?php

use Illuminate\Database\Seeder;
use App\Rol;

class RolesSeeder extends Seeder
{
    protected $roles = Array(
        'Admininistrador', 'Analista', 'Cliente'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->roles as $role) {
            Rol::create([
                'name' => $role
            ]);
        }
    }
}

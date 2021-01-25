<?php

use Illuminate\Database\Seeder;
use App\OrganizationType;

class OrganizationTypesSeeder extends Seeder
{
    protected $types = Array(
        'PÚBLICA',
        'PRIVADA'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->types as $key => $value) {
            OrganizationType::create([
                'name' => $value
            ]);
        }
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Citizenship extends Model
{
    protected $table = 'citizenships';

    public function profiles()
    {
        return $this->hasMany(Profile::class);
    }
}

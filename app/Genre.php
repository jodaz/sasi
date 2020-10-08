<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $table = 'genres';

    public function profile()
    {
        return $this->hasMany(Profile::class);
    }
}

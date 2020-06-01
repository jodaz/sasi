<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public function novelties()
    {
        return $this->hasMany(Novelty::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}

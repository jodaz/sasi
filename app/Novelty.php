<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Novelty extends Model
{
    protected $table = 'novelties';

    protected $guarded = [];

    public function state()
    {
        return $this->hasOne(State::class);
    }

    public function category()
    {
        return $this->hasOne(Category::class);
    }
}

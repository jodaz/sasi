<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Axis extends Model
{
    protected $table = 'axes';

    protected $fillable = [ 'name' ];

    public function claps()
    {
        return $this->hasMany(Clap::class, 'axis_id');
    }
}

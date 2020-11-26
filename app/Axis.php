<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Axis extends Model
{
    protected $table = 'axes';

    protected $fillable = [ 'name' ];

    protected $appends = [ 'parish_names' ];

    public function claps()
    {
        return $this->hasMany(Clap::class, 'axis_id');
    }

    public function parishes()
    {
        return $this->belongsToMany(Parish::class);
    }

    public function getParishNamesAttribute()
    {
        return $this->parishes()->get()->implode('name', ', ');
    }
}

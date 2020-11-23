<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clap extends Model
{
    protected $table = 'claps';

    protected $fillable = [
        'name',
        'axis_id',
        'parish_id'
    ];

    public function axis()
    {
        return $this->belongsTo(Axis::class, 'axis_id');
    }

    public function parish()
    {
        return $this->belongsTo(Parish::class);
    }
}

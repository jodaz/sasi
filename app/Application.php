<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function category()
    {
        return $this->hasOne(Category::class);
    }
}

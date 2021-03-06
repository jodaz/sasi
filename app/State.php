<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $table = 'states';

    protected $fillable = [ 'name', 'list_name' ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}

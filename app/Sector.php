<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    protected $table = 'sectors';

    protected $fillable = [ 'name' ];

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function novelties()
    {
        return $this->hasMany(Novelty::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}

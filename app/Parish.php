<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parish extends Model
{
    protected $table = 'parishes';

    protected $fillable = [ 'name' ];

    public function claps()
    {
        return $this->hasMany(Clap::class);
    }

    public function communities()
    {
        return $this->belongsToMany(Community::class, 'community_parish');
    }

    public function profiles()
    {
        return $this->hasMany(Profile::class);
    }

    public function organizations()
    {
       return $this->hasMany(Organization::class);
    }

    public function applications()
    {
        return $this->hasManyThrough(Application::class, User::class);
    }
}

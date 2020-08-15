<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parish extends Model
{
    protected $table = 'parishes';

    protected $fillable = [ 'name' ];

    public function communities()
    {
        return $this->belongsToMany(Community::class, 'community_parish');
    }

    public function users()
    {
        return $this->hasMany(User::class);
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

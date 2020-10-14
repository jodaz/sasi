<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Community extends Model {
    protected $table = 'communities';

    protected $fillable = [ 'name' ];

    protected $appends = [
        'parish_names'
    ];

    public function parishes()
    {
        return $this->belongsToMany(Parish::class, 'community_parish');
    }

    public function applications()
    {
        return $this->hasManyThrough(Application::class, Profile::class);
    }

    public function profile()
    {
        return $this->hasMany(Profile::class);
    }

    public function organizations()
    {
       return $this->hasMany(Organization::class);
    }

    public function getParishNamesAttribute()
    {
        return $this->parishes()->get()->implode('name', ', ');
    }
}

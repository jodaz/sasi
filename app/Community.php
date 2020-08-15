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
        return $this->hasManyThrough(Application::class, User::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function organizations()
    {
       return $this->hasMany(Organization::class);
    }

    public function getParishNamesAttribute()
    {
        return $this->parishes()->get()->implode('name', ', ');
    }

    public function getNumApplicationsAttribute()
    {
        return $this->applications()->count();
    }
}

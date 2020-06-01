<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $table = 'organizations';

    protected $fillable = [
        'rif',
        'name',
        'address',
        'organization_type_id',
        'parish_id',
        'sector_id',
        'community_id'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function organizationType()
    {
        return $this->belongsTo(Organization::class);
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }

    public function parish()
    {
        return $this->belongsTo(Parish::class);
    }

    public function applications()
    {
        return $this->belongsToMany(Application::class);
    }

    public function community()
    {
        return $this->belongsTo(Community::class);
    }
}

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function organizationType()
    {
        return $this->belongsTo(Organization::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
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

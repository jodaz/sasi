<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FamilyLink extends Model
{
    protected $table = 'family_groups';

    protected $fillable = [
        'family_id',
        'profile_id',
        'dependency_id'
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function dependency()
    {
        return $this->belongsTo(Dependency::class);
    }

    public function family()
    {
        return $this->belongsTo(Family::class);
    }
}

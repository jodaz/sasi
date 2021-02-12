<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dependency extends Model
{
    protected $table = 'dependencies';

    protected $fillable = [
        'name'
    ];

    public function familyGroups()
    {
        return $this->hasMany(FamilyGroup::class);
    }
}

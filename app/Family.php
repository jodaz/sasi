<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $fillable = 'families';

    public function familyLinks()
    {
        return $this->hasMany(FamilyLink::class);
    }
}

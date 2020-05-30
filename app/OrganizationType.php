<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrganizationType extends Model
{
    protected $table = 'organization_types';

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }
}

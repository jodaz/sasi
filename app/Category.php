<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    protected $fillable = [ 'name' ];

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}

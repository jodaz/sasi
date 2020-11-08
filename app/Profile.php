<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';

    protected $appends = [ 'full_name' ];

    protected $fillable = [
        'second_name',
        'second_surname',
        'address',
        'community_id',
        'parish_id',
        'genre_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function parish()
    {
        return $this->belongsTo(Parish::class);
    }

    public function community()
    {
        return $this->belongsTo(Community::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->surname}";
    }
}

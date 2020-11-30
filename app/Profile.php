<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';

    protected $fillable = [
        'dni',
        'first_name',
        'surname',
        'second_name',
        'address',
        'phone',
        'second_surname',
        'community_id',
        'parish_id',
        'citizenship_id',
        'genre_id'
    ];

    protected $appends = [
        'full_name',
        'full_address'
    ];

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->second_name} {$this->surname} {$this->second_surname}";
    }

    public function getFullAddressAttribute()
    {
        return "{$this->parish->name}, {$this->community->name}, {$this->address}";
    }

    public function citizenship()
    {
        return $this->belongsTo(Citizen::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
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
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';

    protected $appends = [ 'full_name' ];

    protected $fillable = [
        'dni',
        'first_name',
        'surname',
        'second_name',
        'second_surname',
        'birth_date',
        'phone',
        'clap_id',
        'genre_id'
    ];

    public function familyLink()
    {
        return $this->hasOne(FamilyLink::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function clap()
    {
        return $this->belongsTo(Clap::class);
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
        return "{$this->first_name} {$this->second_name} {$this->surname} {$this->second_surname}";
    }
}

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
    ];

    public function profile()
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

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->surname}";
    }
}

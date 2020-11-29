<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $appends = [ 'full_name' ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function organizations()
    {
        return $this->profile->organizations();
    }

    public function applications()
    {
        return $this->profile->applications();
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function role()
    {
        return $this->belongsTo(Rol::class);
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->surname}";
    }
}

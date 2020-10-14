<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';

    protected $fillable = [
        'description',
        'quantity',
        'profile_id',
        'category_id',
        'state_id',
        'approved_at'
    ];

    public function organization()
    {
        return $this->belongsToMany(Organization::class);
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getCreatedAtAttribute($value)
    {
        return Date('d/m/Y h:i', strtotime($value));
    }
}

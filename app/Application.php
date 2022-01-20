<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\NewValue;
use Illuminate\Database\Eloquent\SoftDeletes;

class Application extends Model
{
    use NewValue, SoftDeletes;

    protected $table = 'applications';

    protected $fillable = [
        'title',
        'description',
        'quantity',
        'profile_id',
        'category_id',
        'state_id',
        'person_id',
        'approved_at'
    ];

    public function organization()
    {
        return $this->belongsToMany(Organization::class, 'organization_application');
    }

    public function person()
    {
        return $this->belongsTo(Person::class);
    }
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getApprovedAtAttribute($value)
    {
        return Date('d/m/Y', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return Date('d/m/Y h:i', strtotime($value));
    }
}

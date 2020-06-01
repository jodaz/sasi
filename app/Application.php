<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';

    protected $fillable = [
        'description',
        'quantity',
        'user_id',
        'category_id',
        'state_id',
        'approved_at'
    ];

    public function organization()
    {
        return $this->belongsToMany(Organization::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

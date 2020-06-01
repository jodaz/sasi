<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Novelty extends Model
{
    protected $table = 'novelties';

    protected $fillable = [
        'title',
        'content',
        'category_id',
        'state_id',
        'user_id',
        'votes',
        'approved_at'
    ];

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionTime extends Model
{
    use HasFactory;
    protected $fillable = [
        'time',
    ];
    public $timestamps = false;
    protected $table = 'time_session';
}

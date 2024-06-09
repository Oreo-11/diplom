<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obed extends Model
{
    use HasFactory;
    protected $fillable = [
        'time_start_obed',
        'time_end_obed'
    ];
    public $timestamps = false;
    protected $table = 'time_obed';
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PravaDostypa extends Model
{
    use HasFactory;
    protected $fillable = [
        'Managing_the_work_week',
        'Working_with_users',
        'Viewing_the_schedule_of_specialists_for_the_month',
        'Statistics_based_on_the_users_work'
    ];
    public $timestamps = false;
    protected $table = 'prava_dostypa';
}

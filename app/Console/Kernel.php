<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailClient;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        $day_today = date('Y-m-d');
        $date_yesterday = date_create_from_format('Y-m-d', $day_today);
        date_sub($date_yesterday, date_interval_create_from_date_string('1 days'));
        $date_yesterday = date_format($date_yesterday, 'Y-m-d');
        $day_today = date('Y-m-d', strtotime($day_today . ' +1 day'));
        $schedule->call(function() {
            $email = DB::select("SELECT users.email FROM users join Appointment_with_a_specialist on Appointment_with_a_specialist.id_client = users.id 
            and Appointment_with_a_specialist.date <= '2024-04-26' and Appointment_with_a_specialist.date > '2024-04-24'");
            for($i = 0; $i < 1; $i++) {
                Mail::to($email[0]->email)->send(new MailClient(['da']));
            }
            
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

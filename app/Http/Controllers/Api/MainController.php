<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Mail;
use App\Mail\MailClient;
use App\Http\Controllers\Controller;
use App\Models\Obed;
use App\Models\PravaDostypa;
use App\Models\Role;
use App\Models\SessionTime;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;
use App\Models\User;
use App\Models\Client;
use Carbon\Carbon;

class MainController extends Controller
{
    public function GetUser(Request $request) {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);


        $you_date = $user->data_birthday; // Ваша дата
	    $now_date = date("Y-m-d"); // Текущая дата
	    $you_date_unix = strtotime($you_date);
	    $now_date_unix = strtotime($now_date);
	    $result = ($now_date_unix-$you_date_unix) / (60*60*24*365); // Расчитываем года
	    $years = floor($result); // Округляем результат до целого числа
        $user->age = $years;
        $rating = DB::select("SELECT AVG(Appointment_with_a_specialist.rating) as 'rating' FROM Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = $user->id");
        if($rating == null) {
            $rating = 0;
        }
        $user->rate = $rating;
        return $user;
    }



    public function Managing_the_work_week(Request $request, $id)
    {
        $all_time_work_week = DB::select("SELECT day.name as 'day', working_week.time as 'time', working_week.type_time as 'type_time', working_week.start_time_work, working_week.end_time_work, (SELECT GROUP_CONCAT(time_session.time)  FROM time_session) as 'time_session_all', (select GROUP_CONCAT(time_obed.time_start_obed) FROM time_obed) as 'time_start_obed_all', (select GROUP_CONCAT(time_obed.time_end_obed) FROM time_obed) as 'time_end_obed_all' FROM working_week
        JOIN day on day.id = working_week.id_day AND working_week.id_user = $id");
        $array_monday = [];
        $array_tuesday = [];
        $array_wednesday = [];
        $array_thursday = [];
        $array_friday = [];
        $array_saturday = [];
        $array_sunday = [];
        for ($i = 0; $i < count($all_time_work_week); $i++) {
            if ($all_time_work_week[$i]->day == "Понедельник") {
                array_push($array_monday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Вторник") {
                array_push($array_tuesday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Среда") {
                array_push($array_wednesday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Четверг") {
                array_push($array_thursday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Пятница") {
                array_push($array_friday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Суббота") {
                array_push($array_saturday, $all_time_work_week[$i]);
            } elseif ($all_time_work_week[$i]->day == "Воскресенье") {
                array_push($array_sunday, $all_time_work_week[$i]);
            }
        }
        $response = new stdClass();
        $response->monday = $array_monday;
        $response->tuesday = $array_tuesday;
        $response->wednesday = $array_wednesday;
        $response->thursday = $array_thursday;
        $response->friday = $array_friday;
        $response->saturday = $array_saturday;
        $response->sunday = $array_sunday;
        return $response;
    }

    public function hardWeek() {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $start = Carbon::now()->startOfWeek();

        $tuesday_day = new Carbon("Tuesday");
        $wednesday_day = new Carbon("Wednesday");
        $thursday_day = new Carbon("Thursday");
        
        $friday_day = new Carbon("Friday");
        $saturday_day = new Carbon("Saturday");
        $sunday_day = new Carbon("Sunday");
        $date_monday = strtotime($start);
        $date_monday = date("Y-m-d", $date_monday);

        $date_tuesday = strtotime($tuesday_day);
        $date_tuesday = date("Y-m-d", $date_tuesday);

        $date_wednesday = strtotime($wednesday_day);
        $date_wednesday = date("Y-m-d", $date_wednesday);

        $date_thursday = strtotime($thursday_day);
        $date_thursday = date("Y-m-d", $date_thursday);

        $date_friday = strtotime($friday_day);
        $date_friday = date("Y-m-d", $date_friday);

        $date_saturday = strtotime($saturday_day);
        $date_saturday = date("Y-m-d", $date_saturday);

        $date_sunday = strtotime($sunday_day);
        $date_sunday = date("Y-m-d", $date_sunday);

        $max_count = 0;
        $day_max = "Понедельник";
        $monday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_monday'");
        if($monday[0]->count >= $max_count) {
            $max_count = $monday[0]->count;
            $day_max = "Понедельник";
        }
        $tuesday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_tuesday'");
        if($tuesday[0]->count >= $max_count) {
            $max_count = $tuesday[0]->count;
            $day_max = "Вторник";
        }
        $wednesday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_wednesday'");
        if($wednesday[0]->count >= $max_count) {
            $max_count = $wednesday[0]->count;
            $day_max = "Среда";
        }
        $thursday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_thursday'");
        if($thursday[0]->count >= $max_count) {
            $max_count = $thursday[0]->count;
            $day_max = "Четверг";
        }
        $friday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_friday'");
        if($friday[0]->count >= $max_count) {
            $max_count = $friday[0]->count;
            $day_max = "Пятница";
        }
        $saturday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_saturday'");
        if($saturday[0]->count >= $max_count) {
            $max_count = $saturday[0]->count;
            $day_max = "Суббота";
        }

        $sunday = DB::select("select count(Appointment_with_a_specialist.time) as 'count' from Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = '$user->id' and Appointment_with_a_specialist.date = '$date_sunday'");
        if($sunday[0]->count >= $max_count) {
            $max_count = $sunday[0]->count;
            $day_max = "Воскресенье";
        }
        return $day_max;
    }

    public function allUsers()
    {
        $allUsers = DB::select("SELECT * FROM users where users.type = 'system'");
        return $allUsers;
    }

    public function allRoles()
    {
        $allRoles = DB::select("SELECT prava_dostypa.*, roles.id as 'id_role', roles.name as 'name_role' from prava_dostypa JOIN roles_prava_dostypa on roles_prava_dostypa.id_prava_dostypa = prava_dostypa.id JOIN roles on roles.id = roles_prava_dostypa.id_roles
        ");
        return $allRoles;
    }

    public function addUser(Request $request)
    {
        $name = $request->name;
        $surname = $request->surname;
        $patronymic = $request->patronymic;
        $email = $request->email;
        $role = $request->role;
        $password = $request->password;
        $data_birthday = $request->data_birthday;
        $gender = $request->gender;
        $type = 'system';

        DB::insert("INSERT INTO `users`(`name`, `surname`, `patronymic`, `email`, `role`, `password`, `data_birthday`, `gender`, `type`) 
        VALUES ('$name','$surname','$patronymic','$email','$role','$password', '$data_birthday','$gender', '$type')");
        return 'Пользователь создан';
    }

    public function updateRole(Request $request)
    {
        $id = $request->id;
        $Managing_the_work_week = $request->Managing_the_work_week;
        $Working_with_users = $request->Working_with_users;
        $Viewing_the_schedule_of_specialists_for_the_month = $request->Viewing_the_schedule_of_specialists_for_the_month;
        $Statistics_based_on_the_users_work = $request->Statistics_based_on_the_users_work;


        DB::update("UPDATE `prava_dostypa` SET `Managing_the_work_week`='$Managing_the_work_week',`Working_with_users`='$Working_with_users',
        `Viewing_the_schedule_of_specialists_for_the_month`='$Viewing_the_schedule_of_specialists_for_the_month',`Statistics_based_on_the_users_work`='$Statistics_based_on_the_users_work' WHERE prava_dostypa.id = $id");

        return "Роль обновлена";
    }

    public function addRole(Request $request)
    {
        $name = $request->name;
        $Managing_the_work_week = $request->Managing_the_work_week;
        $Working_with_users = $request->Working_with_users;
        $Viewing_the_schedule_of_specialists_for_the_month = $request->Viewing_the_schedule_of_specialists_for_the_month;
        $Statistics_based_on_the_users_work = $request->Statistics_based_on_the_users_work;

        $new_role = new Role();
        $new_role->name = $name;
        $new_role->save();

        $new_prava_dostypa = new PravaDostypa();
        $new_prava_dostypa->Managing_the_work_week = $Managing_the_work_week;
        $new_prava_dostypa->Working_with_users = $Working_with_users;
        $new_prava_dostypa->Viewing_the_schedule_of_specialists_for_the_month = $Viewing_the_schedule_of_specialists_for_the_month;
        $new_prava_dostypa->Statistics_based_on_the_users_work = $Statistics_based_on_the_users_work;
        $new_prava_dostypa->save();
        DB::insert("INSERT INTO `roles_prava_dostypa` (`id_roles`, `id_prava_dostypa`) VALUES ('$new_role->id', '$new_prava_dostypa->id')");
        return "Новая роль создана";
    }

    public function updateImgUser(Request $request){
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $file = $request->file;

        $time_save = time();
        $file->storeAs(
            '/public/uploads',
            $time_save . str_replace(' ', '', $file->getClientOriginalName())
        );
        $file_url = "http://127.0.0.1:8000/storage/uploads/" . $time_save . $file->getClientOriginalName();
        $file_url = str_replace(' ', '', $file_url);

        DB::update("UPDATE `users` SET `img`='$file_url' WHERE users.id = $user->id");
        return "Фотография обновлена";
    }

    public function updateWorkUser(Request $request)
    {
        $arr = [];
        $arr_type = [];


        $id_user = $request->id_user;
        $start_obed = $request->start_obed;
        $end_obed = $request->end_obed;
        $new_obed = $request->new_obed;
        $new_session = $request->new_session;
        $time_session = $request->time_session;
        $id_day = $request->id_day;
        $start_work = $request->start_work;
        $end_work = $request->end_work;

        DB::delete("DELETE FROM `working_week` WHERE working_week.id_user = '$id_user' and working_week.id_day = '$id_day'");

        if ($new_obed == true) {
            $obed = new Obed();
            $obed->time_start_obed = $start_obed;
            $obed->time_end_obed = $end_obed;
            $obed->save();
            DB::update("UPDATE `users` SET `time_obed`='$obed->id' WHERE users.id = $id_user");
        }
        if ($new_session == true) {
            $session = new SessionTime();
            $session->time = $time_session;
            $session->save();
            DB::update("UPDATE `users` SET `id_time_session`='$session->id' WHERE users.id = $id_user");
        }

        array_push($arr, $start_work);
        array_push($arr_type, 0);
        while (date("H:i", strtotime($start_work)) < date("H:i", strtotime("$start_obed"))) {
            
            $start_work = date("H:i", strtotime("+$time_session minute", strtotime($start_work)));
            $chek = $start_work;
            if(date("H:i", strtotime("+$time_session minute", strtotime($chek))) < date("H:i", strtotime("$start_obed"))) {
                array_push($arr, $start_work);
                array_push($arr_type, 0);
            } else {
                break 1;
            }
        }
        // while (date("H:i", strtotime($start_obed)) < date("H:i", strtotime("$end_obed"))) {
        //     $start_obed = date("H:i", strtotime("+$time_session minute", strtotime($start_obed)));
        //     array_push($arr, $start_obed);
        //     array_push($arr_type, 1);
        // }
            array_push($arr, $end_obed);
            array_push($arr_type, 1);
        while (date("H:i", strtotime($end_obed)) < date("H:i", strtotime("$end_work"))) {
            $end_obed = date("H:i", strtotime("+$time_session minute", strtotime($end_obed)));
            $chek = $end_obed;
            if(date("H:i", strtotime($chek)) < date("H:i", strtotime("$end_work"))) {
                array_push($arr, $end_obed);
                array_push($arr_type, 0);
            }
        }

        for ($i = 0; $i < count($arr); $i++) {
            DB::insert("INSERT INTO `working_week` (`id_user`, `time`, `type_time`, `id_day`, 
            `start_time_work`, `end_time_work`) VALUES ('$id_user', '$arr[$i]', '$arr_type[$i]', '$id_day', '$request->start_work', ' $request->end_work')");
        }
        return "Время работы обновленно";
    }

    public function allClient()
    {
        $allClient = DB::select("SELECT * FROM users where users.type = 'client'");
        return $allClient;
    }

    public function addClient(Request $request)
    {
        $file = $request->file;
        $time_save = time();
        $file->storeAs(
            '/public/uploads',
            $time_save . str_replace(' ', '', $file->getClientOriginalName())
        );
        $file_url = "http://127.0.0.1:8000/storage/uploads/" . $time_save . $file->getClientOriginalName();
        $file_url = str_replace(' ', '', $file_url);
        $name = $request->name;
        $surname = $request->surname;
        $patronymic = $request->patronymic;
        $phone = $request->phone;
        $email = $request->email;
        $password = $request->password;
        $age = $request->age;
        $type = "client";
        $client_code = '';
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $max = strlen($characters) - 1;
        for ($i = 0; $i < 15; $i++) {
            $client_code .= $characters[mt_rand(0, $max)];
        }
        DB::insert("INSERT INTO `users`(`name`, `surname`, `patronymic`, `email`, `password`, `type`, `age`, `phone`, `client_code`, `img`) 
        VALUES ('$name','$surname','$patronymic','$email','$password','$type', '$age', '$phone', '$client_code', '$file_url')");
        return "Клиент создан";
    }

    public function addRecordClient(Request $request)
    {
        $date = $request->date;
        $time = $request->time;
        $id_client = $request->id_client;
        $id_user = $request->id_user;

        DB::insert("INSERT INTO `Appointment_with_a_specialist` (`date`, `time`, `id_client`, `id_user`) 
        VALUES ('$date', '$time', '$id_client', '$id_user')");

        return "Запись к специалисту создана";
    }

    public function recordForToday(Request $request)
    {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $day_today = date('Y-m-d');
        $date_yesterday = date_create_from_format('Y-m-d', $day_today);
        date_sub($date_yesterday, date_interval_create_from_date_string('1 days'));
        $date_yesterday = date_format($date_yesterday, 'Y-m-d');
        $day_today = date('Y-m-d', strtotime($day_today . ' +1 day'));
        $record_for_today = DB::select("SELECT Appointment_with_a_specialist.*, users.name as 'client_name' from Appointment_with_a_specialist JOIN users on users.id = Appointment_with_a_specialist.id_client 
        and Appointment_with_a_specialist.id_user = $user->id and Appointment_with_a_specialist.date < '$day_today' and Appointment_with_a_specialist.date > '$date_yesterday' ");
        return $record_for_today;
    }

    public function recordForMonth()
    {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $day_today = date('Y-m-d');
        $date_month = date_create_from_format('Y-m-d', $day_today);
        date_sub($date_month, date_interval_create_from_date_string('-1 month'));
        $date_month = date_format($date_month, 'Y-m-d');
        $record_for_today = DB::select("SELECT Appointment_with_a_specialist.*, client.name as 'client_name' from Appointment_with_a_specialist JOIN client on client.id = Appointment_with_a_specialist.id_client 
        and Appointment_with_a_specialist.id_user = $user->id and Appointment_with_a_specialist.date < '$date_month' and Appointment_with_a_specialist.date >= '$day_today' ");
        return $record_for_today;
    }

    public function recordForMonthUser(Request $request, $id)
    {
        $data_data = date('m');
        $data_data_Day = date('d');
        $day_mounts = cal_days_in_month(CAL_GREGORIAN, $data_data, 2003);
        $day_today = date('Y-m-d');
        $date_month = date_create_from_format('Y-m-d', $day_today);
        date_sub($date_month, date_interval_create_from_date_string('-1 month'));
        $date_month = date_format($date_month, 'Y-m-d');
        $record_for_today = DB::select("SELECT Appointment_with_a_specialist.*, users.name as 'client_name' from Appointment_with_a_specialist JOIN users on users.id = Appointment_with_a_specialist.id_client 
        and Appointment_with_a_specialist.id_user = $id and Appointment_with_a_specialist.date >= '$day_today' and Appointment_with_a_specialist.date < '$date_month'");
        $data = new stdClass();
        $data->data = $record_for_today;
        $data->mounts = $day_mounts;
        $arr_day = [];
        $arr_day_day = [];

        for($i = $data_data_Day+0; $i <= $day_mounts; $i++) {
            if(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Wednesday') {
                $class = new stdClass();
                $class->week = "Ср";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            } elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Thursday') {
                $class = new stdClass();
                $class->week = "Чт";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Friday') {
                $class = new stdClass();
                $class->week = "Пт";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Saturday') {
                $class = new stdClass();
                $class->week = "Сб";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Sunday') {
                $class = new stdClass();
                $class->week = "Вс";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Monday') {
                $class = new stdClass();
                $class->week = "Пн";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data . "-" . $i)) == 'Tuesday') {
                $class = new stdClass();
                $class->week = "Вт";
                $class->day = $i;
                if($data_data === '01') {
                    $class->mounts = "Января";
                } elseif($data_data == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
        }
        for($i = 1; $i <= $data_data_Day; $i++) {
            if(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Wednesday') {
                $class = new stdClass();
                $class->week = "Ср";
                $class->day = $i;
                if($data_data+1 === '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            } elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Thursday') {
                $class = new stdClass();
                $class->week = "Чт";
                $class->day = $i;
                if($data_data+1 == '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Friday') {
                $class = new stdClass();
                $class->week = "Пт";
                $class->day = $i;
                if($data_data+1 === '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Saturday') {
                $class = new stdClass();
                $class->week = "Сб";
                $class->day = $i;
                if($data_data+1 == '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Sunday') {
                $class = new stdClass();
                $class->week = "Вс";
                $class->day = $i;
                if($data_data+1 == '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Monday') {
                $class = new stdClass();
                $class->week = "Пн";
                $class->day = $i;
                if($data_data+1 === '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
            elseif(date("l",strtotime("2024-" . $data_data+1 . "-" . $i)) == 'Tuesday') {
                $class = new stdClass();
                $class->week = "Вт";
                $class->day = $i;
                if($data_data+1 == '01') {
                    $class->mounts = "Января";
                } elseif($data_data+1 == "02") {
                    $class->mounts = "Февраля";
                }
                elseif($data_data+1 == "03") {
                    $class->mounts = "Марта";
                }
                elseif($data_data+1 == "04") {
                    $class->mounts = "Апреля";
                }
                elseif($data_data+1 == "05") {
                    $class->mounts = "Мая";
                }
                elseif($data_data+1 == "06") {
                    $class->mounts = "Июня";
                }
                elseif($data_data+1 == "07") {
                    $class->mounts = "Июля";
                }
                elseif($data_data+1 == "08") {
                    $class->mounts = "Августа";
                }
                elseif($data_data+1 == "09") {
                    $class->mounts = "Сентября";
                }
                elseif($data_data+1 == "10") {
                    $class->mounts = "Октября";
                }
                elseif($data_data+1 == "11") {
                    $class->mounts = "Декабря";
                }
                elseif($data_data+1 == "12") {
                    $class->mounts = "Февраля";
                }
                array_push($arr_day, $class);
            }
        }
        $data->day = $arr_day;
        return $data;
    }

    public function family()
    {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $family = DB::select("SELECT users.id, users.name, users.client_code, users.surname, users.patronymic, users.img, client_role.name as 'role'
        from users JOIN family_of_clients on family_of_clients.id_client = users.id and users.id_family = $user->id_family left JOIN client_role on client_role.id = family_of_clients.role_client");

        return $family;
    }

    public function getClient()
    {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);

        $client = DB::select("SELECT users.name, users.surname, users.patronymic, users.img, users.client_code, users.phone, users.age from users WHERE users.id = $user->id");
        return $client;
    }

    public function getFamilyFromClientCode(Request $request)
    {
        $client_code = $request->client_code;
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $client_family = DB::select("SELECT users.id, users.name, users.surname, users.patronymic, users.img, users.id_family, users.client_code, users.phone, users.age from users WHERE users.client_code = '$client_code'");
        $client_code = $client_family[0]->client_code;
        $client_id = $client_family[0]->id;
        $client_id_family = $client_family[0]->id_family;
        if (count($client_family) > 0) {
            DB::delete("DELETE FROM `family_of_clients` WHERE family_of_clients.id_client = $client_id and family_of_clients.id_family = $client_id_family");
            DB::update("UPDATE `users` SET `id_family`='$user->id_family' WHERE users.client_code = '$client_code'");
            DB::insert("INSERT INTO `family_of_clients` (`id_client`, `id_family`) VALUES ('$client_id', '$user->id_family')");
            return "Член семьи добавлен";
        } else {
            return "Такого пользователя нету";
        }
    }

    public function rating(Request $request) {    
        $id_record = $request->id_record;
        $rating = $request->rating;
        DB::update("UPDATE `Appointment_with_a_specialist` SET `rating`='$rating' WHERE Appointment_with_a_specialist.Id = $id_record");
    }

    public function getAvaragerating(Request $request) {
        $start_rating = $request->start_rating;
        $end_rating = $request->end_rating;
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $rating = DB::select("SELECT AVG(Appointment_with_a_specialist.rating) as 'rating' FROM Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = $user->id and 
        Appointment_with_a_specialist.date >= '$start_rating' and Appointment_with_a_specialist.date <= '$end_rating'");
        if($rating == null) {
            $rating = 0;
        }
        return $rating;
    }

    public function getAvarageCountClient(Request $request) {
        $start_rating = $request->start_rating;
        $end_rating = $request->end_rating;
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user = User::findOrFail($user_id->id);
        $rating = DB::select("SELECT COUNT(Appointment_with_a_specialist.Id) as 'count' FROM Appointment_with_a_specialist where Appointment_with_a_specialist.id_user = $user->id and 
        Appointment_with_a_specialist.date >= '$start_rating' and Appointment_with_a_specialist.date <= '$end_rating'");
        return $rating;
    }
}

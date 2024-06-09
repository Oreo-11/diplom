<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ViewingtheScheduleOfSpecialistsForTheMonth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $yourToken = request()->bearerToken();
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user_id = $token->tokenable;
        $user_author = User::findOrFail($user_id->id);

        $prava_dostypa = DB::select("select prava_dostypa.* from prava_dostypa JOIN roles_prava_dostypa on roles_prava_dostypa.id_prava_dostypa = prava_dostypa.id 
        JOIN roles on roles.id = roles_prava_dostypa.id_roles JOIN users on users.role = roles.id and users.id = $user_author->id");

        if($prava_dostypa[0]->Viewing_the_schedule_of_specialists_for_the_month == 1) {
            return $next($request);
        } else {
            return response()->json([
                'message' => "Forbid1111den for you"
            ], 403);
        }
    }
}

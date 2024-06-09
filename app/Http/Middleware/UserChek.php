<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserChek
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

        if($user_author->type == 'system') {
            return $next($request);
        } else {
            return response()->json([
                'message' => "Forbidddadaen for you"
            ], 403);
        }
    }
}

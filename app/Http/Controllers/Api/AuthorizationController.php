<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use stdClass;
use Illuminate\Support\Facades\DB;

class AuthorizationController extends Controller
{
    public function register(Request $request)
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
          
            $user = User::create([
                'name' => $request->name,
                'surname' => $request->surname,
                'patronymic' => $request->patronymic,
                'email '=> $request->email,
                'password'=> $request->password,
                'type'=> 'client',
                'phone'=> $request->phone,
                'age'=> $request->age,
                'client_code'=> $client_code,
                'img'=> $file_url,
            ]);

            $token = $user->createToken('user_token')->plainTextToken;
            $user->remember_token = $token;
            $user->id_family = $user->id;
            $user->save();

            return response()->json([
                'success' => true,
                'message' => 'Success',
                'token' => $token
            ], 200);
    }

    public function login(Request $request)
    {
        $user = User::where('email', '=', trim($request->input('email')))->firstOrFail();

        if (trim($request->input('password')) == $user->password) {
            $token = $user->createToken('user_token')->plainTextToken;

            return response()->json([
                'success' => true,
                'message' => "Success",
                'token' => $token,
                'type' => $user->type
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => "Login failed"
            ], 401);
        }
    }

    public function logout(Request $request)
    {

            $yourToken = request()->bearerToken();
            $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);

            $user_id = $token->tokenable;
            $user = User::findOrFail($user_id->id);

            $user->tokens()->delete();

            return response()->json([
                'success' => true,
                'message' => "Logout"
            ], 200);

    }
}

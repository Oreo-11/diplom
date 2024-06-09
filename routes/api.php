<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\AuthorizationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('hardWeek', [MainController::class, 'hardWeek']);
Route::put('getFamilyFromClientCode', [MainController::class, 'getFamilyFromClientCode']);
Route::get('workWeek/{id}', [MainController::class, 'Managing_the_work_week']);
Route::get('recordForMonthUser/{id}', [MainController::class, 'recordForMonthUser']);
Route::get('allRoles', [MainController::class, 'allRoles']);
Route::get('GetUser', [MainController::class, 'GetUser']);
Route::get('allUsers', [MainController::class, 'allUsers']);
Route::post('rating', [MainController::class, 'rating']);
Route::post('authorization', [AuthorizationController::class, 'login']);
Route::get('workWeek/{id}', [MainController::class, 'Managing_the_work_week']);
Route::middleware(['chekUser'])->group(function() {

    Route::post('addRecordClient', [MainController::class, 'addRecordClient']);
    Route::get('recordForToday', [MainController::class, 'recordForToday']);
    Route::get('recordForMonth', [MainController::class, 'recordForMonth']);
    Route::get('/logout', [AuthorizationController::class, 'logout']);
    Route::post('updateImgUser', [MainController::class, 'updateImgUser']);

});
Route::middleware(['Managing_the_work_week', 'chekUser' ])->group(function() {

    
    Route::post('updateWorkUser', [MainController::class, 'updateWorkUser']);
    Route::get('/logout', [AuthorizationController::class, 'logout']);
});
Route::middleware(['Working_with_users', 'chekUser' ])->group(function() {
    Route::post('addUser', [MainController::class, 'addUser']);
    Route::put('updateRole', [MainController::class, 'updateRole']);
    Route::post('addRole', [MainController::class, 'addRole']);
    Route::get('/logout', [AuthorizationController::class, 'logout']);
});
Route::middleware(['Viewing_the_schedule_of_specialists_for_the_month', 'chekUser' ])->group(function() {
    Route::get('/logout', [AuthorizationController::class, 'logout']);
});
Route::middleware(['Statistics_based_on_the_users_work', 'chekUser' ])->group(function() {
    Route::post('getAvaragerating', [MainController::class, 'getAvaragerating']);
    Route::post('getAvarageCountClient', [MainController::class, 'getAvarageCountClient']);
    Route::get('/logout', [AuthorizationController::class, 'logout']);
});
Route::middleware(['chekClient'])->group(function() {
    Route::post('addRecordClient', [MainController::class, 'addRecordClient']);
    Route::get('family', [MainController::class, 'family']);
    Route::get('getClient', [MainController::class, 'getClient']);
    
    Route::post('register', [AuthorizationController::class, 'register']);
    Route::get('/logout', [AuthorizationController::class, 'logout']);
});
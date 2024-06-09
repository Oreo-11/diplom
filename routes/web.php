<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'ManagingTheWorkWeek' => Route::has('ManagingTheWorkWeek'),
//     ]);
// });
Route::get('/', function() {
    return Inertia::render('Login');
})->name('Login');

Route::get('/RecordUser', function() {
    return Inertia::render('RecordUser');
})->name('RecordUser');

Route::get('/StaticsWorker', function() {
    return Inertia::render('StaticsWorker');
})->name('StaticsWorker');

Route::get('/Welcome', function() {
    return Inertia::render('Welcome');
})->name('Welcome');

Route::get('/ManagingTheWorkWeek', function() {
    return Inertia::render('ManagingTheWorkWeek');
})->name('ManagingTheWorkWeek');

Route::get('/WorkUsers', function() {
    return Inertia::render('WorkUsers');
})->name('WorkUsers');

Route::get('/Profile', function() {
    return Inertia::render('Profile');
})->name('Profile');

Route::get('/TheScheduleOfSpecialistsForTheMonth', function() {
    return Inertia::render('TheScheduleOfSpecialistsForTheMonth');
})->name('TheScheduleOfSpecialistsForTheMonth');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';

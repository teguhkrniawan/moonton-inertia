<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubsController;

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

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function() {
    route::get('/', [DashboardController::class, 'index'])->name('index');
    route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
    route::get('subs-plan', [SubsController::class, 'index'])->name('subs.index');
});

Route::prefix('prototype')->name('prototype.')->group(function(){
    route::get('/login', function(){
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function(){
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function(){
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscription', function(){
        return Inertia::render('Prototype/Subscription');
    })->name('subscription');

    route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

require __DIR__.'/auth.php';

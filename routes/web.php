<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubsController;
use App\Http\Controllers\Direktur\MovieController as DirekturMovieController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;

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

// roles user dengan permission user
Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function() {
    route::get('/', [DashboardController::class, 'index'])->name('index');
    route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubs:true');

    route::get('subs-plan', [SubsController::class, 'index'])->name('subs.index')->middleware('checkUserSubs:false');;
    route::post('subs-plan/{subsPlanItem}/user-subscription', [SubsController::class, 'user_subscription'])->name('subs.user_subscription')->middleware('checkUserSubs:false');;
});

// role user dengan permission direktur
Route::middleware(['auth', 'role:direktur'])->prefix('direktur')->name('direktur.dashboard.')->group(function(){
    route::resource('movie', DirekturMovieController::class);
});

// role user dengan permission admin
Route::middleware(['auth'])->prefix('admin')->name('admin.dashboard.')->group(function(){
    route::resource('movie', AdminMovieController::class);
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

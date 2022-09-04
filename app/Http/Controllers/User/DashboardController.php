<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // index
    public function index(){

        $featured_movies = Movies::whereIsFeatured(true)->get();
        $movies = Movies::all();

        // return [
        //     'featured_movie' => $featured_movies,
        //     'movies' => $movies
        // ];

        return Inertia::render('User/Dashboard/Index', [
            'featured_movie' => $featured_movies,
            'movies' => $movies
        ]);
    }

}

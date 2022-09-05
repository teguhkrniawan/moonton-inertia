<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MovieController extends Controller
{
    // show detail movie
    public function show($slug){
        
        $movie = DB::table('movies')
                        ->where('slug', $slug)
                        ->first();
        return Inertia::render('User/Movie/Index', [
            "movie" => $movie
        ]);

    }
}

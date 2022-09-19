<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $movies = Movies::all();
        return Inertia('Admin/Movie/Index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        //
        $data = $request->validated();

        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        
        Movies::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Berhasil insert data movie',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movies  $movies
     * @return \Illuminate\Http\Response
     */
    public function show(Movies $movies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movies  $movies
     * @return \Illuminate\Http\Response
     */
    public function edit(Movies $movie)
    {
        //
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie
        ]);
        // return $movie;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movies  $movies
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Movies $movie)
    {
        //
        $data = $request->validated();
        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        }
        else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Berhasil update filem",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movies  $movies
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movies $movies)
    {
        //
    }
}

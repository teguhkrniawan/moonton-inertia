<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movies extends Model
{
    use HasFactory, SoftDeletes;

    protected $fiilable = ["name", "slug", "category", "video_url", "thumbnail", "rating", "is_fetaured"];
}

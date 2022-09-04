<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlans extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ["name", "price", "feature", "active_in_month"];
}

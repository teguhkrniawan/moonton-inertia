<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubsController extends Controller
{
    //
    public function index(){
        $subs_plan = SubscriptionPlans::all();
        return Inertia::render('User/Subscription/Index', [
            "subscription" => $subs_plan
        ]);
    }
}

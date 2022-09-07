<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
    
    // function user subscription
    public function user_subscription(Request $request, $subsPlanId){

        try {

            $subsPlanData = DB::table('subscription_plans')
            ->where('id', $subsPlanId)
            ->first();

            $insert = [
                "user_id" => Auth::id(),
                "subscription_plan_id" => $subsPlanId,
                "price" => $subsPlanData->price,
                "expired_date" => Carbon::now()->addMonth($subsPlanData->active_in_month),
                "payment_status" => 'success'
            ];

            $user_subscription = UserSubscription::create($insert);
            return redirect(route('user.dashboard.index'));
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserSubs
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        // apabila user aktif dan belum berlangganan
        if($status == 'true' && !Auth::user()->isActive){
            return redirect(route('user.dashboard.subs.index'));
        }

        // apabila user tidak berlangganan yg aktif
        if($status == 'false' && Auth::user()->isActive){
            return redirect(route('user.dashboard.index'));
        }
        return $next($request);
    }
}

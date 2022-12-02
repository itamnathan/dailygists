<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use App\Gamify\Points\RefferedUser;
class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // dd(session()->pull('referrer'));
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        // $referrer = User::where('affiliate_id',session()->pull('referrer'))->first();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => userName($request->name),
            'password' => Hash::make($request->password),
        ]);
            
        // $userx = User::where('affiliate_id',$user->affiliate_id)->first();
        // $userx->givePoint(new RefferedUser($user));


        // $userx->getPoints());
        // $userx->givePoint(new RefferedUser($user));
        // dd($user);



        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}

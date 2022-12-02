<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAvatarCoverRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Jobs\DeleteUser;
use App\Jobs\UpdateAvatarCover;
use App\Jobs\UpdateProfile;
use App\Policies\UserPolicy;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(Authenticate::class);
    }

    public function edit()
    {
        return Inertia::render('users.settings.settings');
    }

    public function update(UpdateProfileRequest $request)
    {
        $this->dispatchSync(UpdateProfile::fromRequest($request->user(), $request));

        $this->success('settings.updated');

        return redirect()->route('settings.profile');
    }

    public function avatarupdate(UpdateAvatarCoverRequest $request)
    {
        $this->dispatchSync(UpdateAvatarCover::fromRequest($request->user(), $request));

        $this->success('settings.updated');

        // return redirect()->route('settings.profile');
    }


    public function destroy(Request $request)
    {
        $this->authorize(UserPolicy::DELETE, $user = $request->user());

        $this->dispatchSync(new DeleteUser($user));

        $this->success('settings.deleted');

        return redirect()->route('home');
    }
}

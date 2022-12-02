<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Middleware\VerifyAdmins;
use App\Http\Requests\BanRequest;
use App\Jobs\BanUser;
use App\Jobs\DeleteUser;
use App\Jobs\UnbanUser;
use App\Models\User;
use App\Policies\UserPolicy;
use App\Queries\SearchUsers;
use Illuminate\Auth\Middleware\Authenticate;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Http\Requests\UpdateProfileRequest;
use App\Jobs\UpdateProfile;
use App\Models\Setting;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware([Authenticate::class, VerifyAdmins::class]);
    }

    public function index()
    {
       


        return Inertia::render('Admin/Setting/Index');
    }

    public function ban(BanRequest $request, User $user)
    {
        $this->authorize(UserPolicy::BAN, $user);

        $this->dispatchSync(new BanUser($user, $request->get('reason')));

        $this->success('admin.users.banned', $user->name());

        return redirect()->route('profile', $user->username());
    }

    public function update(Request $request)
    {
        $node =  Setting::first();
        $node->title = $request->title;
        $node->footer = $request->footer;
        $node->scripts = $request->scripts;

        if ($request->logo) {
            $node->logo = $request->logo;
        }
        if ($request->favicon) {
            $node->logo = $request->logo;
        }
        $node->save();

        return redirect()->route('backend.settings.index');
    }
    public function edit(User $username)
    {
        return Inertia::render('Admin/User/Edit', ['users' => $username]);
    }

    public function unban(User $user)
    {
        $this->authorize(UserPolicy::BAN, $user);

        $this->dispatchSync(new UnbanUser($user));

        $this->success('admin.users.unbanned', $user->name());

        return redirect()->route('profile', $user->username());
    }

    public function delete(User $user)
    {
        $this->authorize(UserPolicy::DELETE, $user);

        $this->dispatchSync(new DeleteUser($user));

        $this->success('admin.users.deleted', $user->name());

        return redirect()->route('admin.users');
    }
}

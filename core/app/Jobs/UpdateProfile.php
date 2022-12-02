<?php

namespace App\Jobs;

use App\Events\EmailAddressWasChanged;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\User;
use Illuminate\Support\Arr;

final class UpdateProfile
{
    private array $attributes;

    public function __construct(
        private User $user,
        array $attributes = []
    ) {
        $this->attributes = Arr::only($attributes, [
            'name',
            'penname',
            'email',
            'username',
            'bio',
            'twitter',
            'facebook',
            'instagram',
            'website',
        ]);
    }

    public static function fromRequest(User $user, UpdateProfileRequest $request): self
    {
        return new static($user, [
            'name' => $request->name(),
            'penname' => $request->penname(),
            'email' => $request->email(),
            'username' => strtolower($request->username()),
            'bio' => trim(strip_tags($request->bio())),
            'twitter' => $request->twitter(),
            'facebook' => $request->facebook(),
            'instagram' => $request->instagram(),
            'website' => $request->website(),
        ]);
    }

    public function handle(): void
    {
        $emailAddress = $this->user->emailAddress();

        $this->user->update($this->attributes);

        if ($emailAddress !== $this->user->emailAddress()) {
            $this->user->email_verified_at = null;
            $this->user->save();

            event(new EmailAddressWasChanged($this->user));
        }
    }
}

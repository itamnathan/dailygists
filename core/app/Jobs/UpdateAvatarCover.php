<?php

namespace App\Jobs;

use App\Http\Requests\UpdateAvatarCoverRequest;
use App\Models\User;
use Illuminate\Support\Arr;

final class UpdateAvatarCover
{
    private array $attributes;

    public function __construct(
        private User $user,
        private  $avatar,
        private  $cover,
    ) {
    }

    public static function fromRequest(User $user, UpdateAvatarCoverRequest $request): self
    {
        return new static(
            $user,
            $request->avatar,
            $request->cover,
        );
    }

    public function handle(): void
    {
        if (isset($this->avatar)) {
            $this->user->updateProfilePhoto($this->avatar);
        }

        
        if (isset($this->cover)) {
            $this->user->updateProfileCover($this->cover);
        }
        // if (isset($this->avatar)) {
        //     $this->user->updateProfilePhoto($this->avatar);
        // }

    }
}

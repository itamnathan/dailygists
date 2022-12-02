<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;

class UpdateAvatarCoverRequest extends Request
{
    public function rules()
    {
        return [
            'avatar' => 'nullable|mimes:jpg,png,jpeg|max:1024',
            'cover' => 'nullable|mimes:jpg,png,jpeg|max:1024',
        ];
    }
    

    public function avatar(): ?string
    {
        return $this->get('avatar');
    }
    public function cover(): ?string
    {
        return $this->get('cover');
    }
}

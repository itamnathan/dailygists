<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;

class UpdateProfileRequest extends Request
{
    public function rules()
    {
        return [
            
            'penname' => 'max:255|nullable|unique:users,penname,' . Auth::id(),
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . Auth::id(),
            'username' => 'required|alpha_dash|max:255|unique:users,username,' . Auth::id(),
            'twitter' => 'max:255|nullable|unique:users,twitter,' . Auth::id(),
            'facebook' => 'max:255|nullable|unique:users,facebook,' . Auth::id(),
            'instagram' => 'max:255|nullable|unique:users,instagram,' . Auth::id(),
            'website' => 'max:255|nullable|url',
            'bio' => 'max:160',
            'avatar' => 'image|mimes:jpg,png,jpeg|max:2048',
            'cover' => 'image|mimes:jpg,png,jpeg|max:2048',
        ];
    }

    public function bio(): string
    {
        return (string) $this->get('bio', '');
    }

    public function name(): string
    {
        return (string) $this->get('name');
    }
    public function penname(): string
    {
        return (string) $this->get('penname');
    }

    public function email(): string
    {
        return (string) $this->get('email');
    }

    public function username(): string
    {
        return (string) $this->get('username');
    }

    public function twitter(): ?string
    {
        return $this->get('twitter');
    }

    public function facebook(): ?string
    {
        return $this->get('facebook');
    }

    public function instagram(): ?string
    {
        return $this->get('instagram');
    }

    public function website(): ?string
    {
        return $this->get('website');
    }
    public function avatar()
    {
        return $this->get('avatar');
    }
    public function cover()
    {
        return $this->get('cover');
    }
}

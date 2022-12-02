<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreBookmarkRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'id' =>  'nullable',
        ];
    }
    public function author(): User
    {
        return $this->user();
    }

    // public function id(): string
    // {
    //     dd($this->get('id'));
    //     return $this->get('id');
    // }
}

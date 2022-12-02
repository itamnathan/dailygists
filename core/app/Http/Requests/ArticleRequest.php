<?php

namespace App\Http\Requests;

use App\Models\User;
use App\Rules\HttpImageRule;
use Illuminate\Http\Concerns\InteractsWithInput;

class ArticleRequest extends Request
{
    use InteractsWithInput;

    public function rules()
    {
        return [
            'title' => ['required', 'max:100'],
            'body' => ['required', new HttpImageRule()],
            'tags' => 'nullable',
            'tags.*' => 'exists:tags,id',
            'channels' => 'nullable',
            'channels.*' => 'exists:channels,id',
            'hero_image' =>  'nullable',
            'users' =>  'nullable',
            'meta' =>  'nullable',
            'original_url' => 'url|nullable',
            'submitted' => ['required', 'boolean'],
            'status' => ['boolean'],
        ];
    }

    public function author(): User
    {
        return $this->user();
    }

    public function title(): string
    {
        return $this->get('title');
    }

    public function body(): string
    {
        return $this->get('body');
    }

    public function tags(): array
    {
        return $this->get('tags',[]);
    }
    public function meta(): array
    {
        return $this->get('meta',[]);
    }

    public function channels(): array
    {
        return $this->get('channels',[]);
    }

    public function users(): ?string
    {
        return $this->get('users');
    }

    
    public function hero_image(): ?string
    {
        return $this->get('hero_image');
    } 
    
    public function approved_at(): ?string
    {
        return $this->get('approved_at');
    }

    public function originalUrl(): ?string
    {
        return $this->get('original_url');
    }

    public function shouldBeSubmitted(): bool
    {
        return $this->boolean('submitted');
    }
}

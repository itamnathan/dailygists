<?php

namespace App\Models;

use App\Concerns\HasSlug;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

final class Channel extends Model
{
    use HasFactory;
    use HasSlug;

    /**
     * @inheritdoc
     */
    protected $table = 'channels';

    protected $hidden = [
        'pivot',
    ];
    /**
     * @inheritdoc
     */
    public $timestamps = false;

    public function id(): int
    {
        return $this->id;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function slug(): string
    {
        return $this->slug;
    }
    public function image(): string
    {
        return $this->image;
    }
    public function color(): string
    {
        return $this->color;
    }
    public function description(): string
    {
        return $this->description;
    }

    public function articles(): MorphToMany
    {
        return $this->morphedByMany(Article::class, 'channelable');
    }

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('slug', '!=', 'laravelio');
    }

    public function isAnnouncement(): bool
    {
        return $this->slug === 'laravelio';
    }

}

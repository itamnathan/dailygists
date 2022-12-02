<?php

namespace App\Models;

use App\Concerns\HasAuthor;
use App\Concerns\HasChannels;
use App\Concerns\HasLikes;
use App\Concerns\HasSlug;
use App\Concerns\HasTags;
use App\Concerns\HasTimestamps;
use App\Concerns\HasUuid;
use App\Concerns\ReceivesReplies;
use App\Concerns\PreparesSearch;
use App\Contracts\ReplyAble;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;

use App\Contracts\SubscriptionAble;
use App\Concerns\ProvidesSubscriptions;
use App\Exceptions\CouldNotMarkReplyAsSolution;
use Exception;


final class Article extends Model implements Feedable, SubscriptionAble, ReplyAble
{
    use HasFactory;
    use HasAuthor;
    use HasSlug;
    use HasLikes;
    use HasTimestamps;
    use HasTags;
    use HasUuid;
    use HasChannels;
    use PreparesSearch;
    use ReceivesReplies;
    use ProvidesSubscriptions;
    // use Searchable;

    // public $guarded = ['id'];
    const TABLE = 'articles';

    const FEED_PAGE_SIZE = 20;

    /**
     * @inheritdoc
     */
    protected $fillable = [
        'uuid',
        'title',
        'body',
        'original_url',
        'slug',
        'hero_image',
        'is_pinned',
        'view_count',
        'tweet_id',
        'submitted_at',
        'approved_at',
        'declined_at',
        'shared_at',
        'last_activity_at',
    ];

    /**
     * @inheritdoc
     */
    protected $casts = [
        'last_activity_at' => 'datetime',
        'submitted_at' => 'datetime',
        'approved_at' => 'datetime',
        'shared_at' => 'datetime',
    ];

    /**
     * @inheritdoc
     */
    protected $with = [
        
        'channelsRelation',
        'authorRelation',
        // 'likesRelation',
        // 'tagsRelation',
    ];

    protected $appends = [
        'excerpt',
        'readTime'
    ];



    
    public function id(): int
    {
        return $this->id;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function body(): string
    {
        return $this->body;
    }

    public function replyAbleSubject(): string
    {
        return $this->subject();
    }

    public function subject(): string
    {
        return $this->title;
    }

    public function markSolution(Reply $reply, User $user)
    {
        $thread = $reply->replyAble();

        if (! $thread instanceof self) {
            throw CouldNotMarkReplyAsSolution::replyAbleIsNotAThread($reply);
        }

        $this->resolvedByRelation()->associate($user);
        $this->solutionReplyRelation()->associate($reply);
        $this->save();
    }

    public function getExcerptAttribute()
    {
        return $this->excerpt(150);
    }
    
    public function excerpt(int $limit = 100): string
    {
        return Str::limit(strip_tags($this->body()), $limit);
    }

    public function hasHeroImage(): bool
    {
        return $this->hero_image !== null;
    }

    public function heroImage($width = 400, $height = 300): string
    {
        if ($this->hero_image) {
            return "https://source.unsplash.com/{$this->hero_image}/{$width}x{$height}";
        }

        return asset('images/default-background.svg');
    }

    public function meta()
    {
        return $this->hasOne(Meta::class);
    }

    public function originalUrl(): ?string
    {
        return $this->original_url;
    }

    public function canonicalUrl(): string
    {
        return $this->originalUrl() ?: route('articles.show', [ $this->channelsRelation[0]->slug, $this->slug]);
    }

    /**
     * Scope a query to only include published posts.
     *
     * @param  \Illuminate\Datdaabase\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLastsevendays($query)
    {
        $date = Carbon::now()->subDays(7);
        return $query->Live()->where('approved_at', '>=', $date);
    }


    public function scopeLasttwodays($query)
    {
        $date = Carbon::now()->subDays(2);
        return $query->Live()->where('approved_at', '>=', $date);
    }
    /**
     * Scope a query to only include drafts (unpublished posts).
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDraft($query)
    {
        return $query->where('submitted_at', null);
    }

    /**
     * Scope a query to only include posts whose publish date is in the past (or now).
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLive($query)
    {
        return $query->published()->where('approved_at', '<=', now());
    }
    /**
     * Scope a query to only include posts whose publish date is in the future.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeScheduled($query)
    {
        return $query->where('approved_at', '>', now());
    }
    /**
     * Scope a query to only include posts whose publish date is before a given date.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $date
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeBeforePublishDate($query, $date)
    {
        return $query->where('approved_at', '<=', $date);
    }

    /**
     * Scope a query to only include posts whose publish date is after a given date.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $date
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeAfterPublishDate($query, $date)
    {
        return $query->where('approved_at', '>', $date);
    }

    public function submittedAt(): ?Carbon
    {
        return $this->submitted_at;
    }

    public function approvedAt(): ?Carbon
    {
        return $this->approved_at;
    }

    public function isSubmitted(): bool
    {
        return ! $this->isNotSubmitted();
    }

    public function isNotSubmitted(): bool
    {
        return $this->submitted_at === null;
    }

    public function isApproved(): bool
    {
        return ! $this->isNotApproved();
    }

    public function isNotApproved(): bool
    {
        return $this->approved_at === null;
    }

    public function isDeclined(): bool
    {
        return ! $this->isNotDeclined();
    }

    public function isNotDeclined(): bool
    {
        return $this->declined_at === null;
    }

    public function isPublished(): bool
    {
        return ! $this->isNotPublished();
    }

    public function isNotPublished(): bool
    {
        return $this->isNotSubmitted() || $this->isNotApproved() || $this->isDeclined();
    }

    public function isPinned(): bool
    {
        return (bool) $this->is_pinned;
    }

    public function isNotShared(): bool
    {
        return $this->shared_at === null;
    }

    public function isShared(): bool
    {
        return ! $this->isNotShared();
    }

    public function isAwaitingApproval(): bool
    {
        return $this->isSubmitted() && $this->isNotApproved() && $this->isNotDeclined();
    }

    public function isNotAwaitingApproval(): bool
    {
        return ! $this->isAwaitingApproval();
    }

    public function getReadTimeAttribute()
    {
        return $this->readTime();
    }
    public function readTime()
    {
        $minutes = round(str_word_count($this->body()) / 200);

        return $minutes == 0 ? 1 : $minutes;
    }

    public function viewCount()
    {
        return number_format($this->view_count);
    }

    public function isUpdated(): bool
    {
        return $this->updated_at->gt($this->created_at);
    }

    public function scopeSubmitted(Builder $query): Builder
    {
        return $query->whereNotNull('submitted_at');
    }

    public function scopeApproved(Builder $query): Builder
    {
        return $query->whereNotNull('approved_at')->whereNull('declined_at');
    }

    public function scopeNotApproved(Builder $query): Builder
    {
        return $query->whereNull('approved_at');
    }

    public function scopeDeclined(Builder $query): Builder
    {
        return $query->whereNotNull('declined_at');
    }

    public function scopeNotDeclined(Builder $query): Builder
    {
        return $query->whereNull('declined_at');
    }

    public function scopeAwaitingApproval(Builder $query): Builder
    {
        return $query->submitted()
            ->notApproved()
            ->notDeclined();
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->submitted()
            ->approved();
    }

    public function scopeNotPublished(Builder $query): Builder
    {
        return $query->where(function ($query) {
            $query->whereNull('submitted_at')
                ->orWhereNull('approved_at')
                ->orWhereNotNull('declined_at');
        });
    }

    public function scopePinned(Builder $query): Builder
    {
        return $query->where('is_pinned', true);
    }

    public function scopeNotPinned(Builder $query): Builder
    {
        return $query->where('is_pinned', false);
    }

    public function scopeShared(Builder $query): Builder
    {
        return $query->whereNotNull('shared_at');
    }

    public function scopeNotShared(Builder $query): Builder
    {
        return $query->whereNull('shared_at');
    }

    public function scopeForTag(Builder $query, string $tag): Builder
    {
        return $query->whereHas('tagsRelation', function ($query) use ($tag) {
            $query->where('tags.slug', $tag);
        });
    }

    public function scopeForChannel(Builder $query, string $channel): Builder
    {
        return $query->whereHas('channelsRelation', function ($query) use ($channel) {
            $query->where('channels.slug', $channel);
        });
    }

    public function scopeRecent(Builder $query): Builder
    {
        return $query->orderBy('submitted_at', 'desc');
    }

    public function scopePopular(Builder $query): Builder
    {
        return $query->withCount('likesRelation')
            ->orderBy('likes_relation_count', 'desc')
            ->orderBy('submitted_at', 'desc');
    }

    public function scopeTrending(Builder $query): Builder
    {
        return $query->withCount(['likesRelation' => function ($query) {
            $query->where('created_at', '>=', now()->subWeek());
        }])
            ->orderBy('likes_relation_count', 'desc')
            ->orderBy('submitted_at', 'desc');
    }

    public function shouldBeSearchable()
    {
        return $this->isPublished();
    }

    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id(),
            'title' => $this->title(),
            'body' => $this->body(),
            'slug' => $this->slug(),
        ];
    }

    public function splitBody($value)
    {
        return $this->split($value);
    }

    public function markAsShared()
    {
        $this->update([
            'shared_at' => now(),
        ]);
    }

    public static function nextForSharing(): ?self
    {
        return self::notShared()
            ->published()
            ->orderBy('submitted_at', 'asc')
            ->first();
    }

    public static function getFeedItems(): Collection
    {
        return self::published()
            ->recent()
            ->paginate(self::FEED_PAGE_SIZE)
            ->getCollection();
    }

    public function toFeedItem(): FeedItem
    {
        return FeedItem::create()
            ->id($this->id())
            ->title($this->title())
            ->summary($this->excerpt())
            ->updated($this->updatedAt())
            ->link(route('articles.show', [ $this->channelsRelation[0]->slug, $this->slug]))
            ->authorName($this->author()->name());
    }
}

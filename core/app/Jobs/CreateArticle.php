<?php

namespace App\Jobs;

use App\Events\ArticleWasSubmittedForApproval;
use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Models\Meta;
use App\Models\User;
use Ramsey\Uuid\UuidInterface;

use function PHPUnit\Framework\isEmpty;

final class CreateArticle
{
    private $approved_at;
    private $hero_image;
    private $originalUrl;
    private $channels;
    private $tags;

    private $autoapproved;
    private $users;
    private $meta;
    public function __construct(
        private UuidInterface $uuid,
        private string $title,
        private string $body,
        private User $author,
        private bool $shouldBeSubmitted,
        array $options = []
    ) {
        $this->users = $options['users'] ?? null;
        $this->approved_at = $options['approved_at'] ?? null;
        $this->hero_image = $options['hero_image'] ?? null;
        $this->originalUrl = $options['original_url'] ?? null;
        $this->channels = $options['channels'] ?? [];
        $this->tags = $options['tags'] ?? [];
        $this->meta = $options['meta'] ?? [];
    }

    public static function fromRequest(ArticleRequest $request, UuidInterface $uuid): self
    {
        return new static(
            $uuid,
            $request->title(),
            $request->body(),
            $request->author(),
            $request->shouldBeSubmitted(),
            [
                'users' => $request->users(),
                'approved_at' => $request->approved_at(),
                'hero_image' => $request->hero_image(),
                'original_url' => $request->originalUrl(),
                'channels' => $request->channels(),
                'tags' => $request->tags(),
                'meta'=> $request->meta(),
            ],
        );
    }

    public function handle(): void
    {
        if ($this->author->type == 4 || $this->author->type == 6) {
            $this->autoapproved = true;
        } else {
            $this->autoapproved = false;
        }
        $article = new Article([
            'uuid' => $this->uuid->toString(),
            'title' => $this->title,
            'body' => $this->body,
            'hero_image' => $this->hero_image,
            'original_url' => $this->originalUrl,
            'slug' => $this->title,
            'approved_at' => $this->approved_at,
            'submitted_at' => $this->shouldBeSubmitted ? now() : null,
        ]);

        if ($this->author->type == 4 || $this->author->type == 6) {
            if ($this->users != null) {
                $article->authoredBy(User::find($this->users));
            } else {
                $article->authoredBy($this->author);
            }
        } else {
            $article->authoredBy($this->author);
        }
        $article->syncChannels($this->channels);
        $article->syncTags($this->tags);
        // if (!isEmpty($this->meta)) {
            Meta::create([
                'article_id' =>  $article->id,
                'keywords' => json_encode($this->meta['keywords']),
                'meta_title' => $this->meta['meta_title'],
                'meta_description' => $this->meta['meta_description'],
                'opengraph_title' => $this->meta['opengraph_title'],
                'opengraph_description' => $this->meta['opengraph_description'],
                'opengraph_image' => $this->meta['opengraph_image'],
                'opengraph_image_width' => $this->meta['opengraph_image_width'],
                'opengraph_image_height' => $this->meta['opengraph_image_height'],
                'twitter_title' => $this->meta['twitter_title'],
                'twitter_description' => $this->meta['twitter_description'],
                'twitter_image' => $this->meta['twitter_image'],
                'twitter_cardtype' => $this->meta['twitter_cardtype'],

            ]);
        // } else {

        //     Meta::create([
        //         'article_id' =>  $article->id
        //     ]);
        // }

        if ($article->isAwaitingApproval()) {
            event(new ArticleWasSubmittedForApproval($article));
        }
    }
}

<?php

namespace App\Jobs;

use App\Http\Requests\StoreBookmarkRequest;
use App\Models\Bookmark;
use App\Models\User;
use Ramsey\Uuid\UuidInterface;

final class CreateBookmark
{
    private $users;
    public function __construct(
        private UuidInterface $uuid,
        private string $id,
        private User $author,
    ) {
       
    }

    public static function fromRequest(StoreBookmarkRequest $request, UuidInterface $uuid): self
    {
        return new static(
            $uuid,
            $request->id,
            $request->author()
        );
    }

    public function handle(): void
    {
        // dd($this->author);
        $bookmark = new Bookmark([
            'uuid' => $this->uuid->toString(),
            'article_id' => $this->id,
        ]);
        $bookmark->authoredBy($this->author);
        $bookmark->save();
    }
}

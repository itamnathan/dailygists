<?php

namespace App\Http\Controllers\Articles;

use App\Concerns\UsesFilters;
use App\Http\Controllers\Controller;
use App\Models\Channel;
use App\Models\Thread;
use App\Models\User;
use Inertia\Inertia;

class ChannelsController extends Controller
{
    use UsesFilters;

    public function show(Channel $channel)
    {
        $threads = [];
        $filter = $this->getFilter();

        if ($filter === 'recent') {
            $threads = Thread::feedByChannelPaginated($channel);
        }

        if ($filter === 'popular') {
            $threads = Thread::feedByChannelQuery($channel)
                ->popular()
                ->paginate(20);
        }

        if ($filter === 'trending') {
            $threads = Thread::feedByChannelQuery($channel)
                ->trending()
                ->paginate(20);
        }

        $channels = Channel::orderBy('name')->get();
        $topMembers = User::mostSolutionsInLastDays(365)->take(5)->get();
        $moderators = User::moderators()->get();
        $canonical = canonical('forum.channel', [$channel->name, 'filter' => $filter]);

        return Inertia::render('Article/Overview', [
            'pinnedArticles' => $pinnedArticles,
            'articles' => $articles->paginate(10),
            'tags' => $tags,
            'activeTag' => $activeTag,
            'channels' => $channels,
            'activeChannel' => $activeChannel,
            'filter' => $filter,
            'moderators' => $moderators,
            'canonical' => $canonical,
            'topAuthors' => $topAuthors,
        ]);
        return Inertia::render('forum.overview', compact(
            'threads',
            'filter',
            'channels',
            'topMembers',
            'moderators',
            'canonical'
        ) + ['activeChannel' => $channel]);
    }
}

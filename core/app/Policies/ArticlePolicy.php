<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;

final class ArticlePolicy
{
    const UPDATE = 'update';

    const DELETE = 'delete';

    const APPROVE = 'approve';

    const DISAPPROVE = 'disapprove';

    const DECLINE = 'decline';

    const PINNED = 'togglePinnedStatus';

    public function update(User $user, Article $article): bool
    {
        return ($article->isAuthoredBy($user) && $article->isNotPublished()) ||
            $user->isEditor() || $user->isSupervisor() ||
            $user->isAdmin();
    }

    public function delete(User $user, Article $article): bool
    {
        return $article->isAuthoredBy($user) ||  $user->isEditor() || $user->isSupervisor() || $user->isAdmin();
    }

    public function approve(User $user, Article $article): bool
    {
        return  $user->isEditor() || $user->isSupervisor() || $user->isAdmin();
    }

    public function disapprove(User $user, Article $article): bool
    {
        return  $user->isEditor() || $user->isSupervisor() || $user->isAdmin();
    }

    public function decline(User $user, Article $article): bool
    {
        return  $user->isEditor() || $user->isSupervisor() || $user->isAdmin();
    }

    public function togglePinnedStatus(User $user, Article $article): bool
    {
        return  $user->isEditor() || $user->isSupervisor() || $user->isAdmin();
    }
}

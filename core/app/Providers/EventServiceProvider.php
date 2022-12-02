<?php

namespace App\Providers;

use App\Events\{
    ArticleWasApproved,
    ArticleWasSubmittedForApproval,
    EmailAddressWasChanged,
    ReplyWasCreated,
    SpamWasReported,
    ThreadWasCreated
};
use App\Listeners\{
    MarkLastActivity,
    NotifyUsersMentionedInReply,
    NotifyUsersMentionedInThread,
    RenewEmailVerificationNotification,
    SendArticleApprovedNotification,
    SendNewArticleNotification,
    SendNewReplyNotification,
    SendNewSpamNotification,
    StoreTweetIdentifier,
    SubscribeUsersMentionedInReply,
    SubscribeUsersMentionedInThread
};
use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        ArticleWasSubmittedForApproval::class => [
            SendNewArticleNotification::class,
        ],
        ArticleWasApproved::class => [
            SendArticleApprovedNotification::class,
        ],
        EmailAddressWasChanged::class => [
            RenewEmailVerificationNotification::class,
        ],
        NotificationSent::class => [
            StoreTweetIdentifier::class,
        ],
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        ReplyWasCreated::class => [
            MarkLastActivity::class,
            SendNewReplyNotification::class,
            SubscribeUsersMentionedInReply::class,
            NotifyUsersMentionedInReply::class,
        ],
        ThreadWasCreated::class => [
            SubscribeUsersMentionedInThread::class,
            NotifyUsersMentionedInThread::class,
        ],
        SpamWasReported::class => [
            SendNewSpamNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return true;
    }
}

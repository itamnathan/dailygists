@component('mail::message')

Great news! Your article: **{{ $article->title() }}** has been approved and is now live on Laravel.io.

@component('mail::button', ['url' => route('articles.show',[$article->channelsRelation[0]->slug, $article->slug()])])
View Article
@endcomponent

@endcomponent

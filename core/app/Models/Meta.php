<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Meta extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $appends = [
        'twitter_image_url',
        'opengraph_image_url',
    ];
    
    public function article()
    {
        return $this->belongsTo(Article::class, 'article_id', 'id');
    }

     /**
     * Get the URL to the user's profile photo.
     *
     * @return string
     */
    public function getTwitterImageUrlAttribute()
    {
        return url($this->twitter_image) ;
    }

     /**
     * Get the URL to the user's profile photo.
     *
     * @return string
     */
    public function getOpengraphImageUrlAttribute()
    {
        return url($this->opengraph_image) ;
    }

}

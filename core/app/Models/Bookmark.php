<?php

namespace App\Models;

use App\Concerns\HasAuthor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;
    use HasAuthor;
    
    protected $guarded = ['id'];
    protected $with =['article'];
    public function article()
    {
        return $this->belongsTo(Article::class, 'article_id', 'id');
    }
}

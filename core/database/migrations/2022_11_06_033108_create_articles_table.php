<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uuid')->unique('articles_uuid_unique')->comment("(DC2Type:guid)");
            $table->unsignedInteger('author_id')->index('articles_author_id_foreign');
            $table->string('title');
            $table->text('body')->nullable();
            $table->string('original_url')->nullable();
            $table->string('slug')->unique('articles_slug_unique');
            $table->string('hero_image')->nullable();
            $table->boolean('is_pinned')->default(0);
            $table->bigInteger('view_count')->nullable();
            $table->unsignedBigInteger('tweet_id')->nullable();
            $table->timestamp('last_activity_at')->nullable()->index('articles_last_activity_at_index');
            $table->boolean('published')->default(false);
            $table->timestamp('submitted_at')->nullable();
            $table->dateTime('publish_date')->default(now());
            $table->timestamp('approved_at')->nullable();
            $table->dateTime('shared_at')->nullable();
            $table->timestamp('declined_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}

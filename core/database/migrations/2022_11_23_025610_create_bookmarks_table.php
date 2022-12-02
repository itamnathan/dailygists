<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookmarks', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique('bookmarks_uuid_unique')->comment("(DC2Type:guid)");
            $table->unsignedInteger('author_id')->index('bookmarks_author_id_index');
            $table->unsignedInteger('article_id')->index('bookmarks_article_id_index');
            $table->timestamps();
            $table->unique(['author_id', 'article_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookmarks');
    }
};

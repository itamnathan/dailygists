<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('replies', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uuid')->unique('replies_uuid_unique')->comment("(DC2Type:guid)");
            $table->text('body');
            $table->unsignedInteger('author_id')->index('replies_author_id_index');
            $table->morphs('replyable');
            $table->timestamps();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedInteger('deleted_by')->nullable()->index('replies_deleted_by_foreign');
            $table->text('deleted_reason')->nullable();
            
            $table->index(['replyable_id'], 'replies_replyable_id_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('replies');
    }
}

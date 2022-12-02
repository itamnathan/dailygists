<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThreadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('threads', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uuid')->unique('threads_uuid_unique')->comment("(DC2Type:guid)");
            $table->unsignedInteger('author_id')->index('threads_author_id_index');
            $table->string('subject');
            $table->text('body');
            $table->string('slug')->index()->unique();
            $table->timestamp('last_activity_at')->nullable()->index('threads_last_activity_at_index');
            $table->timestamps();
            $table->unsignedInteger('solution_reply_id')->nullable()->index('threads_solution_reply_id_index');
            $table->unsignedInteger('resolved_by')->nullable()->index('threads_resolved_by_foreign');
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->index('threads_locked_by_foreign');
            $table->unsignedBigInteger('updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('threads');
    }
}

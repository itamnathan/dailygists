<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonitoredScheduledTaskLogItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monitored_scheduled_task_log_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('monitored_scheduled_task_id')->index('fk_scheduled_task_id');
            $table->string('type');
            $table->json('meta')->nullable();
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
        Schema::dropIfExists('monitored_scheduled_task_log_items');
    }
}

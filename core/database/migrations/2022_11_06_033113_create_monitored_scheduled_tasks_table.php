<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonitoredScheduledTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monitored_scheduled_tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->nullable();
            $table->string('cron_expression');
            $table->string('timezone')->nullable();
            $table->string('ping_url')->nullable();
            $table->dateTime('last_started_at')->nullable();
            $table->dateTime('last_finished_at')->nullable();
            $table->dateTime('last_failed_at')->nullable();
            $table->dateTime('last_skipped_at')->nullable();
            $table->dateTime('registered_on_oh_dear_at')->nullable();
            $table->dateTime('last_pinged_at')->nullable();
            $table->integer('grace_time_in_minutes');
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
        Schema::dropIfExists('monitored_scheduled_tasks');
    }
}

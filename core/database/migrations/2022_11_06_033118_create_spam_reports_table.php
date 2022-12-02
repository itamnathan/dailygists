<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpamReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spam_reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('reporter_id');
            $table->string('spam_type')->nullable();
            $table->unsignedBigInteger('spam_id')->nullable();
            $table->timestamps();
            
            $table->unique(['reporter_id', 'spam_id', 'spam_type'], 'spam_reports_reporter_id_spam_id_spam_type_unique');
            $table->index(['spam_type', 'spam_id'], 'spam_reports_spam_type_spam_id_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('spam_reports');
    }
}

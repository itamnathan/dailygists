<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->uuid('uuid')->index()->primary()->unique();
            $table->unsignedInteger('user_id')->index('subscriptions_user_id_index');
            $table->morphs('subscriptionable');
            $table->timestamps();
            
            $table->unique(['user_id', 'subscriptionable_id', 'subscriptionable_type'], 'subscriptions_are_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}

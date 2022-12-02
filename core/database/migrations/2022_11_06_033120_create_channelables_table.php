<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channelables', function (Blueprint $table) {
            $table->increments('id');
            $table->morphs('channelable');
            $table->unsignedInteger('channel_id')->index('channelables_channel_id_index');
            $table->timestamps();
            
            $table->index(['channelable_id'], 'channelables_channelable_id_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('channelables');
    }
}

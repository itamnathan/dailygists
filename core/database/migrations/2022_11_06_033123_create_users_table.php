<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->index()->unique();
            $table->string('avatar')->nullable();
            $table->string('cover')->nullable();
            $table->string('penname')->nullable()->index()->unique();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->string('instagram')->nullable();
            $table->string('website')->nullable();
            $table->float('balance')->default(0);
            $table->string('referred_by')->nullable()->index();
            $table->string('affiliate_id')->unique();
            $table->boolean('firstemailverify')->default(false);
            $table->string('remember_token')->default('');
            $table->string('username', 40)->default('')->index()->unique();
            $table->string('password')->default('');
            $table->unsignedSmallInteger('type')->default(1);
            $table->string('bio', 160)->default('');
            $table->text('banned_reason')->nullable();
            $table->dateTime('banned_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
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
        Schema::dropIfExists('users');
    }
}

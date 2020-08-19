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
            $table->id();
            $table->string('first_name');
            $table->string('second_name')->nullable();
            $table->string('surname');
            $table->string('second_surname')->nullable();
            $table->string('address');
            $table->string('dni')->unique();
            $table->string('email')->unique();
            $table->string('activation_token');
            $table->boolean('active')->default(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
            $table->unsignedBigInteger('community_id');
            $table->unsignedBigInteger('parish_id');
            $table->unsignedBigInteger('genre_id');
            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('community_id')->references('id')->on('communities')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('parish_id')->references('id')->on('parishes')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('genre_id')->references('id')->on('genres')
                ->onUpdate('cascade')->onDelete('cascade');
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

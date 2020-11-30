<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('dni')->unique()->index();
            $table->string('first_name');
            $table->string('second_name')->nullable();
            $table->string('surname');
            $table->string('second_surname')->nullable();
            $table->date('birth_date');
            $table->string('phone')->nullable();
            $table->timestamps();
            $table->unsignedBigInteger('clap_id');
            $table->unsignedBigInteger('genre_id');
            $table->unsignedBigInteger('citizenship_id');
            $table->foreign('clap_id')->references('id')->on('claps')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('citizenship_id')->references('id')->on('citizenships')
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
        Schema::dropIfExists('profiles');
    }
}

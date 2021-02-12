<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAxisParishTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('axis_parish', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parish_id');
            $table->unsignedBigInteger('axis_id');
            $table->timestamps();

            $table->foreign('parish_id')->references('id')->on('parishes')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('axis_id')->references('id')->on('axes')
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
        Schema::dropIfExists('axis_parish');
    }
}

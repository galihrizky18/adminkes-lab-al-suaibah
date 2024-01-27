<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->string('id_patient')->primary();
            $table->string('nik');
            $table->string('name');
            $table->enum('gender',['male','female']);
            $table->string('birth_place');
            $table->date('birth');
            $table->string('religion');
            $table->string('ethnic');
            $table->string('language');
            $table->string('education');
            $table->string('job');
            $table->string('blood');
            $table->string('marriage');
            $table->string('province');
            $table->string('city');
            $table->text('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};

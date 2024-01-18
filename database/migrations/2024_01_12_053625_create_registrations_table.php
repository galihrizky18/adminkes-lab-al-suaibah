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
        Schema::create('registrations', function (Blueprint $table) {
            $table->string('id_registration')->primary();
            $table->string('no_rekam_medik')->uniqid();
            $table->string('id_patient');
            $table->string('id_layanan');
            $table->string('id_dokter');
            $table->date('jadwal');
            $table->string('no_telepon');
            $table->string('email');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};

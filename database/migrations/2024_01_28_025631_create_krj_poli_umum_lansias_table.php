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
        Schema::create('krj_poli_umum_lansias', function (Blueprint $table) {
            $table->string('id_krj_poli_umum_lansia')->primary();
            $table->string('id_farmasi')->unique()->nullable();
            $table->string('id_dokter');
            $table->string('penanggung_jawab');
            $table->string('name');
            $table->date('birth');
            $table->string('bb');
            $table->string('tb');
            $table->string('td');
            $table->string('rr');
            $table->string('n');
            $table->text('anamnesis');
            $table->text('pemeriksaan_fisik');
            $table->text('pemeriksaan_penunjang');
            $table->text('diagnosis');
            $table->text('terapi');
            $table->text('rujukan');
            $table->string('bulan_input');
            
       



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('krj_poli_umum_lansias');
    }
};

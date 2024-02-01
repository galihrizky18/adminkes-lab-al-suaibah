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
        Schema::create('krj_poli_gigis', function (Blueprint $table) {
            $table->string('id_krj_poli_gigi')->primary();
            $table->string('penanggung_jawab');
            $table->string('id_dokter');
            $table->string('name');
            $table->date('birth');
            $table->string('bb');
            $table->string('tb');
            $table->string('td');
            $table->string('rr');
            $table->string('n');
            $table->string('skala_nyeri');
            $table->text('intra_oral');
            $table->text('anamnesis');
            $table->text('diagnosis');
            $table->text('terapi');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('krj_poli_gigis');
    }
};

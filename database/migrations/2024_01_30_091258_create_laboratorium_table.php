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
        Schema::create('laboratorium', function (Blueprint $table) {
            $table->string('id_laboratorium')->primary();
            $table->string('name');
            $table->string('jk');
            $table->string('ttl');
            $table->string('age');
            $table->string('address');
            $table->string('phone');
            $table->string('card_number');
            $table->string('request_date');
            $table->string('officer');
            $table->string('poli');
            $table->string('clinical_desc');
            $table->string('responsible');
            $table->string('hematologi');
            $table->string('serologis');
            $table->string('urinalisa');
            $table->string('mikrobiologi');
            $table->string('faeces');
            $table->string('faal_hati');
            $table->string('faal_ginjal');
            $table->string('faal_jantung');
            $table->string('metabolisme_karbo');
            $table->text('pemeriksaan_lainnya');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laboratoria');
    }
};

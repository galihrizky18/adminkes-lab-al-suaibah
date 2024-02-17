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
        Schema::create('tagihans', function (Blueprint $table) {
            $table->string('no_tagihan')->primary();
            $table->string("id_pemeriksaan");
            $table->string("biaya_dokter");
            $table->string("biaya_perawat");
            $table->string("biaya_resep");
            $table->enum('status_tagihan', ['lunas','belum lunas','tidak lunas']);
            $table->string("uang_pembayaran")->nullable();
            $table->date("tanggal_pelunasan")->nullable();







            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tagihans');
    }
};

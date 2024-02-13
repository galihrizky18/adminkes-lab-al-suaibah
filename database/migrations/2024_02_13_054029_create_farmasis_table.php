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
        Schema::create('farmasis', function (Blueprint $table) {
            $table->string("id_farmasi")->primary();
            $table->string("id_pemeriksaan")->unique();
            $table->string("id_layanan");
            $table->date("tanggal_resep");

            // Patient Asuransi
            $table->string("asuransi_nama")->nullable();
            $table->string("asuransi_umur")->nullable();
            $table->string("asuransi_jk")->nullable();
            $table->string("asuransi_bb")->nullable();
            $table->string("asuransi_dokter")->nullable();
            $table->string("asuransi_unit_asal")->nullable();

            // Farmasitik
            $table->string("nama_obat");
            $table->string("bentuk_sediaan");
            $table->string("dosis_obat");
            $table->string("jumlah_obat");
            $table->string("aturan_pakai");
            $table->string("stabilitas");

            // Klinis
            $table->string("tepat_obat");
            $table->string("tepat_indikasi");
            $table->string("tepat_dosis");
            $table->string("tepat_waktu_penggunaan");
            $table->string("tepat_rute");
            $table->string("interaksi");
            $table->string("duplikasi");
            $table->string("alergi");
            $table->string("kontra_indikasi");
            $table->string("pio/kie");
            $table->string("konseling");
            $table->string("telah_diberikan");




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('farmasis');
    }
};

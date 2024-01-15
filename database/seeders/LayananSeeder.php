<?php

namespace Database\Seeders;

use App\Models\Layanan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LayananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $layanan = [
            'Poli Umum',
            'Poli Anak',
            'Poli Gigi',
            'Apotek',
            'Laboratorium',
            'Kesehatan Ibu Anak',
        ];

        foreach ($layanan as $i => $lyn) {
            Layanan::create([
                'id_layanan' =>"layanan".$i+1,
                "layanan" => $lyn
            ]);
        }
    }
}

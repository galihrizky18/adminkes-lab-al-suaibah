<?php

namespace Database\Seeders;

use App\Models\TableSpesialis;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TableSpesialisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $spesialis = [
            ['spesialis' => 'Umum'],
            ['spesialis' => 'Spesialis Anak'],
            ['spesialis' => 'Spesialis Gigi'],
            ['spesialis' => 'Spesialis Mata'],
            ['spesialis' => 'Spesialis Kulit dan Kelamin'],
            ['spesialis' => 'Spesialis Jantung'],
            ['spesialis' => 'Spesialis Paru-Paru'],
            ['spesialis' => 'Spesialis Bedah Umum'],
            ['spesialis' => 'Spesialis Bedah Orthopedi'],
            ['spesialis' => 'Spesialis Saraf'],
            ['spesialis' => 'Spesialis Gizi'],
            ['spesialis' => 'Spesialis Psikiatri'],
            ['spesialis' => 'Spesialis Obstetri'],
            ['spesialis' => 'Spesialis Ginekologi'],
            ['spesialis' => 'Spesialis Urologi'],
            ['spesialis' => 'Spesialis THT (Telinga, Hidung, Tenggorokan)'],
            ['spesialis' => 'Spesialis Rehabilitas Medis'],
            ['spesialis' => 'Spesialis Radiologi'],
            ['spesialis' => 'Spesialis Patologi Klinik'],
            ['spesialis' => 'Spesialis Forensik'],
            ['spesialis' => 'Spesialis Penyakit Dalam'],
        ];

        foreach ($spesialis as $dt => $sp) {
            TableSpesialis::create([
                'id_spesialis' => 'SP-' . ($dt + 1),
                'spesialis' => $sp['spesialis']
            ]);
        }
    }
}

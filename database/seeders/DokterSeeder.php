<?php

namespace Database\Seeders;

use App\Models\Dokter;
use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DokterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dokter = [
            [
                'nama_dokter' => 'Dr. Andy Pratama',
                'spesialis' => 'Dokter Umum',
                'email' => 'andy@example.com',
                'noHp' => '081234567890',
                'alamat' => 'Jl. Contoh No. 123',
                'id_layanan' => 'layanan1'
            ],
            [
                'nama_dokter' => 'Dra. Budi Santoso',
                'spesialis' => 'Dokter Anak',
                'email' => 'budi@example.com',
                'noHp' => '081234567891',
                'alamat' => 'Jl. Contoh No. 456',
                'id_layanan' => 'layanan1'
            ],
            [
                'nama_dokter' => 'Dr. Cici Rahayu',
                'spesialis' => 'Dokter Gigi',
                'email' => 'cici@example.com',
                'noHp' => '081234567892',
                'alamat' => 'Jl. Contoh No. 789',
                'id_layanan' => 'layanan2'
            ],
            [
                'nama_dokter' => 'Drs. Dodi Sutanto',
                'spesialis' => 'Dokter Umum',
                'email' => 'dodi@example.com',
                'noHp' => '081234567893',
                'alamat' => 'Jl. Contoh No. 1011',
                'id_layanan' => 'layanan3'
            ],
            [
                'nama_dokter' => 'Dr. Eva Wijaya',
                'spesialis' => 'Dokter Anak',
                'email' => 'eva@example.com',
                'noHp' => '081234567894',
                'alamat' => 'Jl. Contoh No. 1213',
                'id_layanan' => 'layanan4'
            ],
            [
                'nama_dokter' => 'Dra. Fandi Surya',
                'spesialis' => 'Dokter Gigi',
                'email' => 'fandi@example.com',
                'noHp' => '081234567895',
                'alamat' => 'Jl. Contoh No. 1415',
                'id_layanan' => 'layanan4'
            ],
            [
                'nama_dokter' => 'Dr. Gita Permata',
                'spesialis' => 'Dokter Umum',
                'email' => 'gita@example.com',
                'noHp' => '081234567896',
                'alamat' => 'Jl. Contoh No. 1617',
                'id_layanan' => 'layanan5'
            ],
            [
                'nama_dokter' => 'Drs. Hadi Nugroho',
                'spesialis' => 'Dokter Anak',
                'email' => 'hadi@example.com',
                'noHp' => '081234567897',
                'alamat' => 'Jl. Contoh No. 1819',
                'id_layanan' => 'layanan5'
            ],
            [
                'nama_dokter' => 'Dra. Ina Susanti',
                'spesialis' => 'Dokter Gigi',
                'email' => 'ina@example.com',
                'noHp' => '081234567898',
                'alamat' => 'Jl. Contoh No. 2021',
                'id_layanan' => 'layanan6'
            ],
            [
                'nama_dokter' => 'Dr. Joni Wibowo',
                'spesialis' => 'Dokter Umum',
                'email' => 'joni@example.com',
                'noHp' => '081234567899',
                'alamat' => 'Jl. Contoh No. 2223',
                'id_layanan' => 'layanan6'
            ],
            
        ];

        // $miliDetik = microtime(true);
        // $waktuSekarang = DateTime::createFromFormat('U.u', $miliDetik)->format('YmdHisu');

        foreach ($dokter as $i=>$nm) {
            Dokter::create([
                'id_dokter' =>"DKTR-".$i+1,
                'nip' =>"8127228178429"+$i,
                "nama_dokter" => $nm['nama_dokter'],
                "spesialis" => $nm['spesialis'],
                "email" => $nm['email'],
                "noHp" => $nm['noHp'],
                "alamat" => $nm['alamat'],
                "id_layanan" => $nm['id_layanan'],
            ]);
        }
    }
}

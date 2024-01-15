<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PendaftaranController extends Controller
{
    public function pagePendaftaran(){
        return Inertia::render('pendaftaran/Pendaftaran');
    }
    
    public function pagePasienBaru(){
        return Inertia::render('pendaftaran/PasienBaru');
    }
    public function pagePasienLama(){
        return Inertia::render('pendaftaran/PasienLama');
    }

    public function saveToDatabase(Request $request){
        try {
            // Ambil data pendaftar dari request
            $dataPendaftar = $request->input('dataPendaftar');
            
            foreach ($dataPendaftar as $item) {
                if ($item['name'] === 'namaPasien') {
                    $nilaiDokter = $item['value'];
                    return $nilaiDokter;
                }
            }
    
            ;
        } catch (\Exception $e) {
            // Tangani kesalahan jika terjadi
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
}

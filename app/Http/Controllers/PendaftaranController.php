<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\Patient;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendaftaranController extends Controller
{
    public function pagePendaftaran(){
        return Inertia::render('pendaftaran/Pendaftaran');
    }
    
    public function pagePasienBaru(){

        $dataDokter = Dokter::all();

        return Inertia::render('pendaftaran/PasienBaru',['dataDokter' => $dataDokter]);
    }
    
    public function pagePasienLama(){
        return Inertia::render('pendaftaran/PasienLama');
    }

    public function saveToDatabase(Request $request){
        try {
            // Ambil data pendaftar dari request
            $dataPendaftar = $request->input('dataPendaftar');
            $dataReg = array_slice($dataPendaftar, 0,7);
            $dataClinic = array_slice($dataPendaftar, 7);

            // format waktu
            $currentTime = time();
            $time = date('YmdHis', $currentTime);

            $idPatient = "PTNT-".$time;
            $idReg = "REG-".$time;

            // Upload to Patient DB
            $pt = new Patient();
            $pt->id_patient = $idPatient;
            foreach ($dataReg as $data) {
                $pt->{$data["name"]} = $data["value"];

            }
            $pt->save();

            // Upload to Registration DB
            $reg = new Registration();
            $reg->id_registration = $idReg;
            $reg->id_patient = $idPatient;
            foreach ($dataClinic as $data) {
                $reg->{$data["name"]} = $data["value"];
            }
            $reg->save();



            return response()->json(['message' => 'Data berhasil disimpan'], 200);

        } catch (\Exception $e) {
            // Tangani kesalahan jika terjadi
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
}

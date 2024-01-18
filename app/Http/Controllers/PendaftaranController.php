<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\Layanan;
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
        $dataLayanan = Layanan::all();

        return Inertia::render('pendaftaran/PasienBaru',[
            'dataDokter' => $dataDokter,
            'dataLayanan' => $dataLayanan,
        ]);
    }
    
    public function pagePasienLama(){
        return Inertia::render('pendaftaran/PasienLama');
    }

    public function saveToDatabase(Request $request){
        try {
            // Ambil data pendaftar dari request
            $dataPendaftar = $request->input('dataPendaftar');
            $dataReg = array_slice($dataPendaftar, 0, 7);
            $dataClinic = array_slice($dataPendaftar, 7);
    
            // format waktu
            $currentTime = time();
            $time = date('YmdHis', $currentTime);
    
            // id Field
            $idPatient = "PTNT-".$time;
            $idReg = "REG-".$time;
            $noRM = "RM-".$time;
    
            // Upload to Patient DB
            $pt = new Patient();
            $pt->id_patient = $idPatient;
            $nikPatient = "";
    
            foreach ($dataReg as $data) {
                if ($data["name"] === "nik") {
                    $nikPatient = $data["value"];
                }
                $pt->{$data["name"]} = $data["value"];
            }
    
            // Upload to Registration DB
            $reg = new Registration();
            $reg->id_registration = $idReg;
            $reg->id_patient = $idPatient;
            $reg->no_rekam_medik = $noRM;
            foreach ($dataClinic as $data) {
                $reg->{$data["name"]} = $data["value"];
            }
    
            // Check if nikPatient already exists
            $existingPatient = Patient::where('nik', $nikPatient)->first();
            if ($existingPatient) {
                return response()->json(['message' => 'Found']);
            }
    
            // Save the data if nikPatient not found
            $pt->save();
            $reg->save();
    
            return response()->json(['message' => 'Success'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed']);
        }
    }

    public function searchPatientData(){


    }
    
}

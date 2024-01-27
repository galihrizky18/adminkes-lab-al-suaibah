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
            'dataLayanan' => $dataLayanan
        ]);
    }
    
    public function pagePasienLama(){
        return Inertia::render('pendaftaran/PasienLama');
    }

    public function saveToDatabase(Request $request){
        try {
            // Ambil data pendaftar dari request
            $dataPendaftar = $request->input('dataPendaftar');
            $dataReg = array_slice($dataPendaftar, 0, 15);
            $dataClinic = array_slice($dataPendaftar, 15);
    
            // format waktu
            $currentTime = time();
            $time = date('YmdHis', $currentTime);
            $currentData = date('Ymd', $currentTime);
    
            // id Field
            $idPatient = "PTNT-".$time;
            $idReg = "REG-".$time;
            $noRM = "RM-".$time;

            // Detail Patient
            $nikPatient = "";
            $inProcessPatient = false;
    
            // Upload to Patient DB
            $pt = new Patient();
            $pt->id_patient = $idPatient;
    
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
            $reg->status = "process";
            $reg->registration_date = $currentData;
            foreach ($dataClinic as $data) {
                $reg->{$data["name"]} = $data["value"];
            }
    
            // Check if nikPatient already exists and Status
            $existingPatient = Patient::where('nik', $nikPatient)->with('registration')->get();

            if($existingPatient->isNotEmpty()){
                foreach ($existingPatient as $patient) {
                    if ($patient->registration && $patient->registration->status === "process") {
                        $inProcessPatient = true;
                        break;
                    }
                }
                if ($inProcessPatient) {
                    return response()->json(['message' => 'Found']);
                }
            }
            
            // Save the data if nikPatient not found
            $pt->save();
            $reg->save();
    
            return response()->json(['message' => 'Success'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed']);
        }
    }

    public function searchPatientData(Request $request){
        try {
            // Ambil data pendaftar dari request
            $dataPendaftar = $request->input('dataPatient');
    
            $no_rekam_medik = "";
            $name = "";
            $birth  = "";
    
            // Periksa setiap elemen dataPendaftar
            foreach ($dataPendaftar as $data) {
                if ($data["name"] === 'no_rekam_medik') {
                    $no_rekam_medik ="RM-".$data["value"];
                } else if ($data["name"] === 'name') {
                    $name = $data["value"];
                } else if ($data["name"] === 'birth') {
                    $birth = $data["value"];
                }  
            }
    
            // Cari data pasien berdasarkan NIK dan Status
            $dataPatientFromDB = Registration::where('no_rekam_medik', $no_rekam_medik)
                                                ->where('status', 'process')
                                                ->with('layanan') //menghubungkan dengan relasi modal layanan dan dokter secara langsung
                                                ->with('patient')
                                                ->with('dokters')
                                                ->get();
            if($dataPatientFromDB->isNotEmpty()){
                $patient = $dataPatientFromDB->first()->patient;
                if ($patient->name === $name && $patient->birth === $birth) {
                    return response()->json(['message' => $dataPatientFromDB]);
                }else{
                    return response()->json(['message' => "Not Found"]);
                }
            }else{
                return response()->json(['message' => "Not Found"]);
            }
                
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed', 'error' => $e->getMessage()]);
        }
    }
}

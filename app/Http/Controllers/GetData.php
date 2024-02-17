<?php

namespace App\Http\Controllers;

use App\Models\Farmasi;
use App\Models\krjPoliAnak;
use App\Models\krjPoliGigi;
use App\Models\krjPoliKIA;
use App\Models\krjPoliUmumLansia;
use App\Models\Tagihan;
use Illuminate\Http\Request;

class GetData extends Controller
{
    public function getDataKRJUMumLansia() {

        $data = krjPoliUmumLansia::with('dokter')->where("id_farmasi", null)->get();

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJGigi() {

        $data = krjPoliGigi::with('dokter')->where("id_farmasi", null)->get();

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJKIA() {

        $data = krjPoliKIA::with('dokter')->where("id_farmasi", null)->get();
        // return response()->json(['message' => $data]);

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJAnak() {

        $data = krjPoliAnak::with('dokter')->where("id_farmasi", null)->get();
        // return response()->json(['message' => $data]);

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }

    // Kasir
    public function getDataKRJUMumLansiaKasir() {

        $data = krjPoliUmumLansia::with('dokter')->get();

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJGigiKasir() {

        $data = krjPoliGigi::with('dokter')->get();

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJKIAKasir() {

        $data = krjPoliKIA::with('dokter')->get();
        // return response()->json(['message' => $data]);

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataKRJAnakKasir() {

        $data = krjPoliAnak::with('dokter')->get();
        // return response()->json(['message' => $data]);

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataTagihanAll() {

        $data = Tagihan::with('krjPoliUmumLansia','krjPoliKIA','krjPoliAnak','krjPoliGigi')->where('status_tagihan','belum lunas')->get();
        // return response()->json(['message' => $data]);

        if ($data->isEmpty()) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    public function getDataTagihanWithId(Request $request) {

        $idTagihan = $request->input('id');

        
        $data = Tagihan::with('krjPoliUmumLansia.dokter','krjPoliKIA.dokter','krjPoliAnak.dokter','krjPoliGigi.dokter')->where('no_tagihan',$idTagihan)->first();
        
        // return response()->json(['message' => $data]);
        if (!$data) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }

    public function getDataFarmasi(Request $request) {
        $idFarmasi = $request->input("id_farmasi");
    
        $data = Farmasi::with('layanan','krjPoliUmumLansia.dokter','krjPoliKIA.dokter','krjPoliAnak.dokter', 'krjPoliGigi.dokter')->where("id_farmasi", $idFarmasi)->first();
    
        if (!$data) {
            return response()->json(['message' => 'Empty Data']);
        }
    
        return response()->json(['message' => 'Success Get Data', 'data' => $data]);
    }
    








    // GET DATA PER PATIENT
    public function getPatientUmumLansia(Request $request){

        $idPatient = $request->input('id');

    }
}

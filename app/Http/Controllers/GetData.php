<?php

namespace App\Http\Controllers;

use App\Models\krjPoliAnak;
use App\Models\krjPoliGigi;
use App\Models\krjPoliKIA;
use App\Models\krjPoliUmumLansia;
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



    // GET DATA PER PATIENT
    public function getPatientUmumLansia(Request $request){

        $idPatient = $request->input('id');

    }
}

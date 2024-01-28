<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\krjPoliUmumLansia;
use App\Models\Layanan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function dashboard(){
        $currentUser = Auth::user();
        return Inertia::render('admin/Dashboard',['currentUser'=>$currentUser]);
    }

    // Menu Master Admin
    public function dataAdmin(){
        $currentUser = Auth::user();
        $dataAdmins = User::all();
        $admin = User::where('username', 'admin')->first();

        return Inertia::render('admin/menuMaster/DataAdmin',[
            'currentUser'=>$currentUser,
            'dataAdmins'=>$dataAdmins,
            'admin'=>$admin,
            
        ]);
    }
    public function dataDokter(){
        $currentUser = Auth::user();
        $dataLayanan = Layanan::all();
        $dataDokters= Dokter::with('layanan')->get();

        return Inertia::render('admin/menuMaster/DataDokter',[
            'currentUser'=>$currentUser,
            'dataLayanan'=>$dataLayanan,
            'dataDokters'=>$dataDokters,

        ]);
    }
    public function KRJPoliUmumLansia(){
        $currentUser = Auth::user();
        $dataDoker = Dokter::all();
        $dataUmumLansia = krjPoliUmumLansia::with('dokter')->get();
        return Inertia::render('admin/menuMaster/KRJUmumLansia',[
            'currentUser'=>$currentUser,
            'dataUmumLansia'=>$dataUmumLansia,
            'dataDoker'=>$dataDoker
        ]);
    }
    public function dataPoliGigi(){
        $currentUser = Auth::user();
        return Inertia::render('admin/menuMaster/DataGigi',['currentUser'=>$currentUser]);
    }
    public function dataLaboratorium(){
        $currentUser = Auth::user();
        return Inertia::render('admin/menuMaster/DataLab',['currentUser'=>$currentUser]);
    }
    public function dataFarmasi(){
        $currentUser = Auth::user();
        return Inertia::render('admin/menuMaster/DataFarmasi',['currentUser'=>$currentUser]);
    }


    // Add Data
    public function addAdmin(Request $request){
        $newAdmin = $request->input('dataNewAdmin');

         // format waktu
         $currentTime = time();
         $time = date('YmdHis', $currentTime);
         $idNewAdmin = "USR-".$time;

        //  Take users data from database
        $dataUser = User::all();
        $usernames =[];
        foreach ($dataUser as $data) {
            $usernames[] = $data->username;
        }

        if($newAdmin){

            if(!collect($usernames)->contains($newAdmin['username'])){
                $user = new User();
                $user->id_user = $idNewAdmin;
                $user->second_identifyer = $idNewAdmin;
                $user->name = $newAdmin['name'];
                $user->username = $newAdmin['username'];
                $user->password = Hash::make($newAdmin['password']);
                $user->email  = $newAdmin['email'];
    
                if($user->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }
            return response()->json(['message'=>'Found Data']);
        }
        return response()->json(['message'=>'Fail Request']);


    }
    public function addDokters(Request $request){
        $newDokter = $request->input('dataNewDokter');


        //  format waktu
         $currentTime = time();
         $time = date('YmdHis', $currentTime);
         $idNewDokter = "DKTR-".$time;

        //  check dokter
        $isExistDokter = Dokter::where('nip', $newDokter['nip']);

        if($isExistDokter){
            return response()->json(['message'=>'Found Dokter']);
        }


        if($newDokter){
            $dokter = new Dokter();
            $dokter->id_dokter  = $idNewDokter;
            $dokter->nip  = $newDokter['nip'];
            $dokter->id_layanan = $newDokter['layanan'];
            $dokter->nama_dokter = $newDokter['nameDokter'];
            $dokter->spesialis = $newDokter['spesialis'];
            $dokter->email = $newDokter['email'];
            $dokter->noHp  = $newDokter['noHp'];
            $dokter->alamat  = $newDokter['alamat'];

            if($dokter->save()){
                return response()->json(['message'=>'Success Save Data']);
            }
            return response()->json(['message'=>'Failed Save Data']);
            

        }
        return response()->json(['message'=>'Fail Request']);

    }
    public function addKRJPoliUmumLansia(Request $request){
        try {
            $dataInput = $request->input('data');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idKRJUmumLansia = "KRJUL-".$time;
    
            //  check Data
            $cekData = krjPoliUmumLansia::where('id_dokter', $dataInput['id_dokter'])->where('name', $dataInput['name'])->where('birth',$dataInput['birth'])->exists();
    
            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
    
            // Format Tekanan Dara
            $tdarah = $dataInput['tdSistolik'] . '/' . $dataInput['tdDiastolik'];
    
    
            if($dataInput){
                $KRJUmumLansia = new krjPoliUmumLansia();
                $KRJUmumLansia->id_krj_poli_umum_lansia = $idKRJUmumLansia;
                $KRJUmumLansia->id_dokter = $dataInput['id_dokter'];
                $KRJUmumLansia->name = $dataInput['name'];
                $KRJUmumLansia->birth = $dataInput['birth'];
                $KRJUmumLansia->bb = $dataInput['bb'];
                $KRJUmumLansia->tb = $dataInput['tb'];
                $KRJUmumLansia->td = $tdarah;
                $KRJUmumLansia->rr = $dataInput['rr'];
                $KRJUmumLansia->n = $dataInput['n'];
                $KRJUmumLansia->anamnesis = $dataInput['anamnesis'];
                $KRJUmumLansia->pemeriksaan_fisik = $dataInput['pemeriksaan_fisik'];
                $KRJUmumLansia->pemeriksaan_penunjang = $dataInput['pemeriksaan_penunjang'];
                $KRJUmumLansia->diagnosis = $dataInput['diagnosis'];
                $KRJUmumLansia->terapi = $dataInput['terapi'];
                $KRJUmumLansia->rujukan = $dataInput['rujukan'];
    
                if($KRJUmumLansia->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            return response()->json(['message'=>'Fail Request']);
        }
       

    }



    // Edit Data
    public function editAdmin(Request $request){
        try {
            $dataEditAdmin = $request->input('dataEditAdmin');

            $checkId = User::where('id_user', $dataEditAdmin['id_user'])->first();

            // // Check if Super Admin
            if ($checkId && $checkId->username === 'admin') {
                return response()->json(['message' => 'Super Admin']);
            }
            
            if($checkId){
                $admin = $checkId ;
                $admin->name = $dataEditAdmin['name'];
                $admin->username = $dataEditAdmin['username'];
                $admin->password = $dataEditAdmin['password'];
                $admin->email = $dataEditAdmin['email'];

                if($admin->save()){

                    return response()->json(['message'=>"Success Edit Admin"]);
                }
                return response()->json(['message'=>"Failed Edit Admin"]);

            }
            return response()->json(['message'=>"Admin Not Found"]);

        } catch (\Throwable $th) {
            return response()->json(['message'=>'Failed Requst Database']);
        }
    }
    public function editDokter(Request $request)
    {
        try {
            $dataEditDokter = $request->input('dataEditDokter');
    
            $result = Dokter::where('id_dokter', $dataEditDokter['idDokter'])
            ->update([
                'nama_dokter' => $dataEditDokter['nameDokter'],
                'id_layanan' => $dataEditDokter['layanan'],
                'spesialis' => $dataEditDokter['spesialis'],
                'email' => $dataEditDokter['email'],
                'noHp' => $dataEditDokter['noHp'],
                'alamat' => $dataEditDokter['alamat'],
            ]);

        if ($result) {
            return response()->json(['message' => "Success Edit Dokter"]);
        }
    
            return response()->json(['message' => "Failed Edit Dokter"]);
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    



    // delete Data
    public function deleteAdmin(Request $request){
        try {
            $idAdmin = $request->input('id');

            $checkId = User::where('id_user', $idAdmin)->first();

            // Check if Super Admin
            if ($checkId && $checkId->username === 'admin') {
                return response()->json(['message' => 'Super Admin']);
            }
            
            if($checkId){
                $checkId->delete();
                return response()->json(['message'=>"Success Delete Admin"]);
            }
            return response()->json(['message'=>"Failed Delete Admin"]);

        } catch (\Throwable $th) {
            return response()->json(['message'=>'Failed Requst Database']);
        }
    }

    public function deleteKRJPoliUmumLansia(Request $request)
    {
        try {
            $idKRJPoliUmumLansia = $request->input('id');

            // return response()->json(['message' => $idKRJPoliUmumLansia]);

            $checkData = krjPoliUmumLansia::where('id_krj_poli_umum_lansia', $idKRJPoliUmumLansia)->delete();

            if (!$checkData) {
                return response()->json(['message' => "Data not found"], 404);
            }

            if ($checkData) {
                return response()->json(['message' => "Success Delete Data"]);
            } else {
                return response()->json(['message' => "Failed Delete Data"]);
            }

        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed Request Database', 'error' => $th->getMessage()]);
        }
    }
    public function deleteDokter(Request $request)
    {
        try {
            $idDokter = $request->input('id');

            $checkDokter = Dokter::where('id_dokter', $idDokter)->delete();

            if (!$checkDokter) {
                return response()->json(['message' => "Dokter not found"], 404);
            }

            if ($checkDokter) {
                return response()->json(['message' => "Success Delete Dokter"]);
            } else {
                return response()->json(['message' => "Failed Delete Dokter"]);
            }

        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed Request Database', 'error' => $th->getMessage()]);
        }
    }




    // Menu Pasien Admin
    public function patientDashboardAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use App\Models\Dokter;
use App\Models\krjPoliGigi;
use App\Models\krjPoliUmumLansia;
use App\Models\Laboratorium;
use App\Models\Layanan;
use App\Models\TableSpesialis;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function dashboard(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        
        return Inertia::render('admin/Dashboard',['currentUser'=>$currentUser]);
    }

    // Menu Master Admin
    public function dataAdmin(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataAdmins = User::with('admin')->get();
        $admin = User::where('username', 'admin')->first();

        return Inertia::render('admin/menuMaster/DataAdmin',[
            'currentUser'=>$currentUser,
            'dataAdmins'=>$dataAdmins,
            'admin'=>$admin,
            
        ]);
    }
    public function dataDokter(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataLayanan = Layanan::all();
        $dataDokters= Dokter::with('layanan')->get();

        return Inertia::render('admin/menuMaster/DataDokter',[
            'currentUser'=>$currentUser,
            'dataLayanan'=>$dataLayanan,
            'dataDokters'=>$dataDokters,

        ]);
    }
    public function dataJadwalDokter(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataSpesialis = TableSpesialis::all();
        $dataDokters= Dokter::with('layanan')->get();

        return Inertia::render('admin/menuMaster/DataJadwalDokter',[
            'currentUser'=>$currentUser,
            'dataSpesialis'=>$dataSpesialis,
            'dataDokters'=>$dataDokters,

        ]);
    }
    public function KRJPoliUmumLansia(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataDoker = Dokter::all();
        $dataUmumLansia = krjPoliUmumLansia::with('dokter')->get();
        
        return Inertia::render('admin/menuMaster/KRJUmumLansia',[
            'currentUser'=>$currentUser,
            'dataUmumLansia'=>$dataUmumLansia,
            'dataDoker'=>$dataDoker
        ]);
    }
    public function dataPoliGigi(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataGigi = krjPoliGigi::with('dokter')->get();
        $dataDoker = Dokter::all();
        return Inertia::render('admin/menuMaster/DataGigi',[
            'currentUser'=>$currentUser,
            'dataGigi'=>$dataGigi,
            'dataDoker'=>$dataDoker
        ]);
    }
    public function dataLaboratorium(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataDoker = Dokter::all();
        $dataLab = Laboratorium::all();
        $dataPoli = Layanan::all();
        
        return Inertia::render('admin/menuMaster/DataLab',[
            'currentUser'=>$currentUser,
            'dataDoker'=>$dataDoker,
            'dataLab'=>$dataLab,
            'dataPoli'=>$dataPoli,
        ]);
    }
    public function dataFarmasi(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        return Inertia::render('admin/menuMaster/DataFarmasi',['currentUser'=>$currentUser]);
    }


    // Add Data
    public function addAdmin(Request $request){
        $newAdmin = $request->input('dataNewAdmin');

         // format waktu
         $currentTime = time();
         $time = date('YmdHis', $currentTime);
         $idNewUser = "USR-".$time;
         $idNewAdmin = "ADM-".$time;

        //  Take users data from database
        $dataUser = User::all();
        $usernames =[];
        foreach ($dataUser as $data) {
            $usernames[] = $data->username;
        }

        if($newAdmin){

            if(!collect($usernames)->contains($newAdmin['username'])){
                $user = new User();
                $user->id_user = $idNewUser;
                $user->second_identifyer = $idNewUser;
                $user->id_admin  = $idNewAdmin;
                $user->username = $newAdmin['username'];
                $user->password = Hash::make($newAdmin['password']);

                $admin = new Admins();
                $admin->id_admin = $idNewAdmin;
                $admin->id_staff = $newAdmin['idStaff'];
                $admin->name = $newAdmin['name'];
                $admin->phone = $newAdmin['phone'];
                $admin->email = $newAdmin['email'];
                $admin->gender = $newAdmin['gender'];
                $admin->birth = $newAdmin['birth'];
                $admin->religion = $newAdmin['religion'];
                $admin->province = $newAdmin['province'];
                $admin->city = $newAdmin['city'];
                $admin->nationality = $newAdmin['nationality'];
                $admin->address = $newAdmin['address'];
          
                if($user->save() && $admin->save()){
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
                $KRJUmumLansia->penanggung_jawab = $dataInput['penanggung_jawab'];
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
    public function addKRJPoliGigi(Request $request){
        try {
            $dataInput = $request->input('data');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idKRJPoliGigi = "KRJPG-".$time;
    
            //  check Data
            $cekData = krjPoliGigi::where('id_dokter', $dataInput['id_dokter'])->where('name', $dataInput['name'])->where('birth',$dataInput['birth'])->exists();
    
            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
    
            // Format Tekanan Dara
            $tdarah = $dataInput['tdSistolik'] . '/' . $dataInput['tdDiastolik'];
    
    
            if($dataInput){
                $KRJUmumLansia = new krjPoliGigi();
                $KRJUmumLansia->id_krj_poli_gigi  = $idKRJPoliGigi;
                $KRJUmumLansia->id_dokter = $dataInput['id_dokter'];
                $KRJUmumLansia->penanggung_jawab = $dataInput['penanggung_jawab'];
                $KRJUmumLansia->name = $dataInput['name'];
                $KRJUmumLansia->birth = $dataInput['birth'];
                $KRJUmumLansia->bb = $dataInput['bb'];
                $KRJUmumLansia->tb = $dataInput['tb'];
                $KRJUmumLansia->td = $tdarah;
                $KRJUmumLansia->rr = $dataInput['rr'];
                $KRJUmumLansia->n = $dataInput['n'];
                $KRJUmumLansia->anamnesis = $dataInput['anamnesis'];
                $KRJUmumLansia->skala_nyeri = $dataInput['skala_nyeri'];
                $KRJUmumLansia->intra_oral = $dataInput['intra_oral'];
                $KRJUmumLansia->diagnosis = $dataInput['diagnosis'];
                $KRJUmumLansia->terapi = $dataInput['terapi'];
    
                if($KRJUmumLansia->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            return response()->json(['message'=>'Fail Request']);
        }
       

    }
    public function addLab(Request $request){
        try {
            $dataInput = $request->input('data');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idLab = "LAB-".$time;
    
            //  check Data
            $cekData = Laboratorium::where('name', $dataInput['name'])
                ->where('jk', $dataInput['jk'])
                ->where('age', $dataInput['age'])
                ->where('phone', $dataInput['phone'])
                ->where('card_number', $dataInput['card_number'])
                ->exists();

            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }

            if($dataInput){
                $dataLab = new Laboratorium();
                $dataLab->id_laboratorium   = $idLab;
                $dataLab->name = $dataInput['name'];
                $dataLab->jk = $dataInput['jk'];
                $dataLab->ttl = $dataInput['ttl'];
                $dataLab->age = $dataInput['age'];
                $dataLab->address = $dataInput['address'];
                $dataLab->phone = $dataInput['phone'];
                $dataLab->card_number = $dataInput['card_number'];
                $dataLab->request_date = $dataInput['request_date'];
                $dataLab->officer = $dataInput['officer'];
                $dataLab->poli = $dataInput['poli'];
                $dataLab->clinical_desc = $dataInput['clinical_desc'];
                $dataLab->responsible = $dataInput['responsible'];
                $dataLab->hematologi = $dataInput['hematologi'];
                $dataLab->serologis = $dataInput['serologis'];
                $dataLab->urinalisa = $dataInput['urinalisa'];
                $dataLab->mikrobiologi = $dataInput['mikrobiologi'];
                $dataLab->faeces = $dataInput['faeces'];
                $dataLab->faal_hati = $dataInput['faal_hati'];
                $dataLab->faal_ginjal = $dataInput['faal_ginjal'];
                $dataLab->faal_jantung = $dataInput['faal_jantung'];
                $dataLab->metabolisme_karbo = $dataInput['metabolisme_karbo'];
                $dataLab->profil_lipid = $dataInput['profil_lipid'];
                $dataLab->pemeriksaan_lainnya = $dataInput['pemeriksaan_lainnya'];
    
                if($dataLab->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            // return response()->json(['message'=>'Fail Request']);
            return response()->json(['message'=>$th->getMessage()]);
        }
       

    }


    // Edit Data
    public function editAdmin(Request $request){
        try {
            $dataEditAdmin = $request->input('dataEditAdmin');

            
            $checkIdUser = User::where('id_user', $dataEditAdmin['id_user'])->first();

            // // Check if Super Admin
            if ($checkIdUser && $checkIdUser->username === 'admin') {
                return response()->json(['message' => 'Super Admin']);
            }

                // return response()->json(['message' => $dataEditAdmin]);
            
            if($checkIdUser){
                $updateAdmin = Admins::where('id_admin', $checkIdUser['id_admin'])->update([
                    "id_staff" => $dataEditAdmin['idStaff'],
                    "name" => $dataEditAdmin['name'],
                    "phone" => $dataEditAdmin['phone'],
                    "email" => $dataEditAdmin['email'],
                    "gender" => $dataEditAdmin['gender'],
                    "birth" => $dataEditAdmin['birth'],
                    "religion" => $dataEditAdmin['religion'],
                    "province" => $dataEditAdmin['province'],
                    "city" => $dataEditAdmin['city'],
                    "nationality" => $dataEditAdmin['nationality'],
                    "address" => $dataEditAdmin['address'],
                ]);
            
                if ($updateAdmin) {
                    return response()->json(['message' => "Success Edit Admin"]);
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
    public function editKRJPoliUmumLansia(Request $request)
    {
        try {
            $dataEditKRJUmumLansia = $request->input('newData');
    
            $tekananDarah = $dataEditKRJUmumLansia['tdSistolik'].'/'.$dataEditKRJUmumLansia['tdDiastolik'];
            
            $dataUpdate = krjPoliUmumLansia::where('id_krj_poli_umum_lansia', $dataEditKRJUmumLansia['id_krjUmumLansia'])->update([
                'id_dokter'=>$dataEditKRJUmumLansia['id_dokter'],
                'name'=>$dataEditKRJUmumLansia['name'],
                'birth'=>$dataEditKRJUmumLansia['birth'],
                'bb'=>$dataEditKRJUmumLansia['bb'],
                'tb'=>$dataEditKRJUmumLansia['tb'],
                'td'=>$tekananDarah,
                'rr'=>$dataEditKRJUmumLansia['rr'],
                'n'=>$dataEditKRJUmumLansia['n'],
                'anamnesis'=>$dataEditKRJUmumLansia['anamnesis'],
                'pemeriksaan_fisik'=>$dataEditKRJUmumLansia['pemeriksaan_fisik'],
                'pemeriksaan_penunjang'=>$dataEditKRJUmumLansia['pemeriksaan_penunjang'],
                'diagnosis'=>$dataEditKRJUmumLansia['diagnosis'],
                'terapi'=>$dataEditKRJUmumLansia['terapi'],
                'rujukan'=>$dataEditKRJUmumLansia['rujukan'],
            ]);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            }
            
            return response()->json(['message' => "Failed Edit Data"]);

    
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    public function editKRJPoliGigi(Request $request)
    {
        try {
            $dataEditKRJPoliGigi = $request->input('newData');
    
            $tekananDarah = $dataEditKRJPoliGigi['tdSistolik'].'/'.$dataEditKRJPoliGigi['tdDiastolik'];
            
            $dataUpdate = krjPoliGigi::where('id_krj_poli_gigi', $dataEditKRJPoliGigi['id_krj_poli_gigi'])->update([
                'penanggung_jawab'=>$dataEditKRJPoliGigi['penanggung_jawab'],
                'id_dokter'=>$dataEditKRJPoliGigi['id_dokter'],
                'name'=>$dataEditKRJPoliGigi['name'],
                'birth'=>$dataEditKRJPoliGigi['birth'],
                'bb'=>$dataEditKRJPoliGigi['bb'],
                'tb'=>$dataEditKRJPoliGigi['tb'],
                'td'=>$tekananDarah,
                'rr'=>$dataEditKRJPoliGigi['rr'],
                'n'=>$dataEditKRJPoliGigi['n'],
                'skala_nyeri'=>$dataEditKRJPoliGigi['skala_nyeri'],
                'intra_oral'=>$dataEditKRJPoliGigi['intra_oral'],
                'anamnesis'=>$dataEditKRJPoliGigi['anamnesis'],
                'diagnosis'=>$dataEditKRJPoliGigi['diagnosis'],
                'terapi'=>$dataEditKRJPoliGigi['terapi'],
            ]);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            }
            
            return response()->json(['message' => "Failed Edit Data"]);

    
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    public function editLab(Request $request)
    {
        try {
            $dataLab = $request->input('newData');

            $dataUpdate = Laboratorium::where('id_laboratorium', $dataLab['id_laboratorium'])->update($dataLab);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            }
            
            return response()->json(['message' => "Failed Edit Data"]);

    
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    



    // delete Data
    public function deleteAdmin(Request $request){
        try {
            $idAdmin = $request->input('id');

            $checkIdUser = User::with('admin')->where('id_user', $idAdmin)->first();

            // Check if Super Admin
            if ($checkIdUser && $checkIdUser->admin->username === 'admin') {
                return response()->json(['message' => 'Super Admin']);
            }

            
            if($checkIdUser){
                $checkIdAdmin = Admins::where('id_admin', $checkIdUser->admin->id_admin)->delete();
                $checkDeleteUser = $checkIdUser->delete();
                
                if($checkDeleteUser && $checkIdAdmin){
                    return response()->json(['message'=>"Success Delete Admin"]);
                }
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
    public function deleteKRJPoliGigi(Request $request)
    {
        try {
            $idKRJPoliGigi = $request->input('id');

            $checkData = krjPoliGigi::where('id_krj_poli_gigi', $idKRJPoliGigi)->delete();

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
    public function deleteLab(Request $request)
    {
        try {
            $idLab = $request->input('id');


            $checkData = Laboratorium::where('id_laboratorium', $idLab)->delete();

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




    // Menu Pasien Admin
    public function patientDashboardAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }
}

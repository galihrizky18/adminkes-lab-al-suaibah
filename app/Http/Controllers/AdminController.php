<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use App\Models\Dokter;
use App\Models\Farmasi;
use App\Models\JadwalDokter;
use App\Models\krjPoliAnak;
use App\Models\krjPoliGigi;
use App\Models\krjPoliKIA;
use App\Models\krjPoliUmumLansia;
use App\Models\Laboratorium;
use App\Models\Layanan;
use App\Models\Registration;
use App\Models\TableSpesialis;
use App\Models\Tagihan;
use App\Models\User;
use Carbon\Carbon;
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
        // dd($currentUserData);

        // Total Data
        $totalUmumLansia = krjPoliUmumLansia::count();
        $totalAnak = krjPoliAnak::count();
        $totalGigi = krjPoliGigi::count();
        $totalKIA = krjPoliKIA::count();
        $totalLaboratorium = Laboratorium::count();
        $totalFarmasi = Farmasi::count();

        $totalData = [
            "totalUmumLansia" => $totalUmumLansia,
            "totalAnak" => $totalAnak,
            "totalGigi" => $totalGigi,
            "totalKIA" => $totalKIA,
            "totalLaboratorium" => $totalLaboratorium,
            "totalFarmasi" => $totalFarmasi,
        ];

        
        return Inertia::render('admin/Dashboard',['currentUser'=>$currentUser, 'totalData'=>$totalData]);
    }

    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

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
  
        $dataDokters = Dokter::with('layanan')->get();
        $dataJadwalDokter = JadwalDokter::with('dokter')->get();

        return Inertia::render('admin/menuMaster/DataJadwalDokter',[
            'currentUser'=>$currentUser,
            'dataJadwalDokter'=>$dataJadwalDokter,
            'dataDokters'=>$dataDokters,

        ]);
    }
    public function KRJPoliUmumLansia(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataDoker = Dokter::all();
        $dataUmumLansia = krjPoliUmumLansia::with('dokter')->get();

        // data perbulan
        $dataJanuari = $dataUmumLansia->where('bulan_input', "01")->count();
        $dataFebruari = $dataUmumLansia->where('bulan_input', "02")->count();
        $dataMaret = $dataUmumLansia->where('bulan_input', "03")->count();
        $dataApril = $dataUmumLansia->where('bulan_input', "04")->count();
        $dataMei = $dataUmumLansia->where('bulan_input', "05")->count();
        $dataJuni = $dataUmumLansia->where('bulan_input', "06")->count();
        $dataJuli = $dataUmumLansia->where('bulan_input', "07")->count();
        $dataAgustus = $dataUmumLansia->where('bulan_input', "08")->count();
        $dataSeptember = $dataUmumLansia->where('bulan_input', "09")->count();
        $dataOktober = $dataUmumLansia->where('bulan_input', "10")->count();
        $dataNovember = $dataUmumLansia->where('bulan_input', "11")->count();
        $dataDesember = $dataUmumLansia->where('bulan_input', "12")->count();

        $dataPerBulan = [
            "januari" => $dataJanuari,
            "februari" => $dataFebruari,
            "maret" => $dataMaret,
            "april" => $dataApril,
            "mei" => $dataMei,
            "juni" => $dataJuni,
            "juli" => $dataJuli,
            "agustus" => $dataAgustus,
            "september" => $dataSeptember,
            "oktober" => $dataOktober,
            "november" => $dataNovember,
            "desember" => $dataDesember,
        ];
        
        return Inertia::render('admin/menuMaster/KRJUmumLansia',[
            'currentUser'=>$currentUser,
            'dataUmumLansia'=>$dataUmumLansia,
            'dataDoker'=>$dataDoker,
            'dataPerBulan'=>$dataPerBulan,
        ]);
    }
    public function KRJPoliKIA(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataDoker = Dokter::all();
        $dataKIA = krjPoliKIA::with('dokter')->get();

        // data perbulan
        $dataJanuari = $dataKIA->where('bulan_input', "01")->count();
        $dataFebruari = $dataKIA->where('bulan_input', "02")->count();
        $dataMaret = $dataKIA->where('bulan_input', "03")->count();
        $dataApril = $dataKIA->where('bulan_input', "04")->count();
        $dataMei = $dataKIA->where('bulan_input', "05")->count();
        $dataJuni = $dataKIA->where('bulan_input', "06")->count();
        $dataJuli = $dataKIA->where('bulan_input', "07")->count();
        $dataAgustus = $dataKIA->where('bulan_input', "08")->count();
        $dataSeptember = $dataKIA->where('bulan_input', "09")->count();
        $dataOktober = $dataKIA->where('bulan_input', "10")->count();
        $dataNovember = $dataKIA->where('bulan_input', "11")->count();
        $dataDesember = $dataKIA->where('bulan_input', "12")->count();

        $dataPerBulan = [
            "januari" => $dataJanuari,
            "februari" => $dataFebruari,
            "maret" => $dataMaret,
            "april" => $dataApril,
            "mei" => $dataMei,
            "juni" => $dataJuni,
            "juli" => $dataJuli,
            "agustus" => $dataAgustus,
            "september" => $dataSeptember,
            "oktober" => $dataOktober,
            "november" => $dataNovember,
            "desember" => $dataDesember,
        ];
        
        return Inertia::render('admin/menuMaster/KRJKIA',[
            'currentUser'=>$currentUser,
            'dataKIA'=>$dataKIA,
            'dataDoker'=>$dataDoker,
            'dataPerBulan'=>$dataPerBulan,
        ]);
    }
    public function KRJPoliAnak(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataDoker = Dokter::all();
        $dataAnak = krjPoliAnak::with('dokter')->get();

        // data perbulan
        $dataJanuari = $dataAnak->where('bulan_input', "01")->count();
        $dataFebruari = $dataAnak->where('bulan_input', "02")->count();
        $dataMaret = $dataAnak->where('bulan_input', "03")->count();
        $dataApril = $dataAnak->where('bulan_input', "04")->count();
        $dataMei = $dataAnak->where('bulan_input', "05")->count();
        $dataJuni = $dataAnak->where('bulan_input', "06")->count();
        $dataJuli = $dataAnak->where('bulan_input', "07")->count();
        $dataAgustus = $dataAnak->where('bulan_input', "08")->count();
        $dataSeptember = $dataAnak->where('bulan_input', "09")->count();
        $dataOktober = $dataAnak->where('bulan_input', "10")->count();
        $dataNovember = $dataAnak->where('bulan_input', "11")->count();
        $dataDesember = $dataAnak->where('bulan_input', "12")->count();

        $dataPerBulan = [
            "januari" => $dataJanuari,
            "februari" => $dataFebruari,
            "maret" => $dataMaret,
            "april" => $dataApril,
            "mei" => $dataMei,
            "juni" => $dataJuni,
            "juli" => $dataJuli,
            "agustus" => $dataAgustus,
            "september" => $dataSeptember,
            "oktober" => $dataOktober,
            "november" => $dataNovember,
            "desember" => $dataDesember,
        ];
        
        return Inertia::render('admin/menuMaster/KRJAnak',[
            'currentUser'=>$currentUser,
            'dataAnak'=>$dataAnak,
            'dataDoker'=>$dataDoker,
            'dataPerBulan'=>$dataPerBulan,
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


        // Tambahkan untuk Poli Anak
        $dataLayanan = Layanan::all();
        $dataFarmasi = Farmasi::with('krjPoliUmumLansia.dokter','krjPoliKIA.dokter','krjPoliAnak.dokter', 'krjPoliGigi.dokter','layanan' )->get();

        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();

        return Inertia::render('admin/menuMaster/DataFarmasi',[
            'currentUser'=>$currentUser,
            'dataLayanan'=>$dataLayanan,
            'dataFarmasi'=>$dataFarmasi,
         
        ]);
    }

    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

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
             $month = date('m', $currentTime);
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
                $KRJUmumLansia->bulan_input = $month;
                $KRJUmumLansia->id_dokter = $dataInput['id_dokter'];
                $KRJUmumLansia->penanggung_jawab = $dataInput['penanggung_jawab'];
                $KRJUmumLansia->name = $dataInput['name'];
                $KRJUmumLansia->jk = $dataInput['jk'];
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
    public function addKRJPoliKIA(Request $request){
        try {
            $dataInput = $request->input('data');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $month = date('m', $currentTime);
             $idKRJKIA = "KRJKIA-".$time;
    
            //  check Data
            $cekData = krjPoliKIA::where('id_dokter', $dataInput['id_dokter'])->where('name', $dataInput['name'])->where('birth',$dataInput['birth'])->exists();
    
            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
    
            // Format Tekanan Dara
            $tdarah = $dataInput['tdSistolik'] . '/' . $dataInput['tdDiastolik'];
    
    
            if($dataInput){
                $KRJKIA = new krjPoliKIA();
                $KRJKIA->id_krj_poli_KIA  = $idKRJKIA;
                $KRJKIA->bulan_input = $month;
                $KRJKIA->id_dokter = $dataInput['id_dokter'];
                $KRJKIA->penanggung_jawab = $dataInput['penanggung_jawab'];
                $KRJKIA->name = $dataInput['name'];
                $KRJKIA->jk = $dataInput['jk'];
                $KRJKIA->birth = $dataInput['birth'];
                $KRJKIA->bb = $dataInput['bb'];
                $KRJKIA->tb = $dataInput['tb'];
                $KRJKIA->td = $tdarah;
                $KRJKIA->rr = $dataInput['rr'];
                $KRJKIA->n = $dataInput['n'];
                $KRJKIA->anamnesis = $dataInput['anamnesis'];
                $KRJKIA->pemeriksaan_fisik = $dataInput['pemeriksaan_fisik'];
                $KRJKIA->pemeriksaan_penunjang = $dataInput['pemeriksaan_penunjang'];
                $KRJKIA->diagnosis = $dataInput['diagnosis'];
                $KRJKIA->terapi = $dataInput['terapi'];
                $KRJKIA->rujukan = $dataInput['rujukan'];
    
                if($KRJKIA->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            return response()->json(['message'=>'Fail Request']);
        }
       

    }
    public function addKRJPoliAnak(Request $request){
        try {
            $dataInput = $request->input('data');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $month = date('m', $currentTime);
             $idKRJAnak = "KRJANK-".$time;
    
            //  check Data
            $cekData = krjPoliAnak::where('id_dokter', $dataInput['id_dokter'])->where('name', $dataInput['name'])->where('birth',$dataInput['birth'])->exists();
    
            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
    
            // Format Tekanan Darah
            $tdarah = $dataInput['tdSistolik'] . '/' . $dataInput['tdDiastolik'];
    
            if($dataInput){
                $KRJANK = new krjPoliAnak();
                $KRJANK->id_krj_poli_anak = $idKRJAnak;
                $KRJANK->bulan_input = $month;
                $KRJANK->id_dokter = $dataInput['id_dokter'];
                $KRJANK->penanggung_jawab = $dataInput['penanggung_jawab'];
                $KRJANK->name = $dataInput['name'];
                $KRJANK->jk = $dataInput['jk'];
                $KRJANK->birth = $dataInput['birth'];
                $KRJANK->bb = $dataInput['bb'];
                $KRJANK->tb = $dataInput['tb'];
                $KRJANK->td = $tdarah;
                $KRJANK->rr = $dataInput['rr'];
                $KRJANK->n = $dataInput['n'];
                $KRJANK->anamnesis = $dataInput['anamnesis'];
                $KRJANK->pemeriksaan_fisik = $dataInput['pemeriksaan_fisik'];
                $KRJANK->pemeriksaan_penunjang = $dataInput['pemeriksaan_penunjang'];
                $KRJANK->diagnosis = $dataInput['diagnosis'];
                $KRJANK->terapi = $dataInput['terapi'];
                $KRJANK->rujukan = $dataInput['rujukan'];
    
                if($KRJANK->save()){
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
                $KRJUmumLansia->jk = $dataInput['jk'];
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
                $dataLab->id_layanan = $dataInput['poli'];
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
    public function addJadwalDokter(Request $request){
        try {
            $dataInput = $request->input('dataNewJadwal');

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idJadwalDokter = "JDWLD-".$time;
    
            //  check Data
            $cekData = JadwalDokter::where('id_dokter', $dataInput['id_dokter'])->exists();


            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
  
            if($dataInput){
                $dataJadwal = new JadwalDokter();
                $dataJadwal->id_jadwal_dokter  = $idJadwalDokter;
                $dataJadwal->id_dokter = $dataInput['id_dokter'];
                $dataJadwal->senin = $dataInput['senin']. " - " . $dataInput['seninSampai'];
                $dataJadwal->selasa = $dataInput['selasa']. " - " . $dataInput['selasaSampai'];
                $dataJadwal->rabu = $dataInput['rabu']. " - " . $dataInput['rabuSampai'];
                $dataJadwal->kamis = $dataInput['kamis']. " - " . $dataInput['kamisSampai'];
                $dataJadwal->jumat = $dataInput['jumat']. " - " . $dataInput['jumatSampai'];
                $dataJadwal->sabtu = $dataInput['sabtu']. " - " . $dataInput['sabtuSampai'];
                
                if($dataJadwal->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            // return response()->json(['message'=>'Fail Request']);
            return response()->json(['message'=>$th->getMessage()]);
        }
       

    }
    public function addFarmasi(Request $request){
        try {
            $dataInput = $request->input('data');

            // return response()->json(['message'=>$dataInput]);

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idFarmasi = "FRM-".$time;
    


            //  check Data
            $cekData = Farmasi::where('id_pemeriksaan', $dataInput['id_pemeriksaan'])->exists();
            if($cekData){
                return response()->json(['message'=>'Found Data']);
            }
            

            if($dataInput){
                $dataFarmasi = new Farmasi();

                
                $dataFarmasi->id_farmasi  = $idFarmasi;
                $dataFarmasi->id_pemeriksaan = $dataInput['id_pemeriksaan'];
                $dataFarmasi->id_layanan = $dataInput['id_layanan'];
                $dataFarmasi->tipe_farmasi = $dataInput['jenis_farmasi'];
                $dataFarmasi->tanggal_resep = $dataInput['tanggal_resep'];

                if($dataInput['jenis_farmasi'] === "non asuransi"){
                    $dataFarmasi->asuransi_nama = "-";
                    $dataFarmasi->asuransi_umur = "-";
                    $dataFarmasi->asuransi_jk = "-";
                    $dataFarmasi->asuransi_bb = "-";
                    $dataFarmasi->asuransi_dokter = "-";
                    $dataFarmasi->asuransi_unit_asal = "-";
                }

                $dataFarmasi->nama_obat = $dataInput['nama_obat'];
                $dataFarmasi->bentuk_sediaan = $dataInput['bentuk_sediaan'];
                $dataFarmasi->dosis_obat = $dataInput['dosis_obat'];
                $dataFarmasi->jumlah_obat = $dataInput['jumlah_obat'];
                $dataFarmasi->aturan_pakai = $dataInput['aturan_pakai'];
                $dataFarmasi->stabilitas = $dataInput['stabilitas'];
                $dataFarmasi->tepat_obat = $dataInput['tepat_obat'];
                $dataFarmasi->tepat_indikasi = $dataInput['tepat_indikasi'];
                $dataFarmasi->tepat_dosis = $dataInput['tepat_dosis'];
                $dataFarmasi->tepat_waktu_penggunaan = $dataInput['tepat_waktu_penggunaan'];
                $dataFarmasi->tepat_rute = $dataInput['tepat_rute'];
                $dataFarmasi->interaksi = $dataInput['interaksi'];
                $dataFarmasi->duplikasi = $dataInput['duplikasi'];
                $dataFarmasi->alergi = $dataInput['alergi'];
                $dataFarmasi->kontra_indikasi = $dataInput['kontra_indikasi'];
                $dataFarmasi->pioKie = $dataInput['pio'];
                $dataFarmasi->konseling = $dataInput['konseling'];
                $dataFarmasi->telah_diberikan = $dataInput['telah_diberikan'];
                
                
                if($dataFarmasi->save()){
                     // Update data per Poli
                    if($dataInput['id_layanan'] === "layanan1"){
                        krjPoliUmumLansia::where('id_krj_poli_umum_lansia', $dataInput['id_pemeriksaan'])->update([
                            'id_farmasi' => $idFarmasi
                        ]);
                    }
                    else if($dataInput['id_layanan'] === "layanan2"){
                        krjPoliAnak::where('id_krj_poli_anak', $dataInput['id_pemeriksaan'])->update([
                            'id_farmasi'=>$idFarmasi
                        ]);
                    }
                    else if($dataInput['id_layanan'] === "layanan3"){
                        krjPoliGigi::where('id_krj_poli_gigi', $dataInput['id_pemeriksaan'])->update([
                            'id_farmasi'=>$idFarmasi
                        ]);
                    }
                    else if($dataInput['id_layanan'] === "layanan6"){
                        krjPoliKIA::where('id_krj_poli_KIA', $dataInput['id_pemeriksaan'])->update([
                            'id_farmasi'=>$idFarmasi
                        ]);
                    }

                        return response()->json(['message'=>'Success Save Data']);
                }

                        
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            // return response()->json(['message'=>'Fail Request']);
            return response()->json(['message'=>$th->getMessage()]);
        }
       

    }
    public function addFarmasiAsuransi(Request $request){
        try {
            $dataInput = $request->input('data');

            // return response()->json(['message'=>$dataInput]);

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idFarmasi = "FRM-".$time;
    

  
            if($dataInput){
                $dataFarmasi = new Farmasi();
                $dataFarmasi->id_farmasi  = $idFarmasi;
                $dataFarmasi->id_pemeriksaan = $dataInput['id_pemeriksaan'];
                $dataFarmasi->id_layanan = $dataInput['id_layanan'];
                $dataFarmasi->tipe_farmasi = $dataInput['jenis_farmasi'];
                $dataFarmasi->tanggal_resep = $dataInput['tanggal_resep'];

                if($dataInput['jenis_farmasi'] === "non asuransi"){
                    $dataFarmasi->asuransi_nama = "-";
                    $dataFarmasi->asuransi_umur = "-";
                    $dataFarmasi->asuransi_jk = "-";
                    $dataFarmasi->asuransi_bb = "-";
                    $dataFarmasi->asuransi_dokter = "-";
                    $dataFarmasi->asuransi_unit_asal = "-";
                }else if($dataInput['jenis_farmasi'] === "asuransi"){
                    $dataFarmasi->asuransi_nama = $dataInput['asuransi_nama'];
                    $dataFarmasi->asuransi_umur = $dataInput['asuransi_umur'];
                    $dataFarmasi->asuransi_jk = $dataInput['asuransi_jk'];
                    $dataFarmasi->asuransi_bb = $dataInput['asuransi_bb'];
                    $dataFarmasi->asuransi_dokter = $dataInput['asuransi_dokter'];
                    $dataFarmasi->asuransi_unit_asal = $dataInput['asuransi_unit_asal'];
                }

                $dataFarmasi->nama_obat = $dataInput['nama_obat'];
                $dataFarmasi->bentuk_sediaan = $dataInput['bentuk_sediaan'];
                $dataFarmasi->dosis_obat = $dataInput['dosis_obat'];
                $dataFarmasi->jumlah_obat = $dataInput['jumlah_obat'];
                $dataFarmasi->aturan_pakai = $dataInput['aturan_pakai'];
                $dataFarmasi->stabilitas = $dataInput['stabilitas'];
                $dataFarmasi->tepat_obat = $dataInput['tepat_obat'];
                $dataFarmasi->tepat_indikasi = $dataInput['tepat_indikasi'];
                $dataFarmasi->tepat_dosis = $dataInput['tepat_dosis'];
                $dataFarmasi->tepat_waktu_penggunaan = $dataInput['tepat_waktu_penggunaan'];
                $dataFarmasi->tepat_rute = $dataInput['tepat_rute'];
                $dataFarmasi->interaksi = $dataInput['interaksi'];
                $dataFarmasi->duplikasi = $dataInput['duplikasi'];
                $dataFarmasi->alergi = $dataInput['alergi'];
                $dataFarmasi->kontra_indikasi = $dataInput['kontra_indikasi'];
                $dataFarmasi->pioKie = $dataInput['pio'];
                $dataFarmasi->konseling = $dataInput['konseling'];
                $dataFarmasi->telah_diberikan = $dataInput['telah_diberikan'];
                
                
                if($dataFarmasi->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            // return response()->json(['message'=>'Fail Request']);
            return response()->json(['message'=>$th->getMessage()]);
        }
       

    }
    public function addTagihan(Request $request){
        try {
            $dataInput = $request->input('data');

            // return response()->json(['message'=>$dataInput]);

            //  format waktu
             $currentTime = time();
             $time = date('YmdHis', $currentTime);
             $idTagihan = "TGHN-".$time;

            $checkData = Tagihan::where('id_pemeriksaan', $dataInput['id_pemeriksaan'])->where('status_tagihan', 'belum lunas')->first();

            if($checkData){
                return response()->json(['message'=>'Found Data']);
            }
  
            if($dataInput){
                $dataTagihan = new Tagihan();
                $dataTagihan->no_tagihan  = $idTagihan;
                $dataTagihan->id_pemeriksaan = $dataInput['id_pemeriksaan'];
                $dataTagihan->biaya_dokter = $dataInput['biaya_dokter'];
                $dataTagihan->biaya_perawat = $dataInput['biaya_perawat'];
                $dataTagihan->biaya_resep = $dataInput['biaya_resep'];
                $dataTagihan->status_tagihan = "belum lunas";

                
                if($dataTagihan->save()){
                    return response()->json(['message'=>'Success Save Data']);
                }
                return response()->json(['message'=>'Failed Save Data']);
            }

        } catch (\Throwable $th) {
            // return response()->json(['message'=>'Fail Request']);
            return response()->json(['message'=>$th->getMessage()]);
        }
       

    }

    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

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
    public function editKRJKIA(Request $request)
    {
        try {
            $dataEditKRJKIA = $request->input('newData');
    
            $tekananDarah = $dataEditKRJKIA['tdSistolik'].'/'.$dataEditKRJKIA['tdDiastolik'];
            
            $dataUpdate = krjPoliKIA::where('id_krj_poli_KIA', $dataEditKRJKIA['id_krj_poli_KIA'])->update([
                'id_dokter'=>$dataEditKRJKIA['id_dokter'],
                'name'=>$dataEditKRJKIA['name'],
                'birth'=>$dataEditKRJKIA['birth'],
                'bb'=>$dataEditKRJKIA['bb'],
                'tb'=>$dataEditKRJKIA['tb'],
                'td'=>$tekananDarah,
                'rr'=>$dataEditKRJKIA['rr'],
                'n'=>$dataEditKRJKIA['n'],
                'anamnesis'=>$dataEditKRJKIA['anamnesis'],
                'pemeriksaan_fisik'=>$dataEditKRJKIA['pemeriksaan_fisik'],
                'pemeriksaan_penunjang'=>$dataEditKRJKIA['pemeriksaan_penunjang'],
                'diagnosis'=>$dataEditKRJKIA['diagnosis'],
                'terapi'=>$dataEditKRJKIA['terapi'],
                'rujukan'=>$dataEditKRJKIA['rujukan'],
            ]);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            }
            
            return response()->json(['message' => "Failed Edit Data"]);

    
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    public function editKRJAnak(Request $request)
    {
        try {
            $dataEditKRJAnak = $request->input('newData');
    
            $tekananDarah = $dataEditKRJAnak['tdSistolik'].'/'.$dataEditKRJAnak['tdDiastolik'];
            
            $dataUpdate = krjPoliAnak::where('id_krj_poli_anak', $dataEditKRJAnak['id_krj_poli_anak'])->update([
                'id_dokter'=>$dataEditKRJAnak['id_dokter'],
                'name'=>$dataEditKRJAnak['name'],
                'birth'=>$dataEditKRJAnak['birth'],
                'bb'=>$dataEditKRJAnak['bb'],
                'tb'=>$dataEditKRJAnak['tb'],
                'td'=>$tekananDarah,
                'rr'=>$dataEditKRJAnak['rr'],
                'n'=>$dataEditKRJAnak['n'],
                'anamnesis'=>$dataEditKRJAnak['anamnesis'],
                'pemeriksaan_fisik'=>$dataEditKRJAnak['pemeriksaan_fisik'],
                'pemeriksaan_penunjang'=>$dataEditKRJAnak['pemeriksaan_penunjang'],
                'diagnosis'=>$dataEditKRJAnak['diagnosis'],
                'terapi'=>$dataEditKRJAnak['terapi'],
                'rujukan'=>$dataEditKRJAnak['rujukan'],
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

            $dataUpdate = Laboratorium::where('id_laboratorium', $dataLab['id_laboratorium'])->update([
                "name" => $dataLab['name'],
                "jk" => $dataLab['jk'],
                "ttl" => $dataLab['ttl'],
                "age" => $dataLab['age'],
                "address" => $dataLab['address'],
                "phone" => $dataLab['phone'],
                "card_number" => $dataLab['card_number'],
                "request_date" => $dataLab['request_date'],
                "officer" =>$dataLab['officer'],
                "id_layanan" => $dataLab['poli'],
                "clinical_desc" => $dataLab['clinical_desc'],
                "responsible" => $dataLab['responsible'],
                "hematologi" => $dataLab['hematologi'],
                "serologis" =>$dataLab['serologis'],
                "urinalisa" =>$dataLab['urinalisa'],
                "mikrobiologi" => $dataLab['mikrobiologi'],
                "faeces" => $dataLab['faeces'],
                "faal_hati" =>$dataLab['faal_hati'],
                "faal_ginjal" => $dataLab['faal_ginjal'],
                "faal_jantung" => $dataLab['faal_jantung'],
                "metabolisme_karbo" => $dataLab['metabolisme_karbo'],
                "profil_lipid" => $dataLab['profil_lipid'],
                "pemeriksaan_lainnya" => $dataLab['pemeriksaan_lainnya'],
            ]);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            }
            
            return response()->json(['message' => "Failed Edit Data"]);

    
    
        } catch (\Throwable $th) {

            return response()->json(['message' => 'Failed Request Database']);
        }
    }
    public function editJadwalDokter(Request $request)
    {
        try {
            $dataJadwal = $request->input('dataNewJadwal');

            $dataUpdate = JadwalDokter::where('id_jadwal_dokter', $dataJadwal['id_jadwal_dokter'])->update([
                "senin" => $dataJadwal['senin'] . " - " . $dataJadwal['seninSampai'],
                "selasa" => $dataJadwal['selasa'] . " - " . $dataJadwal['selasaSampai'],
                "rabu" => $dataJadwal['rabu'] . " - " . $dataJadwal['rabuSampai'],
                "kamis" => $dataJadwal['kamis'] . " - " . $dataJadwal['kamisSampai'],
                "jumat" => $dataJadwal['jumat'] . " - " . $dataJadwal['jumatSampai'],
                "sabtu" => $dataJadwal['sabtu'] . " - " . $dataJadwal['sabtuSampai'],
            ]);

            if ($dataUpdate) {
                return response()->json(['message' => "Success Edit Data"]);
            } else {
                return response()->json(['message' => "Failed Edit Data"], 500);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed Request Database: ' . $th->getMessage()], 500);
        }
    }
    
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

    // delete Data
    public function deleteAdmin(Request $request){
        try {
            $idAdmin = $request->input('id');

            $currentUserData = session('current_user');

            if($currentUserData->id_user === $idAdmin){
                return response()->json(['message' => 'Super Admin']);
            }

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
    public function deleteKRJKIA(Request $request)
    {
        try {
            $idKRJKIA = $request->input('id');

            // return response()->json(['message' => $idKRJPoliUmumLansia]);

            $checkData = krjPoliKIA::where('id_krj_poli_KIA', $idKRJKIA)->delete();

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
    public function deleteKRJAnak(Request $request)
    {
        try {
            $idKRJKIA = $request->input('id');

            // return response()->json(['message' => $idKRJPoliUmumLansia]);

            $checkData = krjPoliAnak::where('id_krj_poli_anak', $idKRJKIA)->delete();

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
    public function deleteJadwalDokter(Request $request)
    {
        try {
            $idJadwal = $request->input('id');


            $checkData = JadwalDokter::where('id_jadwal_dokter', $idJadwal)->delete();

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
    public function deleteFarmasi(Request $request)
    {
        try {
            $idFarmasi = $request->input('id');


            $checkData = Farmasi::where('id_farmasi', $idFarmasi)->delete();

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
    
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

    // Report
    public function reportPasienBaru(){
        $dataPasiens = Registration::with('patient')->get();

        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        
        return Inertia::render('admin/report/ReportPasienBaru',[
            'currentUser'=>$currentUser,
            'dataPasiens'=>$dataPasiens,
        ]);
    }

    // Delete
    public function deletePasienBaru(Request $request)
    {
        try {
            $idPasienBaru = $request->input('id');
            // return response()->json(['message' => $idPasienBaru]);

            $checkData = Registration::where('id_registration', $idPasienBaru)->delete();

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


    // ==================================================================================
    // ==================================================================================
    // ==================================================================================
    // ==================================================================================

    // KASIR
    public function adminKasir(){
        $currentUserData = session('current_user');
        $currentUser = Admins::where('id_admin',$currentUserData->id_admin)->first();
        $dataTagihan = Tagihan::with('krjPoliUmumLansia','krjPoliKIA','krjPoliAnak','krjPoliGigi')->get();

        $dataLayanan = Layanan::all();
      

        return Inertia::render('admin/kasir/AdminKasir',[
            'currentUser'=>$currentUser,
            'dataTagihan'=>$dataTagihan,
            'dataLayanan'=>$dataLayanan,

            
        ]);
    }

    public function pembayaran(Request $request){
        try {
            $no_tagihan = $request->input('no_tagihan');
            
            // Ambil data waktu
            $waktuSekarang = Carbon::now();
            
            $tagihan = Tagihan::where('no_tagihan',$no_tagihan["no_tagihan"])->first();
            
            // Periksa apakah tagihan ada dan belum lunas
            if(!$tagihan || $tagihan->status_tagihan === 'lunas') {
                return response()->json(['message' => '"Data Sudah Lunas']);
            }
            
            // Lakukan pembayaran
            $pembayaran = Tagihan::where('no_tagihan',$no_tagihan["no_tagihan"])->update([
                'status_tagihan' => 'lunas',
                'uang_pembayaran' => $no_tagihan['uang_pembayaran'],
                'tanggal_pelunasan' => $waktuSekarang,
            ]);

            // Perbarui status resep jika terkait dengan tagihan
            $dataFarmasi = Farmasi::where('id_pemeriksaan', $tagihan->id_pemeriksaan)->first();
            if($dataFarmasi){
                Farmasi::where('id_pemeriksaan', $tagihan->id_pemeriksaan)->update([
                    "status_resep" => 'lunas',
                ]);

            }
           
            if($pembayaran){
                return response()->json(['message' => "Success Pembayaran"]);
            }

            return response()->json(['message' => "Failed Pembayaran"]);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed Request Database']);
        }
       
    }











    // Menu Pasien Admin
    public function patientDashboardAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use App\Models\Dokter;
use App\Models\Farmasi;
use App\Models\JadwalDokter;
use App\Models\krjPoliGigi;
use App\Models\krjPoliUmumLansia;
use App\Models\Laboratorium;
use App\Models\Registration;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailController extends Controller
{
    
    // Menu MAster
    public function detailAdmin(Request $request){

        $idUser =  $request->input('id_user');
        
        $dataAdmin = User::with("admin")->where('id_user',$idUser)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();


        if($dataAdmin){
            return Inertia::render('admin/menuMaster/detail/DetailAdmin',[
                'currentUser'=>$currentUser,
                'dataAdmin'=>$dataAdmin,
            ]);
        }
        return redirect('/admin/master-menu/admin');
    }
    public function detailDokter(Request $request){

        $idDokter =  $request->input('id_dokter');

        
        $dataDokter = Dokter::with('layanan')->where('id_dokter',$idDokter)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataDokter){

            return Inertia::render('admin/menuMaster/detail/DetailDokter',[
                'currentUser'=>$currentUser,
                'dataDokter'=>$dataDokter,
            ]);
        }
        return redirect('/admin/master-menu/dokter');
    }
    
    // Menu Input
    public function detailKRJPoliUmumLansia(Request $request){

        $idPoli =  $request->input('id_poli');
        
        $dataPoliUmumLansia = krjPoliUmumLansia::with('dokter')->where('id_krj_poli_umum_lansia',$idPoli)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataPoliUmumLansia){
            return Inertia::render('admin/menuMaster/detail/DetailKRJUmumLansia',[
                'currentUser'=>$currentUser,
                'dataPoliUmumLansia'=>$dataPoliUmumLansia,
            ]);
        }
        return redirect('/admin/master-menu/rawat-jalan-umum-lansia');

    }
    public function detailPoliGigi(Request $request){

        $idPoli =  $request->input('id_poli');
        
        $dataPoliGigi = krjPoliGigi::with('dokter')->where('id_krj_poli_gigi',$idPoli)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataPoliGigi){
            return Inertia::render('admin/menuMaster/detail/DetailPoliGigi',[
                'currentUser'=>$currentUser,
                'dataPoliGigi'=>$dataPoliGigi,
            ]);
        }
        return redirect('/admin/master-menu/poli-gigi');

    }
    public function detailJadwalDokter(Request $request){

        $idJadwal =  $request->input('id_jadwal');
        
        $dataJadwal = JadwalDokter::with('dokter')->where('id_jadwal_dokter',$idJadwal)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataJadwal){
            return Inertia::render('admin/menuMaster/detail/DetailJadwalDokter',[
                'currentUser'=>$currentUser,
                'dataJadwal'=>$dataJadwal,
            ]);
        }
        return redirect('/admin/master-menu/jadwal-dokter');

    }
    public function detailLab(Request $request){

        $idLab =  $request->input('id_lab');
        
        $dataLab = Laboratorium::with('layanan')->where('id_laboratorium',$idLab)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataLab){
            return Inertia::render('admin/menuMaster/detail/DetailLab',[
                'currentUser'=>$currentUser,
                'dataLab'=>$dataLab,
            ]);
        }
        return redirect('/admin/master-menu/laboratorium');

    }
    public function detailFarmasi(Request $request){

        $idFarmasi =  $request->input('id_farmasi');
        
        $dataFarmasi = Farmasi::with('layanan','krjPoliUmumLansia.dokter','krjPoliGigi.dokter')->where('id_farmasi',$idFarmasi)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataFarmasi){
            return Inertia::render('admin/menuMaster/detail/DetailFarmasi',[
                'currentUser'=>$currentUser,
                'dataFarmasi'=>$dataFarmasi,
            ]);
        }
        return redirect('/admin/master-menu/farmasi');

    }


    // Menu Report
    // Detail Pasien BAru
    public function detailPasienBaru(Request $request){

        $idDataPasienBaru =  $request->input('id_reg');
        
        $dataPasienBaru = Registration::with('patient','layanan','dokters')->where('id_registration',$idDataPasienBaru)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();

        if($dataPasienBaru){
            return Inertia::render('admin/menuMaster/detail/DetailDataPasienBaru',[
                'currentUser'=>$currentUser,
                'dataPasienBaru'=>$dataPasienBaru,
            ]);
        }
        return redirect('/admin/report/pasien-baru');

    }


    

}

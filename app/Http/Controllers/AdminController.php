<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\Patient;
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
    public function dataPoliUmumLansia(){
        $currentUser = Auth::user();
        return Inertia::render('admin/menuMaster/DataUmumLansia',['currentUser'=>$currentUser]);
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



    // Menu Pasien Admin
    public function patientDashboardAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }
}

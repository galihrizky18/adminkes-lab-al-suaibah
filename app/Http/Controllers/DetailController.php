<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailController extends Controller
{
    
    public function detailAdmin(Request $request){

        $idUser =  $request->input('id_user');
        
        $dataAdmin = User::with("admin")->where('id_user',$idUser)->first();

        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();
        return Inertia::render('admin/menuMaster/detail/DetailAdmin',[
            'currentUser'=>$currentUser,
            'dataAdmin'=>$dataAdmin,
        ]);
    }
}

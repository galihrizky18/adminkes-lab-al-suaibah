<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailController extends Controller
{
    
    public function detailAdmin(){
        $currentUserData = session('current_user');
        $currentUser = Admins::with('user')->where('id_admin',$currentUserData->id_admin)->first();
        return Inertia::render('admin/menuMaster/detail/DetailAdmin',[
            'currentUser'=>$currentUser,
        ]);
    }
}

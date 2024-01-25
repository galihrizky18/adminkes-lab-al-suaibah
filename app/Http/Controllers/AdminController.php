<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard(){

        $currentUser  = Auth::user();

        return Inertia::render('admin/Dashboard',['currentUser'=>$currentUser]);
    }

    public function patientDashboardAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }

    public function dataAdmin(){
        return Inertia::render('admin/patient/PatientDashboard');
    }
}

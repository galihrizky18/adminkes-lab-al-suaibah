<?php

namespace App\Http\Controllers;

use App\Models\JadwalDokter;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function dashbaord(){

        $jadwalDokter = JadwalDokter::with('dokter')->get();

        return Inertia::render('Dashboard',['jadwalDokter'=>$jadwalDokter]);
    }
}

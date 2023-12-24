<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PendaftaranController extends Controller
{
    public function pagePendaftaran(){
        return Inertia::render('pendaftaran/Pendaftaran');
    }
    
    public function pagePasienBaru(){
        return Inertia::render('pendaftaran/PasienBaru');
    }
}

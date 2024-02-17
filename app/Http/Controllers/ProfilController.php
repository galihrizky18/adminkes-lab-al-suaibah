<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    public function index()
    {
        // Logika untuk halaman profil di sini
        return Inertia::render('profil/Profil');
    }
}

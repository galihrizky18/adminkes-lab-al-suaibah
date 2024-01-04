<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PoliAnakController extends Controller
{
    public function dashboard(){
        return Inertia::render('poliAnak/PoliAnak');
    }
}

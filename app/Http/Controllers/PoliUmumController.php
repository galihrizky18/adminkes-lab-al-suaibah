<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PoliUmumController extends Controller
{
    
    public function dashboard(){
        return Inertia::render('poliUmum/PoliUmum');
    }

}

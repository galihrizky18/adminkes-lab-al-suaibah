<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PoliGigiController extends Controller
{
    public function dashboard(){
        return Inertia::render('poliGigi/PoliGigi');
    }
}

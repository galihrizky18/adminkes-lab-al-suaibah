<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApotekController extends Controller
{
    public function dashboard(){
        return Inertia::render('apotek/Apotek');
    }
}

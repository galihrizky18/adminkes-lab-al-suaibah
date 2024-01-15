<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KIAController extends Controller
{
    public function dashboard(){
        return Inertia::render('kia/Kia');
    }
}

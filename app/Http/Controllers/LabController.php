<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function dashboard(){
        return Inertia::render('laboratorium/laboratorium');
    }
}

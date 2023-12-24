<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function dashbaord(){
        return Inertia::render('Dashboard');
    }
}

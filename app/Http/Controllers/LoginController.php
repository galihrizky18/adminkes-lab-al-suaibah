<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function login(){
        return Inertia::render("login/Login");
    }

    public function loginValidation(Request $request)
    {
        try {
            // Ambil data login dari request
            $dataLogin = $request->input('data');

            if (Auth::attempt(['username' => $dataLogin['username'], 'password' => $dataLogin['password']])) {
                return response()->json(['isLoggedIn' => true]);
            } else {
                return response()->json(['isLoggedIn' => false]);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Gagal'], 400);
        }
    }



    public function loginValidationsss(Request $request){

        $dataLogin = $request->all();
        return response()->json($dataLogin);

    }





    public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}

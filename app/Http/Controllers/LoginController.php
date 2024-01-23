<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login(){
        return Inertia::render("login/Login");
    }

    public function loginValidation(Request $request){
        try {
            // Ambil data login dari request
            $dataLogin = $request->all();
            $username = '';
            $password = '';
            
            foreach($dataLogin as $data){
                if($data["name"] === "username"){
                    $username = $data["value"];
                }elseif($data["name"] === "password"){
                    $password = $data["value"];
                }
            }

            if (Auth::attempt(['username' => $username, 'password' => $password])) {
                $request->session()->regenerate();
                return response()->json(['isLoggedIn' => true]);

            } else {
                // $request->session()->regenerate();
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

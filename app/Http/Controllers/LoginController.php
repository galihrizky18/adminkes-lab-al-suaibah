<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function login(){
        return Inertia::render("login/Login");
    }

    // public function loginValidation(Request $request)
    // {
    //     try {
    //         // Ambil data login dari request
    //         $dataLogin = $request->input('data');

    //         if (Auth::attempt(['username' => $dataLogin['username'], 'password' => $dataLogin['password']])) {
    //             // return response()->json(['isLoggedIn' => true]);
    //             // return redirect("/tes");
    //             return Inertia::location("/tes");
    //         } else {
    //             return response()->json(['isLoggedIn' => false]);
    //         }
    //     } catch (\Throwable $th) {
    //         // Handle other exceptions if needed
    //         return response()->json(['message' => 'Gagal'], 400);
    //     }
    // }

    public function loginValidation(Request $request)
    {
        try {
            // Ambil data login dari request
            $dataLogin = $request->input('data');

            if (Auth::attempt(['username' => $dataLogin['username'], 'password' => $dataLogin['password']])) {
                $request->session()->regenerate();
                $authUser = Auth::user();
                session([
                    'current_user'=>$authUser
                ]);
                $request->session()->regenerate();
                return response()->json(['isLoggedIn' => true]);
                
            } else {
                $request->session()->regenerate();
                return response()->json(['isLoggedIn' => false]);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }



    public function tesPage(){

        dd(session('current_user'));
    }





    public function logout(Request $request){
        $request->session()->regenerate();
        Auth::logout();
        // Menghapus semua data sesi
        Session::flush();

        // Menghapus semua cookie
        $cookies = $request->cookie();
        foreach ($cookies as $name => $value) {
            Cookie::queue(Cookie::forget($name));
        }
        return redirect('/login');
    }
}

<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApotekController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KIAController;
use App\Http\Controllers\LabController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\PoliAnakController;
use App\Http\Controllers\PoliGigiController;
use App\Http\Controllers\PoliUmumController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'dashbaord']);

// Login Page
Route::get('/login', [LoginController::class, 'login'])->name('login');

Route::get('/pendaftaran', [PendaftaranController::class, 'pagePendaftaran']);
Route::get('/pendaftaran/pasien-baru', [PendaftaranController::class, 'pagePasienBaru']);
Route::get('/pendaftaran/pasien-lama', [PendaftaranController::class, 'pagePasienLama']);

Route::get('/poli-umum', [PoliUmumController::class, 'dashboard'])->name('poli-umum');
Route::get('/poli-anak', [PoliAnakController::class, 'dashboard']);
Route::get('/poli-gigi', [PoliGigiController::class, 'dashboard']);
Route::get('/apotek', [ApotekController::class, 'dashboard']);
Route::get('/laboratorium', [LabController::class, 'dashboard']);
Route::get('/kia', [KIAController::class, 'dashboard']);

// Admin Page
Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('admin');
    Route::get('/patient', [AdminController::class, 'patientDashboardAdmin'])->name('admin');

    Route::prefix('master-menu')->group(function(){
        Route::get('/admin', [AdminController::class, 'dataAdmin'])->name('dataAdmin');
        Route::get('/dokter', [AdminController::class, 'dataDokter'])->name('dataDokter');
        Route::get('/rawat-jalan-umum-lansia', [AdminController::class, 'KRJPoliUmumLansia'])->name('KRJPoliUmumLansia');
        Route::get('/poli-gigi', [AdminController::class, 'dataPoliGigi'])->name('dataPoliGigi');
        Route::get('/laboratorium', [AdminController::class, 'dataLaboratorium'])->name('dataLaboratorium');
        Route::get('/farmasi', [AdminController::class, 'dataFarmasi'])->name('dataFarmasi');
    });

    // Add Data
    Route::prefix('add-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'addAdmin'])->name("addAdmin");
        Route::post('/dokters', [AdminController::class, 'addDokters'])->name("addDokters");
        Route::post('/umum-lansia', [AdminController::class, 'addKRJPoliUmumLansia'])->name("addKRJPoliUmumLansia");
    });

    // Edit Data
    Route::prefix('edit-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'editAdmin'])->name("editAdmin");
        Route::post('/dokter', [AdminController::class, 'editDokter'])->name("editDokter");
    });

    // Delete Data
    Route::prefix('delete-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'deleteAdmin'])->name("deleteAdmin");
        Route::post('/dokter', [AdminController::class, 'deleteDokter'])->name("deleteDokter");
        Route::post('/umum-lansia', [AdminController::class, 'deleteKRJPoliUmumLansia'])->name("deleteKRJPoliUmumLansia");
    });


   


    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
});


// Upload Data
Route::post('/pendaftaran/pasien-baru', [PendaftaranController::class, 'saveToDatabase']);
Route::post('/pendaftaran/pasien-lama/search', [PendaftaranController::class, 'searchPatientData']);

// Login Validation
Route::post('/login', [LoginController::class, 'loginValidation']);















 
Route::get('/cek', [LoginController::class, 'cekVerifikasi'])->name('cek');
Route::get('/tes', [LoginController::class, 'tesPage']);
Route::get('/pindah', [LoginController::class, 'pindah'])->name('pindah');


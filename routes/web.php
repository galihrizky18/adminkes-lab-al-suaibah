<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApotekController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DetailController;
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
// Login Validation
Route::post('/login', [LoginController::class, 'loginValidation']);



// Admin Page
Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('admin');
    Route::get('/patient', [AdminController::class, 'patientDashboardAdmin'])->name('patientDashboardAdmin');

    Route::prefix('master-menu')->group(function(){
        Route::get('/admin', [AdminController::class, 'dataAdmin'])->name('dataAdmin');
        Route::get('/dokter', [AdminController::class, 'dataDokter'])->name('dataDokter');
        Route::get('/jadwal-dokter', [AdminController::class, 'dataJadwalDokter'])->name('dataJadwalDokter');
        Route::get('/rawat-jalan-umum-lansia', [AdminController::class, 'KRJPoliUmumLansia'])->name('KRJPoliUmumLansia');
        Route::get('/poli-gigi', [AdminController::class, 'dataPoliGigi'])->name('dataPoliGigi');
        Route::get('/laboratorium', [AdminController::class, 'dataLaboratorium'])->name('dataLaboratorium');
        Route::get('/farmasi', [AdminController::class, 'dataFarmasi'])->name('dataFarmasi');
    });

    // Detail
    Route::prefix('detail')->group(function(){
        Route::match(['get', 'post'],'admin', [DetailController::class, 'detailAdmin']);
        Route::match(['get', 'post'],'dokter', [DetailController::class, 'detailDokter']);
        Route::match(['get', 'post'],'rawat-jalan-umum-lansia', [DetailController::class, 'detailKRJPoliUmumLansia']);
        Route::match(['get', 'post'],'poli-gigi', [DetailController::class, 'detailPoliGigi']);
        Route::match(['get', 'post'],'jadwal-dokter', [DetailController::class, 'detailJadwalDokter']);
        Route::match(['get', 'post'],'laboratorium', [DetailController::class, 'detailLab']);
    });

    // Add Data
    Route::prefix('add-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'addAdmin'])->name("addAdmin");
        Route::post('/dokters', [AdminController::class, 'addDokters'])->name("addDokters");
        Route::post('/umum-lansia', [AdminController::class, 'addKRJPoliUmumLansia'])->name("addKRJPoliUmumLansia");
        Route::post('/gigi', [AdminController::class, 'addKRJPoliGigi'])->name("addKRJPoliGigi");
        Route::post('/lab', [AdminController::class, 'addLab'])->name("addLab");
        Route::post('/jadwal-dokter', [AdminController::class, 'addJadwalDokter'])->name("addJadwalDokter");
    });

    // Edit Data
    Route::prefix('edit-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'editAdmin'])->name("editAdmin");
        Route::post('/dokter', [AdminController::class, 'editDokter'])->name("editDokter");
        Route::post('/umum-lansia', [AdminController::class, 'editKRJPoliUmumLansia'])->name("editKRJPoliUmumLansia");
        Route::post('/gigi', [AdminController::class, 'editKRJPoliGigi'])->name("editKRJPoliGigi");
        Route::post('/lab', [AdminController::class, 'editLab'])->name("editLab");
        Route::post('/jadwal-dokter', [AdminController::class, 'editJadwalDokter'])->name("editJadwalDokter");
    });

    // Delete Data
    Route::prefix('delete-data')->group(function (){
        Route::post('/admin', [AdminController::class, 'deleteAdmin'])->name("deleteAdmin");
        Route::post('/dokter', [AdminController::class, 'deleteDokter'])->name("deleteDokter");
        Route::post('/umum-lansia', [AdminController::class, 'deleteKRJPoliUmumLansia'])->name("deleteKRJPoliUmumLansia");
        Route::post('/gigi', [AdminController::class, 'deleteKRJPoliGigi'])->name("deleteKRJPoliGigi");
        Route::post('/lab', [AdminController::class, 'deleteLab'])->name("deleteLab");
        Route::post('/jadwal-dokter', [AdminController::class, 'deleteJadwalDokter'])->name("deleteJadwalDokter");
    });

    // Report Pasien Baru
    Route::prefix('report')->group(function (){
        Route::get('/pasien-baru', [AdminController::class, 'reportPasienBaru'])->name("reportPasienBaru");

        // Detail
        Route::prefix('detail')->group(function (){
            Route::match(['get', 'post'],'pasien-baru', [DetailController::class, 'detailPasienBaru']);
            
        });

        // Delete
        Route::prefix('delete-pasienBaru')->group(function (){
            Route::post('/deletePasienBaru', [AdminController::class, 'deletePasienBaru'])->name("deletePasienBaru");
            
        });

    });


   


    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
});

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================


// Public Page
// Upload Data
Route::post('/pendaftaran/pasien-baru', [PendaftaranController::class, 'saveToDatabase']);
Route::post('/pendaftaran/pasien-lama/search', [PendaftaranController::class, 'searchPatientData']);



Route::get('/pendaftaran', [PendaftaranController::class, 'pagePendaftaran']);
Route::get('/pendaftaran/pasien-baru', [PendaftaranController::class, 'pagePasienBaru']);
Route::get('/pendaftaran/pasien-lama', [PendaftaranController::class, 'pagePasienLama']);

Route::get('/poli-umum', [PoliUmumController::class, 'dashboard'])->name('poli-umum');
Route::get('/poli-anak', [PoliAnakController::class, 'dashboard']);
Route::get('/poli-gigi', [PoliGigiController::class, 'dashboard']);
Route::get('/apotek', [ApotekController::class, 'dashboard']);
Route::get('/laboratorium', [LabController::class, 'dashboard']);
Route::get('/kia', [KIAController::class, 'dashboard']);











 

Route::get('/tes', [LoginController::class, 'tesPage']);


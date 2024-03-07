<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PDFController extends Controller
{
    //

    public function LaporanDataUmumPasien(){
        $data = [
            'title'=>'Laporan Data Umum Pasien'
        ];

        return view("pdf/laporanDataUmumPasien",$data);
    }

    public function LaporanPoliGigi(){
        $data = [
            'title'=>'Laporan Data Poli Gigi'
        ];

        return view("pdf/laporanDataGigi",$data);
    }

    public function LaporanUmumLansia(){
        $data = [
            'title'=>'Laporan KRJ Umum Lansia'
        ];

        return view("pdf/laporanUmumLansia",$data);
    }





    public function tesRenderPDF(){
        $data = [
            'title'=>'Laporan KRJ Umum Lansia'
        ];
        $pdf = Pdf::loadView('pdf.laporanDataGigi',$data);
        return $pdf->download('invoice.pdf');
    }

}

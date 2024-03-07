<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Milon\Barcode\DNS2D;

class PDFController extends Controller
{
    //Generate Barocde
    public function generateBarcode(Request $request, $code){
        $barcode = new DNS2D();
        $barcodeData = $barcode->getBarcodePNG($code, 'C39');
        return response($barcodeData)->header('Content-Type', 'image/png');
    }

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

    public function createPDFPasienBaru($idReg){
       
        $dataReg = Registration::with('patient', 'layanan', 'dokters')->where('id_registration', $idReg)->first();

        $data = [
            'dataReg' => $dataReg
        ];

        $pdf = Pdf::loadView('pdf.createPDFPasienBaru',$data);
        return $pdf->download('Pendaftaran Online Klinik Al Suaibah Palembang.pdf');
       
    }





    public function tesRenderPDF(){
        $data = [
            'title'=>'Laporan KRJ Umum Lansia'
        ];
        $pdf = Pdf::loadView('pdf.laporanDataGigi',$data);
        return $pdf->download('invoice.pdf');
    }

}

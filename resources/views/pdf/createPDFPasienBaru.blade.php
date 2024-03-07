<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laboratorium Adminkes Al-Suaibah Palembang</title>

    <style>
        body {
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            height: auto;
        }

        .mx-7 {
            margin-left: 1.75rem;
            margin-right: 1.75rem;
        }

        .my-7 {
            margin-top: 1rem;
            margin-bottom: 1.75rem;
        }

        .font-open {
            font-family: "Open Sans", sans-serif;
        }

        .text-lg {
            font-size: 1.125rem;
        }

        .font-bold {
            font-weight: 700;
        }

        .text-center {
            text-align: center;
        }

        .border-b {
            border-bottom: 1px solid #000;
        }

        .pb-2 {
            padding-bottom: 0.5rem;
        }

        .grid {
            display: grid;
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .text-sm {
            font-size: 0.875rem;
        }

        .mt-3 {
            margin-top: 0.75rem;
        }

        .px-5 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .display-flex {
            display: flexbox
        }

        .flex-col {
            flex-direction: column;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .text-xs {
            font-size: 0.75rem;
        }

        .list-decimal {
            list-style-type: decimal;
        }

        .widthTableColum {
            width: 150px;
        }

        .w-full {
            width: 100%;
        }

        .py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }
    </style>

</head>

<body class="font-sans antialiased bg-[#F5F7FA] h-auto">
    <div class="mx-7 my-7 font-open border border-gray-300">
       
        <div class="mx-7 my-7 font-open">
            <h1 class="text-lg font-bold text-center border-b border-black pb-2">BUKTI PENDAFTARAN ONLINE PASIEN BARU KLINIK AL SU'AIBAH PALEMBANG</h1>

            <div class="grid grid-cols-2 text-sm mt-3">
                <div class="px-5 py-3 display-flex flex-col gap-3 border">
                    <div class="text-center font-bold">Tunjukan Bukti Pendaftaran Berikut ke Petugas Klinik Al Su'aibah Palembang</div>

                    <p class="w-full text-center text-xs">Anda mendaftar di <span class="font-bold">Klinik Al Su'aibah Palembang</span> tanggal <span class="font-bold">{{ $dataReg->registration_date }}</span>. Pelayanan klinik dimulai <span class="font-bold">Pukul 08:00 WIB</span>. Dimohon untuk datang paling lambat 30 menit sebelum waktu pelayanan. Terima Kasih</p>
                    <div>
                        <h2 class="text-sm font-bold">Persyaratan yang harus dilengkapi</h2>
                        <ol class="px-5 text-sm mt-1 list-decimal">
                            <li> Rujukan Asli/Surat Kontrol yang masih berlaku</li>
                            <li> Menunjukan kartu JKN-KIS / BPJS / Askes Asli / KIS Digital</li>
                            <li>Menunjukan kartu identitas ( KK / KTP / SIM)</li>
                            <li>Bagi perserta anak menunjukan KK/KTP orang tua</li>
                        </ol>
                        <p class="text-xs mt-3 font-bold">*Catatan : apabila ada ketidaksuaian antara kartu BPJS dengan identitas pasien agar konfirmasi dengan petugas BPJS</p>
                    </div>
                </div>
                <div class=" py-3 display-flex flex-col gap-5 border">
                    <div class="display-flex flex-col gap-1">
                        <div class="text-center font-bold border-b border-black pb-2">Data Pendaftar</div>
                        <div>
                            <table class="w-full display-flex">
                                <tr>
                                    <td class="py-1 widthTableColum">No Rekam Medik</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ preg_replace('/[^0-9]/', '', $dataReg->no_rekam_medik)  }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">NIK</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->nik }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Nama</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->name }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Jenis Kelamin</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">
                                        @if($dataReg->patient->gender == 'male')
                                            Laki - Laki
                                        @elseif($dataReg->patient->gender == 'female')
                                            Perempuan
                                        @else
                                            Tidak Diketahui
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Tanggal Lahir</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->birth }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Provinsi</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->province }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Kota</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->city }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Alamat Lengkap</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->patient->address }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="display-flex flex-col gap-1" style="margin: 15px 0">
                        <div class="text-center font-bold border-b border-black pb-2">Data Pemeriksaan</div>
                        <div>
                            <table class="w-full display-flex">
                                <tr>
                                    <td class="py-1 widthTableColum">Poli Tujuan</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->layanan->layanan }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Tgl Pemeriksaan</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->registration_date }}</td>
                                </tr>
                                <tr>
                                    <td class="py-1 widthTableColum">Dokter</td>
                                    <td>:</td>
                                    <td class="py-1 font-bold">{{ $dataReg->dokters->nama_dokter }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>


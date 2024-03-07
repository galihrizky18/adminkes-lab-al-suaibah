<x-header>
    @slot('title')
        {{ $title }}
    @endslot
</x-header>

<div class="mx-10 my-7 px-5 py-5 font-open h-full border border-black">

    {{-- Judul --}}
    <h1 class="text-2xl font-bold text-center">LAPORAN DATA UMUM PASIEN</h1>

    {{-- Waktu --}}
    <div class="flex flex-row mt-3 text-sm justify-between pb-2 border-b border-black">
        {{-- tanggal --}}
        <div class="font-bold">Tanggal : <span class="font-normal">18 Februari 2024</span></div>

        {{-- Jam --}}
        <div class="font-bold">Jam : <span class="font-normal">19:00</span></div>
    </div>

    {{-- A. Identitas Pasien --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">IDENTITAS PASIEN</h1>
            <p class="text-xs">(Sesuai dengan kartu pengenal pasien yang masih berlaku; KTP/KK/SIM/Kartu Pelajar/dsb)</p>
        </div>

        {{-- isi --}}
        <div class="mt-1 text-sm">
            <table class="w-full">
                <tr>
                    <td width="165px">Nama</td>
                    <td width="10px">:</td>
                    <td>Galih</td>
                </tr>
                <tr>
                    <td width="165px">Jenis Kelamin</td>
                    <td width="1px">:</td>
                    <td>Laki - Laki</td>
                </tr>
                <tr>
                    <td width="165px">Tempat / Tanggal Lahir</td>
                    <td width="1px">:</td>
                    <td>Lubuk Linggau , 19 Februari 2002</td>
                </tr>
                <tr>
                    <td width="165px">Agama</td>
                    <td width="1px">:</td>
                    <td>Islam</td>
                </tr>
                <tr>
                    <td width="165px">Suku</td>
                    <td width="1px">:</td>
                    <td>Rakyat</td>
                </tr>
                <tr>
                    <td width="165px">Bahasa</td>
                    <td width="1px">:</td>
                    <td>Indonesia</td>
                </tr>
                <tr>
                    <td width="165px">Pendidikan</td>
                    <td width="1px">:</td>
                    <td>Sarjana</td>
                </tr>
                <tr>
                    <td width="165px">Pekerjaan</td>
                    <td width="1px">:</td>
                    <td>Software Engineer</td>
                </tr>
                <tr>
                    <td width="165px">Alamat</td>
                    <td width="1px">:</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum corporis minima consectetur
                        magnam fugit debitis reiciendis optio cum cupiditate? </td>
                </tr>
                <tr>
                    <td width="165px">Status Perkawinan</td>
                    <td width="1px">:</td>
                    <td>Kawin</td>
                </tr>
            </table>
        </div>
    </div>



</div>

<x-footer>

</x-footer>

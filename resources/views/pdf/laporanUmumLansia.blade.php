<x-header>
    @slot('title')
        {{ $title }}
    @endslot
</x-header>

<div class="mx-10 my-7 px-5 py-5 font-open h-full border border-black">

    {{-- Judul --}}
    <h1 class="text-2xl font-bold text-center">LAPORAN RAWAT JALAN UMUM DAN LANSIA</h1>

    {{-- Detail Information --}}
    <div class="flex flex-row mt-3 text-sm justify-between pb-1 border-b border-black">
        <table>
            <tr>
                <td width="150px" class="font-bold">Tanggal</td>
                <td width="10px">:</td>
                <td>18 Februari 2024</td>
            </tr>
            <tr>
                <td width="150px" class="font-bold">Dokter Pemeriksa</td>
                <td width="10px">:</td>
                <td>Dr. Galih Rizky</td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="150px" class="font-bold">Tanggal</td>
                <td width="10px">:</td>
                <td>18 Februari 2024</td>
            </tr>
            <tr>
                <td width="150px" class="font-bold">Penanggung Jawab</td>
                <td width="10px">:</td>
                <td> Rizky</td>
            </tr>
        </table>


    </div>


    {{-- A. Identitas Pasien --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">IDENTITAS PASIEN</h1>
            <p class="text-xs">(Sesuai dengan kartu pengenal pasien yang masih berlaku; KTP/KK/SIM/Kartu Pelajar/dsb)
            </p>
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
                    <td width="165px"> Tanggal Lahir</td>
                    <td width="1px">:</td>
                    <td>19 Februari 2002</td>
                </tr>

            </table>
        </div>
    </div>

    {{-- B. Anamnesa (S) --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">ANAMNESSA (S)</h1>
        </div>

        {{-- isi --}}
        <div class="mt-1 text-sm">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, cupiditate aliquam numquam dicta vel
                ad, nesciunt optio, doloribus minus obcaecati sapiente soluta ratione quibusdam sed saepe molestias amet
                corrupti! Aliquid magni voluptatem magnam accusamus voluptas asperiores mollitia sed non eum!</div>
        </div>
    </div>

    {{-- C. Pemeriksaan (O) --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">PEMERIKSAAN (O)</h1>
        </div>

        {{-- isi --}}
        <div class="mt-1 text-sm">
            <table class="w-full">
                <tr>
                    <td width="165px">Berat Badan</td>
                    <td width="10px">:</td>
                    <td>23 Kg</td>
                </tr>
                <tr>
                    <td width="165px">Tinggi Badan</td>
                    <td width="1px">:</td>
                    <td>165 Cm</td>
                </tr>
                <tr>
                    <td width="165px"> Tekanan Darah</td>
                    <td width="1px">:</td>
                    <td>130 / 90</td>
                </tr>
                <tr>
                    <td width="165px"> Nadi</td>
                    <td width="1px">:</td>
                    <td>130</td>
                </tr>
                <tr>
                    <td width="165px"> RR</td>
                    <td width="1px">:</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td width="165px"> Skala Nyeri</td>
                    <td width="1px">:</td>
                    <td>34</td>
                </tr>
                <tr>
                    <td width="165px"> intra Oral</td>
                    <td width="1px">:</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam fugiat possimus,
                        assumenda quam esse aperiam aspernatur quas facere deleniti?</td>
                </tr>

            </table>
        </div>
    </div>

    {{-- D. Anamnesa (S) --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">DIAGNOSA (A)</h1>
        </div>

        {{-- isi --}}
        <div class="mt-1 text-sm">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, cupiditate aliquam numquam dicta vel
                ad, nesciunt optio, doloribus minus obcaecati sapiente soluta ratione quibusdam sed saepe molestias amet
                corrupti! Aliquid magni voluptatem magnam accusamus voluptas asperiores mollitia sed non eum!</div>
        </div>
    </div>

    {{-- E. Terapi (P) --}}
    <div class="mt-3">
        {{-- Sub Judul --}}
        <div>
            <h1 class="font-bold text-xl">TERAPI (P)</h1>
        </div>

        {{-- isi --}}
        <div class="mt-1 text-sm">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, cupiditate aliquam numquam dicta vel
                ad, nesciunt optio, doloribus minus obcaecati sapiente soluta ratione quibusdam sed saepe molestias amet
                corrupti! Aliquid magni voluptatem magnam accusamus voluptas asperiores mollitia sed non eum!</div>
        </div>
    </div>



</div>

<x-footer>

</x-footer>

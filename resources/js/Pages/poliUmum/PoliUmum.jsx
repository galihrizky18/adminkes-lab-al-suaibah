import React from "react";
import { MantineProvider } from "@mantine/core";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/dashboard/Footer";

import GambarUtama from "../../../../public/asset/image/dokter-aja.jpg"
import GambarKedua from "../../../../public/asset/image/gmbarruanganpoliumum.jpeg"
import GambarFasilitas from "../../../../public/asset/icon/iconnew/fasilitaskes.png"
import GambarUser from "../../../../public/asset/icon/iconnew/userdokter.png"
import GambarLogors from "../../../../public/asset/icon/iconnew/logoRS.png"
import Icondokter1 from "../../../../public/asset/icon/iconnew/obat.png"
import IconLab from "../../../../public/asset/icon/iconnew/logolab.png"
import Iconkonseling from "../../../../public/asset/icon/iconnew/logokonseling.png"
import Iconkesehatan from "../../../../public/asset/icon/iconnew/logokesehatan.png"
import IconVaksinasi from "../../../../public/asset/icon/iconnew/logovaksinasi.png"
import IconDokter2 from "../../../../public/asset/icon/iconnew/dokterlogo.png"
import GambarLab from "../../../../public/asset/image/labo2.jpeg"
import GambarVaksin from "../../../../public/asset/image/vaksin.jpg"
import GambarKonsul from "../../../../public/asset/image/konsul.jpg"





const PoliUmum = () => {
    return (
        <MantineProvider>
            <Head title="Poli Umum" />

            {/* Navbar */}
            <Navbar />

            {/* Body */}
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
                {/* Title */}
                <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Poli Umum
                </div>

                {/* gambar utama */}
                <div className="sm:w-1/2 sm:h-1/2 xl:w-full xl:h-full mt-8">
                    <img src={GambarUtama} alt="" className="xl:w-full xl:h-full sm:w-1/2 sm:h-1/2" />
                </div>

                {/* body */}
                <div class="flex flex-col sm:flex-row md:flex-row xl:flex-row w-full max-w-screen-lg p-2 mt-6 bg-green-200 mx-auto">
                    <div class="sm:w-1/2 md:w-1/2 xl:w-xl h-auto">
                        <img src={GambarKedua} alt="" class="w-full h-full"/>
                    </div>
                    <div class="sm:w-1/2 md:w-1/2 xl:w-xl h-auto p-4">
                        <p class="text-base sm:text-lg md:text-lg xl:text-lg text-justify font-sans-serif">
                            Ruang Umum merupakan salah satu layanan yang ada di klinik Stikes AL-Suaibah yang memberikan pelayanan kedokteran berupa pemeriksaan kesehatan, pengobatan dan penyuluhan kepada pasien atau masyarakat agar tidak terjadi penularan dan komplikasi penyakit, serta meningkatkan pengetahuan dan kesadaran masyarakat dalam bidang kesehatan. Pelayanan kesehatan dilakukan oleh dokter dan perawat yang memiliki sertifikat dan kompetensi yang dibutuhkan untuk pelayanan kesehatan primer. Dalam menjalankan tugasnya, poli umum terintegrasi dengan seluruh unit pelayanan lainnya (poli gigi, poli Anak, Poli KIA, Laboratorium, Apotik, dll).
                        </p>
                    </div>

                </div>

                {/* alasan */}
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-6 mt-5 sm:w-full sm:h-full xl:w-full xl:h-[300px] bg-gray-400 rounded-xl sm:justify-center sm:items-center xl:justify-center xl:items-center">
                    <div class="text-white p-4 text-center">
                        <span class="text-sm sm:text-base md:text-base xl:text-2xl">Mengapa memilih Ruang Umum klinik AS-Suaibah ?</span>
                        <span class="mt-2 text-sm sm:text-base md:text-base xl:text-base">Pelayanan berkualitas dengan dokter dokter profesional</span>
                    </div>
                    <div class="flex justify-center items-center flex-col p-4 max-w-[200px] sm:max-w-none sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[250px] xl:w-[270px] bg-green-400 rounded-xl hover:scale-105 transition-all duration-200 mx-auto">
                        <img src={GambarFasilitas} alt="" class="w-[80px] h-[90px] sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[120px] xl:w-[100px]" />
                        <span class="mt-4 text-sm sm:text-base md:text-base xl:text-base text-center">Tenaga Kesehatan Berkualitas</span>
                    </div>
                    <div class="flex justify-center items-center flex-col p-4 max-w-[200px] sm:max-w-none sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[250px] xl:w-[270px] bg-green-400 rounded-xl hover:scale-105 transition-all duration-200  mx-auto">
                        <img src={GambarUser} alt="" class="w-[80px] h-[90px] sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[120px] xl:w-[100px]" />
                        <span class="mt-4 text-sm sm:text-base md:text-base xl:text-base text-center">Pelayanan Dokter Profesional </span>
                    </div>
                    <div class="flex justify-center items-center flex-col p-4 max-w-[200px] sm:max-w-none sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[250px] xl:w-[270px] bg-green-400 rounded-xl hover:scale-105 transition-all duration-200 mx-auto">
                        <img src={GambarLogors} alt="" class="w-[80px] h-[100px] sm:w-[40px] sm:h-[60px] md:w-[100px] md:h-[100px] xl:h-[120px] xl:w-[120px]" />
                        <span class="mt-4 text-sm sm:text-base md:text-base xl:text-base text-center">Fasilitas Kesehatan Lengkap</span>
                    </div>
                </div>

                {/* layanan */}
                <div className="w-[200px] h-[50px] flex justify-center items-center mt-8 border-b-2">
                    <h2 className="text-[22px] font-sans-serif">Layanan</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={IconDokter2} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Konsultasi Dokter Umum</span>
                    </div>
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={IconLab} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Tes Laboratorium Sederhana</span>
                    </div>
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={Iconkonseling} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Konseling Kesehatan</span>
                    </div>
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={Iconkesehatan} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Pemeriksaan Kesehatan Berkala</span>
                    </div>
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={IconVaksinasi} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Vaksinasi</span>
                    </div>
                    <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[265px] flex flex-col rounded-xl bg-green-300 items-center hover:scale-105 transition-all duration-200">
                        <img src={Icondokter1} alt="" className="w-[50%] h-[50%] mt-2 xl:w-[60%] xl:h-[60%]"/>
                        <span className="text-[16px] text-center mt-6 font-sans-serif">Pengobatan Umum</span>
                    </div>
                </div>

                {/* galeri */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6">
                    <div className="flex flex-col hover:scale-105 transition-all duration-200">
                        <img src={GambarLab} alt="" className="sm:w-[30%] sm:h-[45%] md:w-[55%] md:h-[65%] xl:w-[400px] xl:h-[350px]" />
                        <span className="text-[16px] font-sans-serif mx-auto mt-2">Labolatorium</span>
                    </div>
                    <div className="flex flex-col hover:scale-105 transition-all duration-200">
                        <img src={GambarKonsul} alt="" className="sm:w-[30%] sm:h-[45%] md:w-[55%] md:h-[65%] xl:w-[400px] xl:h-[350px]"/>
                        <span className="text-[16px] font-sans-serif mx-auto mt-2">Kosultasi Kesehatan Pasien</span>
                    </div>
                    <div className="flex flex-col hover:scale-105 transition-all duration-200">
                        <img src={GambarVaksin} alt="" className="sm:w-[30%] sm:h-[45%] md:w-[55%] md:h-[65%] xl:w-[400px] xl:h-[350px]"/>
                        <span className="text-[16px] font-sans-serif mx-auto mt-2">Vaksinasi</span>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default PoliUmum;

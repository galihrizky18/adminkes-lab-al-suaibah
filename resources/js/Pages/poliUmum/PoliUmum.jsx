import React from "react";
import { MantineProvider } from "@mantine/core";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/dashboard/Footer";

import GambarUtama from "../../../../public/asset/image/gambarutamapoliumum.jpg"
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
                <div className="w-full h-[450px] mt-8 ">
                    <img src={GambarUtama} alt="" className="w-full h-[450px] " />
                </div>

                {/* body */}
                <div className="flex flex-row w-[1020px] h-[360px] p-2 mt-6 border border-black bg-green-200">
                    <div className="w-[550px] h-[340px]">
                        <img src={GambarKedua} alt="" className="w-[100%] h-[100%] "/>
                    </div>
                    <div className="w-[470px] h-[380px] p-4">
                        <p className="text-[16px] text-justify font-sans-serif">
                            Ruang Umum merupakan salah satu layanan yang ada di klinik Stikes AL-Suaibah yang memberikan pelayanan kedokteran berupa pemeriksaan kesehatan,
                            pengobatan dan penyuluhan kepada pasien atau masyarakat agar tidak terjadi penularan dan komplikasi penyakit,
                            serta meningkatkan pengetahuan dan kesadaran masyarakat dalam bidang kesehatan.
                            Pelayanan kesehatan dilakukan oleh dokter dan perawat yang memiliki sertifikat dan kompetensi yang dibutuhkan untuk pelayanan kesehatan primer.
                            Dalam menjalankan tugasnya, poli umum terintegrasi dengan seluruh unit pelayanan lainnya (poli gigi, poli Anak, Poli KIA, Laboratorium, Apotik, dll).
                        </p>
                    </div>
                </div>

                {/* alasan */}
                <div className="w-full h-[340px] p-5 flex flex-row justify-center mt-8 bg-gray-400 rounded-xl hover:scale-105 transition all duration-200">
                    <div className="w-[320px] h-[298px] p-10">
                        <p className="text-[28px] text-white font-sans-serif">Mengapa memilih Ruang Umum klinik AS-Suaibah ?</p>
                        <p className="text-[16px] text-white font-sans-serif mt-6">Pelayanan berkualitas dengan dokter dokter profesional</p>
                    </div>
                    <div className="w-[220px] h-[298px] p-4 flex flex-col items-center bg-green-400 rounded-xl ml-14 hover:scale-105 transition all duration-200">
                        <img src={GambarFasilitas} alt="" className="w-[80px] h-[100px] mt-4 "/>
                        <p className="text-[16px] text-center font-sans-serif mt-12 ">Tenaga Kesehatan Berkualitas</p>
                    </div>
                    <div className="w-[220px] h-[298px] p-4 flex flex-col items-center bg-green-400 rounded-xl ml-14 hover:scale-105 transition all duration-200">
                        <img src={GambarUser} alt="" className="w-[80px] h-[100px] mt-4" />
                        <p className="text-[16px] text-center font-sans-serif mt-12">Pelayanan Profesional</p>
                    </div>
                    <div className="w-[220px] h-[298px] p-4 flex flex-col items-center bg-green-400 rounded-xl ml-14 hover:scale-105 transition all duration-200">
                        <img src={GambarLogors} alt="" className="w-[120px] h-[110px] mt-2"/>
                        <p className="text-[16px] text-center font-sans-serif mt-12">Fasilitas Kesehatan Lengkap</p>
                    </div>
                </div>

                {/* layanan */}
                <div className="w-[200px] h-[50px] flex justify-center items-center mt-8 border-b-2 border-black">
                    <h2 className="text-[22px] font-sans-serif">Layanan</h2>
                </div>
                <div className="w-full h-[600px] flex flex-col mt-6 ">
                    {/* atas */}
                    <div className="w-full h-[280px] flex flex-row justify-center ">
                        <div className="w-[200px] h-[265px] flex flex-col rounded-xl bg-green-300 mr-8 items-center hover:scale-105 transition all duration-200">
                            <img src={IconDokter2} alt="" className="w-[60%] h-[60%] mt-2 " />
                            <h2 className="text-[16px] text-center mt-6 font-sans-serif">Kosultasi Dokter Umum</h2>
                        </div>
                        <div className="w-[200px] h-[265px] flex flex-col items-center rounded-xl bg-green-300 hover:scale-105 transition all duration-200 ">
                            <img src={IconLab} alt="" className="w-[60%] h-[63%] " />
                            <h2 className="text-[16px] text-center mt-6 font-sans-serif">Tes Laboratorium Sederhana</h2>
                        </div>
                        <div className="w-[200px] h-[265px] flex flex-col items-center rounded-xl ml-8 bg-green-300 hover:scale-105 transition all duration-200">
                            <img src={Iconkonseling} alt="" className="w-[60%] h-[63%] " />
                            <h2 className="text-[16px] text-center mt-6 font-sans-serif">Konseling Kesehatan</h2>
                        </div>
                    </div>
                    {/* bawah */}
                    <div className="w-full h-[280px] flex flex-row justify-center mt-10 ">
                        <div className="w-[200px] h-[265px] flex flex-col items-center rounded-xl mr-8 bg-green-300 hover:scale-105 transition all duration-200">
                            <img src={Iconkesehatan} alt="" className="w-[84%] h-[64%] " />
                            <h2 className="text-[16px] text-center font-sans-serif">Pemeriksaan Kesehatan Berkala</h2>
                        </div>
                        <div className="w-[200px] h-[265px] flex flex-col items-center rounded-xl bg-green-300 hover:scale-105 transition all duration-200">
                            <img src={IconVaksinasi} alt="" className="w-[45%] h-[54%] mt-2" />
                            <h2 className="text-[16px] text-center mt-6 font-sans-serif">Vaksinasi</h2>
                        </div>
                        <div className="w-[200px] h-[265px] flex flex-col items-center rounded-xl ml-8 bg-green-300 hover:scale-105 transition all duration-200">
                            <img src={Icondokter1} alt="" className="w-[46%] h-[48%] mt-4 " />
                            <h2 className="text-[16px] text-center mt-8 font-sans-serif">Pengobatan Umum</h2>
                        </div>
                    </div>
                </div>

                {/* galeri */}
                <div className="w-[110px] flex flex-row justify-center mt-8 border-b-2 border-black">
                    <h2 className="text-[22px] font-sans-serif">Galeri</h2>
                </div>
                <div className="w-full h-[350px] flex flex-row justify-center mt-4 ">
                    <div className="w-[350px] flex flex-col mr-8 hover:scale-105 transition all duration-200">
                        <img src={GambarLab} alt="" className="w-[100%] h-[90%]"/>
                        <h2 className="text-[16px] font-sans-serif mx-auto mt-2">Labolatorium</h2>
                    </div>
                    <div className="w-[350px] flex flex-col hover:scale-105 transition all duration-200">
                        <img src={GambarKonsul} alt="" className="w-[100%] h-[90%]" />
                        <h2 className="text-[16px] font-sans-serif mx-auto mt-2">Kosultasi Kesehatan Pasien</h2>
                    </div>
                    <div className="w-[350px] flex flex-col ml-8 hover:scale-105 transition all duration-200">
                        <img src={GambarVaksin} alt="" className="w-[100%] h-[90%]" />
                        <h2 className="text-[16px] font-sans-serif mx-auto mt-2">Vaksinasi</h2>
                    </div>
                </div>
            </div>

            {/* Blank */}
            <div className="h-[50px] bg-[#F5F7FA]"></div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default PoliUmum;

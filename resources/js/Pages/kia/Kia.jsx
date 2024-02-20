import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { MantineProvider } from "@mantine/core";
import Footer from "@/Components/dashboard/Footer";

import Fotoutama from "../../../../public/asset/image/foto depan kia.jpeg";
import iconsenam from "../../../../public/asset/icon/kia/senam.png";
import iconbabyspa from "../../../../public/asset/icon/kia/spa.png";
import iconpijatbayi from "../../../../public/asset/icon/kia/pijat.png";
import iconlaktasi from "../../../../public/asset/icon/kia/laktasi.png";
import iconkehamilan from "../../../../public/asset/icon/kia/iconhamil.png";
import galerilaktasi from "../../../../public/asset/image/galerikia/laktasi2.jpg";
import galerispa from "../../../../public/asset/image/galerikia/galerispabayi.jpg";
import galeripijat from "../../../../public/asset/image/pijatbayinew.jpg";
import galerisenamhamil from "../../../../public/asset/image/senamhamilnew.jpg";
import fotoklinik from "../../../../public/asset/image/dashboard.png";
import lokasi from "../../../../public/asset/image/galerikia/lokasi.jpeg";
import mahasiswakes from "../../../../public/asset/image/galerikia/suster.jpg";



const Kia = () => {
    return (
        <MantineProvider>
            <Head title="KIA" />

            {/* Navbar */}
            <Navbar />

            {/* Body */}
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
                {/* Title */}
                <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Kesehatan Ibu dan Anak
                </div>

                {/* foto utama */}
                <div className="w-full xl:h-[480px] sm:h-[200px] mt-8 ">
                    <img src={Fotoutama} alt="" className="xl:w-[100%] xl:h-[100%] sm:w-[100%] sm:h-[100%] "/>
                </div>

                <div className="w-[360px] h-[50px] flex justify-center items-center  mt-[10px]">
                    <h2 className="text-[22px] text-center font-sans-serif sm:text-sm md:text-base xl:text-lg">Layanan RU KIA Stikes AL-Suaibah</h2>
                </div>

                {/* body */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-5">
                    <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
                        <img src={iconpijatbayi} alt="" className="object-cover w-full h-full sm:w-full sm:h-[70px] xl:w-[190px] xl:h-[150px]" />
                        <span className="text-white">Pijat Bayi</span>
                    </div>
                    <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
                        <img src={iconlaktasi} alt="" className="object-cover w-full h-full sm:w-full sm:h-[70px] xl:w-[170px] xl:h-[140px]" />
                        <span className="text-white">Laktasi</span>
                    </div>
                    <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
                        <img src={iconsenam} alt="" className="object-cover w-full h-full sm:w-full sm:h-[30px] xl:w-[130px] xl:h-[130px]" />
                        <span className="text-white">Senam Hamil</span>
                    </div>
                    <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
                        <img src={iconkehamilan} alt="" className="object-cover w-full h-full sm:w-full sm:h-[70px] xl:w-[170px] xl:h-[140px]" />
                        <span className="text-white">dgffhgj</span>
                    </div>
                    <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
                        <img src={iconlaktasi} alt="" className="object-cover w-full h-full sm:w-full sm:h-[30px] xl:w-[130px] xl:h-[130px]" />
                        <span className="text-white">sdhshdjs</span>
                    </div>
                </div>

                {/* galeri */}
                <div className="flex w-[100px] justify-center items-center mx-auto mt-8 border-b-2 border-black ">
                    <h2 className="text-[22px]">Galeri</h2>
                </div> 
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2  gap-7">
                    {/* gambar 1 */}
                    <div className="w-full h-full  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={galerilaktasi} alt="" className="w-full h-full rounded-xl" />
                        <div className="flex flex-col items-center">
                            <span className="text-center">Laktasi</span>
                        </div>
                    </div>
                    <div className="w-full h-full  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={galerispa} alt="" className="w-full h-full rounded-xl" />
                        <div className="flex flex-col items-center">
                            <span className="text-center">Spa Bayi</span>
                        </div>
                    </div>
                    {/* gambar 2 */}
                    <div className="w-full h-full  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={galerisenamhamil} alt="" className="w-full h-full rounded-xl" />
                        <div className="flex flex-col items-center">
                            <span className="text-center">Senam ibu Hamil</span>
                        </div>
                    </div>
                    <div className="w-full h-full  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]x]">
                        <img src={galeripijat} alt="" className="w-full h-full rounded-xl" />
                        <div className="flex flex-col items-center">
                            <span className="text-center">Pijat Bayi</span>
                        </div>
                    </div>
                </div>
                
                {/* penutup */}
                <div className="bg-green-300 w-full h-full  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-10 justify-center  ">
                    <div className="xl:w-auto xl:h-auto sm:max-w-full sm:max-h-full px-5 py-5 ">
                        <img src={fotoklinik} alt="" className=" rounded-xl "/>
                    </div>
                    <div className="bg-green-300 py-5 px-5">
                        <div className="bg-blue-200 rounded-lg ">
                            <span className="text-[20px] flex justify-center mt-1">Alamat Klinik</span>
                        </div>
                        <div className="mt-3">
                            <span className="text 14px font-sans-serif  text-black">Jl. Suka Bangun II No.1451, Suka Bangun, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961> </span>
                        </div>
                        <div className="mt-1 sm:px-0 xl:px-[50px] w-full h-full">
                            <img src={lokasi} alt="" className="xl:w-[500px] xl:h-[250px] sm:w-[50px] sm:h-[50px] mt-4 rounded-xl"/>
                        </div>
                    </div>
                </div>

                {/* about us */}
                <div className="w-full xl:h-[200px]  bg-gray-400 rounded-xl sm:h-[250px]">
                    <div className=" flex mx-auto justify-center items-center mt-2">
                        <h2 className="text-[32px] font-sans-serif ">About us</h2>
                    </div>
                    <div className="flex ml-2">
                    <p className="text-[18px] font-sans-serif mt-2 "> 
                        RU KIA (Ruang Umum Ibu dan Anak) merupakan salah satu layanan pada klinik STIKES Al-Suaibah yang 
                        menyediakan layanan kesehatan khusus untuk ibu hamil, pasien persalinan, dan anak-anak. 
                        RU KIA juga memberikan pemeriksaan rutin, imunisasi, dan Senam untuk ibu hamil, Pijat untuk bayi dan Spa khusus bayi.
                        Kerja sama tim medis yang terkoordinasi memastikan perawatan holistik dan komprehensif.
                    </p>
                    </div>
                </div>
            </div>
                
            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default Kia;

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
import galeripijat from "../../../../public/asset/image/galerikia/galeripijatbayi.jpg";
import galerisenamhamil from "../../../../public/asset/image/galerikia/galerisenamhamil.jpg";
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
                <div className="w-full h-[480px] mt-8 ">
                    <img src={Fotoutama} alt="" className="w-[100%] h-[100%] "/>
                </div>

                {/* body */}
                <div className="flex flex-col w-full h-[280px] bg-white-100 mt-8">
                    <div className="w-full">
                        <div className="w-[360px] h-[50px] flex justify-center items-center mx-auto border-b-2 border-black">
                            <h2 className="text-[22px] text-center font-sans-serif">Layanan RU KIA Stikes AL-Suaibah</h2>
                        </div>
                        <div className="w-[900px] h-[230px] flex flex-row bg-white-100 p-6 gap-12 mx-auto items-center">
                            <div className="flex flex-col items-center w-[160px] h-[200px] bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200"> 
                                <img src={iconsenam} alt="" className="w-[120px] mt-6"/>
                                <h2 className="text-[16px] font-sans-serif mt-7">Senam hamil</h2>
                            </div>
                            <div className="flex flex-col items-center w-[160px] h-[200px] bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200"> 
                                <img src={iconbabyspa} alt="" className="w-[120px] h-[100px] mt-6"/>
                                <h2 className="text-[16px] font-sans-serif mt-4">Baby Spa</h2>
                            </div>
                            <div className="flex flex-col items-center w-[160px] h-[200px] bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200">
                                <img src={iconpijatbayi} alt="" className="w-[120px] mt-7"/>
                                <h2 className="text-[16px] font-sans-serif mt-8">Pijat Bayi</h2>
                            </div>
                            <div className="flex flex-col items-center w-[160px] h-[200px] bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200"> 
                                <img src={iconlaktasi} alt="" className="w-[120px] mt-6" />
                                <h2 className="text-[16px] font-sans-serif mt-6">Laktasi</h2>
                            </div>
                            <div className="flex flex-col items-center w-[160px] h-[200px] bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200"> 
                                <img src={iconkehamilan} alt="" className="w-[90px] mt-6" />
                                <h2 className="text-[16px] font-sans-serif mt-7">Cek Kehamilan</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* galeri */}
                <div className="flex w-[100px] justify-center items-center mx-auto mt-8 items-center border-b-2 border-black ">
                    <h2 className="text-[22px]">Galeri</h2>
                </div> 
                <div className="flex flex-col mx-auto mt-4"> 
                    <div className="flex flex row">
                        <div className="flex flex-col items-center w-[360px] h-[320px] hover:scale-105 transition all duration 200"> 
                            <img src={galerilaktasi} alt="" className="w-[310px] h-[286px]"/>
                            <h2 className="text-[16px] font-sans-serif mt-2">Laktasi</h2>
                        </div>
                        <div className="flex flex-col items-center w-[360px] h-[320px] hover:scale-105 transition all duration 200"> 
                            <img src={galerispa} alt="" className="w-[300px] h-[310px]"/>
                            <h2 className="text-[16px] font-sans-serif mt-2">Spa Untuk Bayi</h2>
                        </div>
                    </div>
                    <div className="flex flex-row mt-12">
                        <div className="flex flex-col items-center w-[360px] h-[320px] hover:scale-105 transition all duration 200"> 
                            <img src={galerisenamhamil} alt="" className="w-[310px] h-[270px]"/>
                            <h2 className="text-[16px] font-sans-serif mt-2">Senam Hamil</h2>
                        </div>
                        <div className="flex flex-col items-center w-[360px] h-[320px] hover:scale-105 transition all duration 200"> 
                            <img src={galeripijat} alt="" className="w-[310px] h-[270px]"/>
                            <h2 className="text-[16px] font-sans-serif mt-2">Pijat Bayi</h2>
                        </div>
                    </div>
                </div>

                {/* penutup */}
                <div className="w-[200px] h-[50px] border-b-2 border-black flex justify-center items-center ">
                    <h2 className="text-[22px] font-sans-serif ">Our Location</h2>
                </div>
                <div className="w-[996px] h-[380px] flex flex-row justify-center items-center mt-2 bg-green-200 rounded-xl">
                    <div className="w-[560px] h-[320px] ">
                        <img src={fotoklinik} alt="" className="w-[520px] h-[320px] rounded-xl ml-6" />
                    </div>
                    <div className="w-[430px] h-[320px] flex flex-col bg-green-200 ">
                        <div className="w-[400px] h-[40px] flex flex-col ml-4 mt-4 ">
                            <div className=" bg-blue-200">
                                <h2 className="text-[20px] flex justify-center mt-1">Alamat Klinik</h2>
                            </div>
                            <div className=" ">
                                <p className="text 14px font-sans-serif mt-2 text-black">Jl. Suka Bangun II No.1451, Suka Bangun, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961</p>
                            </div>
                            <div className="">
                                <img src={lokasi} alt="" className="w-[400px] h-[186px] mt-4"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[272px] h-[320px] border border-black ">
                        <img src={mahasiswakes} alt="" className="w-[80%] " />
                    </div> */}
                </div>

                {/* about us */}
                <div className="w-full h-[200px] mt-6 bg-gray-400 rounded-xl ">
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

            {/* Blank */}
            <div className="h-[20px] bg-[#F5F7FA]"></div>
                
            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default Kia;

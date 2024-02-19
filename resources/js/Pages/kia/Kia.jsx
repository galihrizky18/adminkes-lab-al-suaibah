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
                    <h2 className="text-[22px] text-center font-sans-serif">Layanan RU KIA Stikes AL-Suaibah</h2>
                </div>

                {/* body */}

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 ">
                    <div className="w-full h-full  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={iconsenam} alt="" className="  xl:ml-[32px] xl:mt-[40px]"/>
                        <h2 className="text-[16px] font-sans-serif xl:text-center xl:mt-[50px] sm:text-center sm:mt-[90px]">Senam hamil</h2>
                    </div>
                    <div className="h-full w-full items-center  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={iconbabyspa} alt="" className="xl:ml-[45px] xl:mt-[20px]"/>
                        <h2 className="text-[16px] font-sans-serif xl:text-center xl:mt-[35px] sm:text-center sm:mt-[90px]">Baby</h2>
                    </div>
                    <div className="w-full h-full items-center  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]" >
                        <img src={iconpijatbayi} alt="" className="xl:w-[180px] xl:ml-[15px] xl:mt-[24px]"/>
                        <h2 className="text-[16px] font-sans-serif xl:text-center xl:mt-[45px] sm:text-center sm:mt-[90px]">Pijat Bayi</h2>
                    </div>
                    <div className="h-full w-full items-center  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={iconlaktasi} alt="" className="xl:w-[150px] xl:ml-[28px] xl:mt-[35px]"/>
                        <h2 className="text-[16px] font-sans-serif xl:text-center xl:mt-[38px] sm:text-center sm:mt-[90px]">Loktasi</h2>
                    </div>
                    <div className="w-full h-full items-center  bg-blue-300 rounded-xl shadow-md hover:scale-105 transition all duration 200 sm:w-[120px] md:w-[180px] xl:w-[200px] xl:h-[250px]">
                        <img src={iconkehamilan} alt="" className="w-[120px] xl:ml-[38px] xl:mt-[35px]"/>
                        <h2 className="text-[16px] font-sans-serif xl:text-center xl:mt-[50px] sm:text-center sm:mt-[90px]">Cek kehamilan</h2>
                    </div>
                </div>

                {/* galeri */}
                <div className="flex w-[100px] justify-center items-center mx-auto mt-8 border-b-2 border-black ">
                    <h2 className="text-[22px]">Galeri</h2>
                </div> 

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                    <div className="flex flex-col items-center xl:w-[320px] xl:h-[320px] hover:scale-105 transition all duration 200 border border-black">
                        <img src={galerilaktasi} alt="" className="xl:w-[80%] xl:h-[80%]" />
                        <span>Laktasi</span>
                    </div>
                    <div className="flex flex-col items-center xl:w-[320px] xl:h-[320px] hover:scale-105 transition all duration 200 border border-black">
                        <img src={galerispa} alt="" className="xl:w-[80%] xl:h-[80%] "/>
                        <span>Spa Bayi</span>
                    </div>
                    <div className="flex flex-col items-center xl:w-[320px] xl:h-[320px] hover:scale-105 transition all duration 200 border border-black ">
                        <img src={galerisenamhamil} alt="" className="xl:w-[80%] xl:h-[80%]"/>
                        <span>Senam ibu Hamil</span>
                    </div>
                    <div className="flex flex-col items-center xl:w-[320px] xlh-[320px] hover:scale-105 transition all duration 200 border border-black">
                        <img src={galeripijat} alt="" className="xl:w-[80%] xl:h-{80%}"/>
                        <span>Pijat Bayi</span>
                    </div>
                </div>

                {/* xl:w-[560px] xl:h-[320px]  */}

                {/* penutup */}
                <div className="w-[200px] h-[50px] border-b-2 border-black flex justify-center items-center ">
                    <h2 className="text-[22px] font-sans-serif ">Our Location</h2>
                </div>
                <div className="xl:w-[996px] xl:h-[380px] sm:h-full sm:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 justify-center items-center mt-2 bg-green-200 ">
                    <div className="xl:w-auto xl:h-auto sm:max-w-full sm:max-h-full ">
                        <img src={fotoklinik} alt="" className=" rounded-xl ml-6" />
                    </div>
                    <div className="w-[430px] h-[320px] flex flex-col bg-green-200 ">
                        <div className="w-[400px] h-[40px] flex flex-col xl:ml-4 xl:mt-4 sm:ml-4 sm:mt-4">
                            <div className=" bg-blue-200">
                                <h2 className="text-[20px] flex justify-center mt-1">Alamat Klinik</h2>
                            </div>
                            <div className=" ">
                                <p className="text 14px font-sans-serif mt-2 text-black">Jl. Suka Bangun II No.1451, Suka Bangun, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961</p>
                            </div>
                            <div className="">
                                <img src={lokasi} alt="" className="xl:w-[400px] xl:h-[186px] sm:w-[50px] sm:h-[50px] mt-4"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[272px] h-[320px] border border-black ">
                        <img src={mahasiswakes} alt="" className="w-[80%] " />
                    </div> */}
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

            {/* Blank */}
            <div className="h-[20px] bg-[#F5F7FA]"></div>
                
            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default Kia;

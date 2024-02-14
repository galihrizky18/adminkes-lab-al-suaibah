import React from "react";
import { MantineProvider } from "@mantine/core";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/dashboard/Footer";
import CollapseComponents from "@/Components/poliAnak/CollapseComponents";

import Gambar3 from "../../../../public/asset/image/fto1.png";
import Gambar4 from "../../../../public/asset/image/fto2.png";
import Gambar5 from "../../../../public/asset/icon/iconnew/icongizi.png";
import Gambar6 from "../../../../public/asset/icon/iconnew/icontumbuhkembang.png";
import Gambar7 from "../../../../public/asset/icon/iconnew/iconcheckup.png";
import Gambar8 from "../../../../public/asset/icon/iconnew/iconimunisasi.png";
import Gambar9 from "../../../../public/asset/icon/iconnew/iconobesitas.png";
import logoprosedur from "../../../../public/asset/icon/iconnew/logoprosedur.png";
import fotodokter from "../../../../public/asset/image/dokter.jpg";
import fotodokter2 from "../../../../public/asset/image/dokter2.jpg";


const PoliAnak = () => {
    return (
        <MantineProvider>
            <Head title="Poli Umum" />

            {/* Navbar */}
            <Navbar />

            {/* Body */}
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10">
                {/* Title */}
                <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Ruangan Umum Anak
                </div>

                {/* foto fasilitas */}
                <div className="flex flex-wrap mt-10 gap-5 justify-center items-center w-full">
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 mb-5 hover:scale-105 transition all duration-200">
                        <img src={Gambar3} alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 mb-5 hover:scale-105 transition all duration-200">
                        <img src={Gambar4} alt="" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div>
                    <h2 className="w-[350px] h-[35px] mx-auto mb-14 border-b-2 border-blue-200 text-center text-[18px] sm md:text-lg lg:text-xl xl:text-2x1">Layanan RU Anak Stikes Al-Suaibah</h2>
                </div>

                {/* Layanan */}
               
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 justify-center">
                    <div class="flex flex-col h-[230px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200">
                        <div class="flex justify-center items-center p-6">
                            <img src={Gambar5} alt="" class="sm:w-[100px] sm:h-[100px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div>
                            <h2 class="xl:text-[16px] sm:text-[10px] text-center font-source sans pro">Konsultasi Gizi Anak</h2>
                        </div>
                    </div>
                    <div class="flex flex-col h-[230px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200">
                        <div class="flex justify-center items-center p-6">
                            <img src={Gambar6} alt="" class="sm:w-[100px] sm:h-[100px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div>
                            <h2 class="xl:text-[16px] sm:text-[10px] text-center font-source sans pro">Konsultasi Gizi Anak</h2>
                        </div>
                    </div>
                    <div class="flex flex-col h-[230px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200">
                        <div class="flex justify-center items-center p-6">
                            <img src={Gambar7} alt="" class="sm:w-[100px] sm:h-[100px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div>
                            <h2 class="xl:text-[16px] sm:text-[10px] text-center font-source sans pro">Konsultasi Gizi Anak</h2>
                        </div>
                    </div>
                    <div class="flex flex-col h-[230px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200">
                        <div class="flex justify-center items-center p-6">
                            <img src={Gambar8} alt="" class="sm:w-[100px] sm:h-[100px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div>
                            <h2 class="xl:text-[16px] sm:text-[10px] text-center font-source sans pro">Konsultasi Gizi Anak</h2>
                        </div>
                    </div>
                    <div class="flex flex-col h-[230px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200 sm:items-center">
                        <div class="flex justify-center items-center p-6">
                            <img src={Gambar9} alt="" class="sm:w-[100px] sm:h-[100px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div>
                            <h2 class="xl:text-[16px] sm:text-[10px] text-center font-source sans pro">Konsultasi Gizi Anak</h2>
                        </div>
                    </div>
                </div>
               


                {/* prosedur dan biaya */}
               <div className="w-full h-[60px] flex flex-col bg-yellow-300 mt-[9px]">
                    <div className=" flex justify-center items-center ">
                        <h2 className="text-[28px] mb-10 mt-2 ">Prosedur</h2>
                    </div>
               </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 hover:scale-105 transition-all duration-200 mb-10 xl:h-[400px]">
                    <div className=" xl:h-[300px] xl:w-[380px] sm:h-[50px] sm:w-[50px] ">
                        <img src={fotodokter} alt="" className="xl:h-[400px] xl:w-[380px] sm:w-[80px] sm:h-[20px]"/>
                    </div>
                    <div className="bg-green-700 xl:h-[400px] xl:w-[380px] text-white">
                        <div class="border-b-2 border-blue flex flex-row justify-center items-center">
                                <h2 class="text-[32px] mt-2 font-source sans pro">Prosedur</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-6 font-source sans pro ml-10">1.Pendaftaran pasien baru</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">2.Penerimaan di ruang tunggu</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">3.Pemeriksaan</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">4.Penjelasan dan edukasi</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">5.Laporan hasil pemeriksaan</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">6.Pemberian resep obat</h2>
                            </div>
                    </div>
                </div>

                {/* <div class="w-full h-[430px] mt-18">  
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 hover:scale-105 transition-all duration-200 justify-center border border-black">
                        <div class="w-full sm:w-[320px] h-[380px] border border-red-600 flex justify-center items-center">
                            <img src={fotodokter} alt="" class="xl:h-[380px] xl:w-[320px] sm:w-[50px] sm:h-[50px]" />
                        </div> 
                        <div class="w-full sm:w-[70px] sm:h-[100px] xl:w-[200px] xl:h-[380px] bg-green-400 border border-black flex flex-col ">
                            <div class="border-b-2 border-blue flex flex-row justify-center items-center">
                                <img src={logoprosedur} alt="" class="xl:w-[52px] xl:h-[45px] sm:w-[10px] sm:h-[15px]" />
                                <h2 class="text-[32px] mt-2 font-source sans pro">Prosedur</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-6 font-source sans pro ml-10">1.Pendaftaran pasien baru</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">2.Penerimaan di ruang tunggu</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">3.Pemeriksaan</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">4.Penjelasan dan edukasi</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">5.Laporan hasil pemeriksaan</h2>
                            </div>
                            <div>
                                <h2 class="text-[19px] mt-2 font-source sans pro ml-10">6.Pemberian resep obat</h2>
                            </div>
                        </div>     
                    </div>
                </div> */}



               {/* About */}
               <div className="w-full h-full bg-gray-300 rounded-xl shadow-xl py-2 sm:mt-[100px] xl:mt-[0px]">
                    <div className="sm:text-center xl:text-center font-bold">
                        <span>Tentang Kami</span>
                    </div>
                    <div className="clas">
                        <span> Ruang Umum Anak adalah fasilitas kesehatan pada klinik As-Suaibah yang khusus menyediakan layanan medis bagi anak-anak, mulai dari dari bayi hingga remaja. RU Anak ini difokuskan 
                               untuk pelayanan kesehatan dan pengembangan anak yang melibatkan dokter spesialis anak. 
                               Layanan yang disediakan meliputi pemeriksaan kesehatan, imunisasi, pemantauan gizi anak, dan lain lain.
                        </span>
                    </div>
               </div>
               {/* <div className="w-full h-full bg-gray-300 rounded-xl shadow-md xl:py-[20px] sm:mt-[800px] xl:mt-[20px] border border-black">
                    <h2 className="text-[32px] font-bold  text-center"> Tentang Kami</h2>
                    <p className="text-[16px]">
                        Ruang Umum Anak adalah fasilitas kesehatan pada klinik As-Suaibah yang khusus menyediakan layanan medis bagi anak-anak, mulai dari dari bayi hingga remaja. RU Anak ini difokuskan untuk pelayanan kesehatan dan pengembangan anak yang melibatkan dokter spesialis anak. Layanan yang disediakan meliputi pemeriksaan kesehatan, imunisasi, pemantauan gizi anak, dan lain lain.
                    </p>
               </div> */}
            </div>

            {/* Blank */}
            <div className="h-[10px] bg-[#F5F7FA]"></div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default PoliAnak;

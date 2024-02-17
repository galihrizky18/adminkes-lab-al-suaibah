import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { MantineProvider } from "@mantine/core";
import Footer from "@/Components/dashboard/Footer";
import obat1 from "../../../../public/asset/image/obat1.png";
import obat2 from "../../../../public/asset/image/obat2.png";
import obat3 from "../../../../public/asset/image/obat3.png";
import obat4 from "../../../../public/asset/image/obat4.png";
import galeri1 from "../../../../public/asset/image/labo1.jpeg";
import galeri2 from "../../../../public/asset/image/labo2.jpeg";
import galeri3 from "../../../../public/asset/image/labo3.jpeg";
import galeri4 from "../../../../public/asset/image/labo4.jpeg";
import galeri5 from "../../../../public/asset/image/labo5.jpeg";
import galeri6 from "../../../../public/asset/image/labo6.jpg";
import galeri7 from "../../../../public/asset/image/labo7.jpg";
import galeri8 from "../../../../public/asset/image/labo8.jpg";
import galeri9 from "../../../../public/asset/image/labo9.jpg";

const laboratorium = () => {
    const image = [
        galeri1,
        galeri2,
        galeri3,
        galeri4,
        galeri5,
        galeri6,
        galeri7,
        galeri8,
        galeri9,
    ];

    return (
        <MantineProvider>
            <Head title="Laboratorium" />

            {/* Navbar */}
            <Navbar />

            {/* Body */}
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
                
                {/* Title */}
                <div className="w-full sm:w-[50px] md:w-[100%] xl:w-[20%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Laboratorium
                </div>
                <div className="sm:w-[90%] px-5 py-3 rounded-xl text-center">
    <               span className="sm:text-sm md:text-base xl:text-lg">
                        Laboratorium Klinik Al-Su'ibah merupakan salah satu unit
                        pelayanan diagnostik terkemuka di STIKES Al-Su'ibah
                        Palembang. Dengan layanan yang tersedia selama 24 jam,
                        laboratorium ini didukung oleh tenaga professional yang
                        berpengalaman di bidangnya. Hasil laporan laboratorium
                        tersedia secara cepat dan akurat, memudahkan para pasien
                        dalam menjalankan pemeriksaan kesehatan mereka dengan
                        nyaman.
                    </span>
                </div>
                <div className="flex flex-col">
                    <h4 className="sm:text-sm md:text-base xl:text-[25px] font-bold">Paket Medical CheckUp</h4>
                    <p className="sm:text-xs md:text-sm xl:text-[15px] text-[#3e433f] text-center">
                        *Paket Masa Diskon 50%*
                    </p>
                </div>

                {/* obat 1 */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-4">
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[300px] sm:h-[350px] rounded-xl">
                        <div className="flex flex-col text-center sm:text-sm md:text-base xl:text-lg">
                            <span className=" font- sm:mt-[20px] xl:mt-[40px] font-bold">Paket Mikro</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. GDA (Gula Darah Acak)</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px] font-bold">Rp 90.000</span>
                        </div>
                    </div>

                    {/* obat 2 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] rounded-xl  sm:w-[300px] sm:h-[350px] ">
                        <div className="flex flex-col text-center sm:text-sm md:text-base xl:text-lg">
                            <span className="font- sm:mt-[20px] xl:mt-[40px] font-bold">Paket Mili</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Darah lengkap</span>
                                <span>2. GDP</span>
                                <span>3. Urin Lengkap</span>
                                <span>4. SGOT</span>
                                <span className="xl:mt-[80px] sm:mt-[10px] font-bold">Rp 280.000</span>
                        </div>
                    </div>

                    {/* obat 3 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[300px] sm:h-[350px] rounded-xl">
                        <div className="flex flex-col text-center sm:text-sm md:text-base xl:text-lg">
                            <span className="sm:mt-[20px] xl:mt-[40px] font-bold">Paket Kilo</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Darah Lengkap</span>
                                <span>2. Urin Lengkap</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px] font-bold">Rp 645.000</span>
                        </div>
                    </div>

                    {/* obat 4 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[300px] sm:h-[350px] rounded-xl">
                        <div className="flex flex-col text-center sm:text-sm md:text-base xl:text-lg">
                            <span className="sm:mt-[20px] xl:mt-[40px] font-bold">Paket Mega</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Asam Urat</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px] font-bold">Rp 1.060.000</span>
                        </div>
                    </div>

                    {/* obat 5 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[300px] sm:h-[350px] rounded-xl">
                        <div className="flex flex-col text-center sm:text-sm md:text-base xl:text-lg">
                            <span className="sm:mt-[20px] xl:mt-[40px] font-bold">Paket Nino</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. GDA (Gula Darah Acak)</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px] font-bold">Rp 135.000</span>
                        </div>
                    </div>
                </div>

                {/* Layanan */}
                <div className="w-full sm:w-[20%] sm:text-sm md:text-base xl:text-2xl bg-white px-5 py-3 text-center font-bold font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Layanan Kami</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 ">
                    <div className="bg-green-700 px-5 py-6 text-white sm:text-sm md:text-base xl:text-[18px] sm:h-[150px] md:h-[200px] xl:h-full">
                        <span>1. Pengujian Kesehatan</span>
                        <br />
                        <span>  
                            Menyediakan berbagai jenis pengujian untuk diagnosis
                            dan pemantauan kondisi kesehatan, seperti tes darah
                            lengkap, tes urine lengkap dan tes fungsi organ.
                        </span>
                    </div>
                    <div className="bg-green-700 px-5 py-6 text-white sm:text-sm md:text-base xl:text-[18px] sm:h-[150px] md:h-[200px] xl:h-full">
                        <span>2. Pengujian penyakit manular</span>
                        <br />
                        <span>  
                            menyediakan pengujian untuk penyakit manular seperti
                            HIV, hepatitis, dan penyakit manular lainnya.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 ">
                    <div className="bg-green-700 px-5 py-6 text-white sm:text-sm md:text-base xl:text-[18px] sm:h-[150px] md:h-[200px] xl:h-full">
                        <span>3.  Pengujian Klinis</span>
                        <br />
                        <span>  
                            Menyediakan pengujian untuk mendukung penelitian
                            klinis dan pengembangan obat, termasuk uji klinis
                            untuk obat baru dan prosedur diagnostik
                        </span>
                    </div>
                    <div className="bg-green-700 px-5 py-6 text-white sm:text-sm md:text-base xl:text-[18px] sm:h-[150px] md:h-[200px] xl:h-full">
                        <span>4. Pengujian Lingkungan</span>
                        <br />
                        <span>  
                            Menyediakan pengujian untuk air, tanah, udara, dan
                            bahan kimia lainnya untuk memantau kualitas
                            lingkungan.
                        </span>
                    </div>
                </div>

                {/* Galeri Laboratorium */}
                <div className="w-full sm:w-1/6 mt-40px xl:w-1/5 bg-white hover:text-[#101611] px-5 py-3 text-center font-bold sm:text-sm md:text-base xl:text-2xl font-roboto text-[#237939] rounded-xl shadow-lg">
                    <span>Galeri</span>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                    {image.map((data, i) => (
                        <div key={i} class="sm:w-full sm:h-auto md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] xl:w-[350px] xl:h-[250px]">
                            <a href="#">
                                <img
                                    src={data}
                                    alt=""
                                    class="w-full h-auto sm:w-[250px] sm:h-[190px] md:w-full md:h-auto lg:w-[250px] lg:h-[250px] xl:w-full xl:h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Deskripsi Laboratorium */}
                <div className="w-full sm:w-[90%] bg-white px-5 py-3 rounded-xl">
                    <span>Deskripsi :</span>
                    <br />
                    <span className="sm:text-sm md:text-base xl:text-lg">
                        Laboratorium Al-Su'ibah menerapkan konsep laboratorium
                        terpadu sehingga memiliki laboratorium patologi klinik,
                        patologi anatomi, mikrobiologi, parasitologi,
                        biomolekuler, dan bank darah. Semua unit tersebut berada
                        dalam area bersama yang berdampingan satu sama lain.
                        Dengan konsep laboratorium terpadu, diharapkan pelayanan
                        laboratorium dapat dilakukan secara komprehensif.
                    </span>
                </div>

                {/* Ucapaan */}
                <div className="bg-green-600  w-full px-5 py-3 sm:w-[50%] rounded-xl">
                    <marquee behavior="" direction="" className="text-white ">
                        Copyright © 2024 STIKES Al-Su'aibah Palembang | Made
                        with 🌟 5 Codes
                    </marquee>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default laboratorium;

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
                {/* Bodyyy editt
                <div className="clas">
                         <img src={Gambar1} alt="" />
                </div> */}
                {/* Title */}
                <div className="w-full sm:w-[50px] xl:w-[20%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Laboratorium
                </div>
                <div className="sm:w-[90%] px-5 py-3  rounded-xl text-center">
                    <span className="sm:text-[5px] md:text-[10px] xl:text-[17px]">
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
                    <h4 className=" text-[28px]">Paket Medical CheckUp</h4>
                    <p className="text-bold text-[15px] text-[#3e433f] text-center">
                        *Paket Masa Diskon 50%*
                    </p>
                </div>


                {/* new */}
                {/* obat 1 */}
                <div className="flex flex-row gap-4">
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[100px] sm:h-[200px] rounded-xl">
                        <div className="flex flex-col text-center xl:text-[17px] sm:text-[24px]">
                            <span className="xl:text-[20px] sm:text-[15px] font- sm:mt-[20px] xl:mt-[40px]">Paket Mikro</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. GDA (Gula Darah Acak)</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px]">Rp 90.000</span>
                        </div>
                    </div>

                    {/* obat 2 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] rounded-xl  sm:w-[100px] sm:h-[200px] ">
                        <div className="flex flex-col text-center xl:text-[17px] sm:text-[24px]">
                            <span className="xl:text-[20px] sm:text-[15px] font- sm:mt-[20px] xl:mt-[40px]">Paket Mili</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Darah lengkap</span>
                                <span>2. GDP</span>
                                <span>3. Urin Lengkap</span>
                                <span>4. SGOT</span>
                                <span className="xl:mt-[80px] sm:mt-[10px]">Rp 280.000</span>
                        </div>
                    </div>

                    {/* obat 3 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] rounded-xl  sm:w-[20px] sm:h-[170px] ">
                        <div className="flex flex-col text-center xl:text-[17px] sm:text-[24px]">
                            <span className="xl:text-[20px] sm:text-[15px] font- sm:mt-[20px] xl:mt-[40px]">Paket Kilo</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Darah Lengkap</span>
                                <span>2. Urin Lengkap</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px]">Rp 645.000</span>
                        </div>
                    </div>
                </div>

                {/* obat 4 */}
                <div className="flex flex-row gap-4">
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] sm:w-[10px] sm:h-[170px] rounded-xl sm:px-5">
                        <div className="flex flex-col text-center xl:text-[17px] sm:text-[24px]">
                            <span className="xl:text-[20px] sm:text-[15px] font- sm:mt-[20px] xl:mt-[40px]">Paket Mega</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. Asam Urat</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px]">Rp 1.060.000</span>
                        </div>
                    </div>

                {/* obat 5 */}
                    <div className="bg-white shadow-xl xl:h-[500px] xl:w-[370px] rounded-xl  sm:w-[10px] sm:h-[200px] sm:px-5">
                        <div className="flex flex-col text-center xl:text-[17px] sm:text-[24px]">
                            <span className="xl:text-[20px] sm:text-[15px] font- sm:mt-[20px] xl:mt-[40px]">Paket Nino</span>
                            <img src={obat1} alt="" className="mt-[10px]"/>
                                <span className="">1. GDA (Gula Darah Acak)</span>
                                <span>2. Asam Urat</span>
                                <span>3. Cholesterol</span>
                                <span>4. Trigliserida</span>
                                <span className="xl:mt-[80px] sm:mt-[10px]">Rp 135.000</span>
                        </div>
                    </div>
                </div>

                {/* Layanan */}
                <div className="w-full sm:w-[20%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Layanan Kami</span>
                </div>
                <div className="flex flex-row gap-4 ">
                    <div className="bg-green-700 px-5 py-3  text-white sm:text-[10px] xl:text-[18px] sm:w-[30px] sm:h-[50px] md:w-[25px] xl:w-full xl:h-full ">
                        <span>1. Pengujian Kesehatan</span>
                        <br />
                        <span>
                            Menyediakan berbagai jenis pengujian untuk diagnosis
                            dan pemantauan kondisi kesehatan, seperti tes darah
                            lengkap, tes urine lengkap dan tes fungsi organ.
                        </span>
                    </div>
                    <div className="bg-green-700 px-5 py-6  text-white sm:text-[10px] xl:text-[18px] sm:w-[50px] md:w-[25px] xl:w-full sm:h-[50px] xl:h-full">
                        <span>2. Pengujian penyakit manular </span>
                        <br />
                        <span>
                            menyediakan pengujian untuk penyakit manular seperti
                            HIV, hepatitis, dan penyakit manular lainnya.
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-green-700 px-5 py-3  text-white sm:h-[50px] sm:w-[50px] xl:h-full xl:w-full"> 
                        <span>3. Pengujian Klinis</span>
                        <br />
                        <span>
                            Menyediakan pengujian untuk mendukung penelitian
                            klinis dan pengembangan obat, termasuk uji klinis
                            untuk obat baru dan prosedur diagnostik
                        </span>
                    </div>
                    <div className="bg-green-700  w-full px-5 py-3  text-white sm:h-[50px] sm:w-[50px] xl:h-full xl:w-full">
                        <span>4. Pengujian Lingkungan</span>
                        <br />
                        <span>
                            Menyediakan pengujian untuk air, tanah, udara, dan
                            bahan kimia lainnya untuk memantau kualitas
                            lingkungan dan memastikan kepatuhan terhadap
                            peraturan lingkungan
                        </span>
                    </div>
                </div>

                {/* Galeri Laboratorium */}
                <div className="w-full sm:w-[20%] mt-[40px] bg-white hover:text-[#101611]  px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Galeri</span>
                </div>
                <div className="grid grid-cols-3 gap-7">
                    {image.map((data, i) => (
                        <div key={i} className="sm:w-[30px] sm:h-[30px] md:w-[100px] md:h-[100px] xl:w-full xl:h-full">
                            <a href="#">
                                <img
                                    src={data}
                                    alt=""
                                    className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Deskripsi Laboratorium */}

                <div className="w-full sm:w-[90%] bg-white px-5 py-3 rounded-xl">
                    <span>Deskripsi :</span>
                    <br />
                    <span>
                        Laboratorium Al-Su'ibah menerapkan konsep laboratorium
                        terpadu sehingga memiliki laboratorium patologi klinik,
                        patologi anatomi, mikrobiologi, parasitologi,
                        biomolekuler, dan bank darah. Semua unit tersebut berada
                        dalam area bersama yang berdampingan satu sama lain.
                        Dengan konsep laboratorium terpadu, diharapkan pelayanan
                        laboratorium dapat dilakukan secara komprehensif. Dokter
                        di laboratorium terpadu RSUI terdiri dari empat
                        spesialisasi dokter laboratorium, yaitu spesialis
                        patologi klinik, spesialis patologi anatomi, spesialis
                        mikrobiologi klinik, dan spesialis parasitologi klinik.
                        Selain itu, pelayanan di laboratorium terpadu RSUI
                        didukung oleh ATLM (Ahli Teknologi Laboratorium Medis),
                        teknisi pelayanan darah, dan sarjana di bidang sains dan
                        biomedis. Pemeriksaan patologi klinik berperan memeriksa
                        specimen darah, urin, feses, dan cairan tubuh untuk
                        melakukan penapisan penyakit, penegakan diagnosis, dan
                        pemantauan terapi. 
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

            {/* sjhdsdsjhdshdjsdg */}

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default laboratorium;

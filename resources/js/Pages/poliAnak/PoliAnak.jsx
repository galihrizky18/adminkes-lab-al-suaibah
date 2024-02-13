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
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
                {/* Title */}
                <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Ruangan Umum Anak
                </div>

                {/* foto fasilitas */}
                <div className="flex flex-wrap gap-5 justify-center items-center w-full">
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 mb-5">
                        <img
                            src={Gambar3}
                            alt=""
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 mb-5">
                        <img
                            src={Gambar4}
                            alt=""
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Layanan */}
                <div className="w-full h-full p-4 flex flex-col mx-aouto sm:px-4 md:px-8 lg:px-12 xl:px-16">
                    <div>
                        <h2 className=" mb-4 border-b-2 border-blue-200 text-center font-bold text-[1.5rem] md:text-lg lg:text-2xl xl:text-4x1">
                            Layanan RU Anak Stikes Al-Suaibah
                        </h2>
                    </div>
                    <div className="flex flex-row gap-3 lg:gap-12  lg:ml-8">
                        <div className="flex flex-col gap-6 p-4 w-[350px] bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-200 ">
                            <div className="flex justify-center items-center">
                                <img src={Gambar5} alt="" width={174} />
                            </div>
                            <div className="">
                                <h2 className="text-[22px] text-center">
                                    Konsultasi Gizi Anak
                                </h2>
                            </div>
                            <div>
                                <p className="text-[14px] ">
                                    Layanan Gizi klinik menyediakan konsultasi
                                    mengenai Gizi anak dan dewasa. Ditangani
                                    oleh spesialis di bidangnya pasien dapat
                                    konsultasi dan berbagai macam terkait gizi.
                                    Konsultasi seputar cara menurunkan berat
                                    badan, menaikan berat badan melalui pola
                                    makan atau konsultasi mengenai jumlah kalori
                                    yang dibutuhkan oleh tubuh juga dapat
                                    dikonsultasikan kepada layanan gizi klinik
                                    di Edelweiss Hospital.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 p-4 w-[360px]  bg-blue-200 rounded-xl shadow-md hover:scale-110 transition-all duration-200">
                            <div className="flex justify-center items-center">
                                <img src={Gambar6} alt="" width={105} />
                            </div>
                            <div className="">
                                <h2 className="text-[22px] text-center">
                                    Konsultasi Tumbuh Kembang Anak
                                </h2>
                            </div>
                            <div>
                                <p className="text-[14px]">
                                    Orang tua perlu memastikan bahwa
                                    anak-anaknya tumbuh dan berkembang secara
                                    normal sesuai dengan umur mereka. Penting
                                    sekali untuk mendeteksi sedini mungkin
                                    adanya gangguan pertumbuhan, gangguan
                                    pubertas pada anak agar pengobatan dapat
                                    segera dimulai.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-4 w-[350px] bg-blue-200 rounded-xl shadow-md hover:scale-110 transition-all duration-200">
                            <div className="flex justify-center items-center">
                                <img src={Gambar7} alt="" width={175} />
                            </div>
                            <div className="">
                                <h2 class="text-[22px] text-center">
                                    Medical Checkup Untuk Anak
                                </h2>
                            </div>
                            <div>
                                <p className="text-[14px]">
                                    dilakukan untuk mengetahui dan memantau
                                    kondisi kesehatan anak sebelum beranjak
                                    dewasa. Adapun tujuan pemeriksaan kesehatan
                                    anak adalah untuk memantau proses tumbuh
                                    kembang, memeriksa status gizi, hingga
                                    mendeteksi kelainan bawaan pada anak.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12 p-8 mt-8">
                        <div className="flex flex-col gap-6 p-4 w-[350px] bg-blue-200 rounded-xl shadow-md hover:scale-110 transition-all duration-200">
                            <div className="flex justify-center items-center">
                                <img src={Gambar8} alt="" width={195} />
                            </div>
                            <div className="">
                                <h2 className="text-[22px] text-center">
                                    Imunisasi
                                </h2>
                            </div>
                            <div>
                                <p className="text-[14px]">
                                    RU Anak Klinik As-Suaibah juga melayani
                                    pemberian imunisasi kepada bayi yang
                                    bertujuan untuk meningkatkan kekebalan tubuh
                                    terhadap penyakit tertentu. Imunisasi
                                    berperan penting dalam mencegah penyebaran
                                    penyakit menular serta dapat melindungi diri
                                    dari dampak negatif penyakit yang ddapat
                                    dicegah.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-4 w-[360px] shadow-md rounded-xl bg-blue-200 hover:scale-110 transition-all duration-200">
                            <div className="flex justify-center items-center">
                                <img src={Gambar9} alt="" width={205} />
                            </div>
                            <div>
                                <h2 className="text-[22px] text-center">
                                    Skrining Obesitas
                                </h2>
                            </div>
                            <div>
                                <p className="text-[14px]">
                                    Obesitas adalah penyakit! Jangan anggap lucu
                                    anak yang terlalu gemuk. Obesitas dapat
                                    memicu timbulnya penyakit-penyakit metabolik
                                    pada anak, diantaranya diabetes mellitus,
                                    penyakit ginjal ataupun penyakit jantung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* prosedur dan biaya */}
                <div className="w-full h-[60px] flex flex-col bg-yellow-300 ">
                    <div className="border-b-4 border-blue-200 w-full flex justify-center items-center mt-1">
                        <h2 className="text-[32px] mb-10">
                            Prosedur dan Biaya
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[790px] flex flex-col mt-18 justify-center items-center">
                    <div className="flex flex-row mt-8 border-b-2 border-black">
                        <div className="w-[362px] h-[380px] bg-green-400">
                            <div className="border-b-2 border-blue flex flex-row justify-center items-center">
                                <img
                                    src={logoprosedur}
                                    alt=""
                                    className="w-[62px] h-[55px]"
                                />
                                <h2 className="text-[32px] mt-2 font-source sans pro">
                                    Prosedur
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-6 font-source sans pro ml-8">
                                    1.Pedaftaran pasien baru
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    2.Penerimaan di ruang tunggu
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    3.Pemeriksaan
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    4.Penjelasan dan edukasi
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    5.Laporan hasil pemeriksaan
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    6.Pemberian resep obat
                                </h2>
                            </div>
                        </div>
                        <div className="w-[320px] h-[380px]">
                            <img
                                src={fotodokter}
                                alt=""
                                className="h-[380px] w-[320px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className=" ">
                            <img
                                src={fotodokter2}
                                alt=""
                                className="h-[380px] w-[320px]"
                            />
                        </div>
                        <div className="w-[362px] h-[380px] bg-green-400">
                            <div className="border-b-2 border-blue flex flex-row justify-center items-center">
                                <img
                                    src={logoprosedur}
                                    alt=""
                                    className="w-[62px] h-[55px]"
                                />
                                <h2 className="text-[32px] mt-2 font-source sans pro ">
                                    Biaya
                                </h2>
                            </div>
                            <div>
                                <h2 className="text-[22px] mt-2 font-source sans pro ml-8">
                                    Biaya ditentukan dari tindakan yang diambil
                                    dan sesuai ketentuan
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[60px] flex flex-col bg-yellow-300  mt-18 "></div>

                {/* About */}
                <div className="w-full h-full bg-gray-300 p-6 rounded-xl shadow-md mt-16">
                    <h2 className="text-[32px] font-bold mb-4 text-center">
                        {" "}
                        Tentang Kami
                    </h2>
                    <p className="text-[16px] leading-relaxed">
                        Ruang Umum Anak adalah fasilitas kesehatan pada klinik
                        As-Suaibah yang khusus menyediakan layanan medis bagi
                        anak-anak, mulai dari dari bayi hingga remaja. RU Anak
                        ini difokuskan untuk pelayanan kesehatan dan
                        pengembangan anak yang melibatkan dokter spesialis anak.
                        Layanan yang disediakan meliputi pemeriksaan kesehatan,
                        imunisasi, pemantauan gizi anak, dan lain lain.
                    </p>
                </div>
            </div>

            {/* Blank */}
            <div className="h-[90px] bg-[#F5F7FA]"></div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default PoliAnak;

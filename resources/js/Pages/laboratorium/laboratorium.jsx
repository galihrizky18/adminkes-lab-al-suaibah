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
                    <span className="sm:text-[5px] md:text-[10px] xl:text-[17px]">Laboratorium Klinik Al-Su'ibah merupakan salah satu unit pelayanan diagnostik terkemuka di STIKES Al-Su'ibah Palembang. Dengan layanan yang tersedia selama 24 jam, laboratorium ini didukung oleh tenaga professional yang berpengalaman di bidangnya. Hasil laporan laboratorium tersedia secara cepat dan akurat, memudahkan para pasien dalam menjalankan pemeriksaan kesehatan mereka dengan nyaman.</span>
                </div>
        
                <div className="flex flex-col">
                    <h4 className=" text-[28px]">Paket Medical CheckUp</h4>
                    <p className="text-bold text-[15px] text-[#3e433f] text-center">*Paket Masa Diskon 50%*</p>
                </div>

                {/* obat 1 */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:mr-4 md:px-5 md:py-3 md:mt-0 xl:pr-[80px]">
                    <div className="md:mr-4 md:mt-0 ">
                        <img src={obat1} alt="" className="w-full md:w-[270px] h-[200px]"/>
                    </div>
                    <div className="md:mr-4 md:mt-0 flex flex-col md:text-left text-center xl:px-10"> 
                        <span className="text-[25px]">Paket Mikro</span>
                        <div className="flex flex-col ">
                            <ul className="list-disc ml-4">
                                <li>GDA (Gula Darah Acak)</li>
                                <li>Asam Urat</li>
                                <li>Cholesterol</li>
                                <li>Trigliserida</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-left text-center "> 
                        <span className="text-[25px]">Rp 90.000</span>
                    </div>
                </div>

                 {/* obat 2 */}
                 <div className="flex flex-col md:flex-row md:items-start md:justify-between md:mr-4 md:px-5 md:py-3 md:mt-0 xl:pr-[128px]">
                    <div className="md:mr-4 md:mt-0">
                        <img src={obat1} alt="" className="w-full md:w-[270px] h-[200px]"/>
                    </div>
                    <div className="md:mr-4 md:mt-0 flex flex-col md:text-left text-center xl:px-14"> 
                        <span className="text-[25px]">Paket Mikro</span>
                        <div className="flex flex-col">
                            <ul className="list-disc ml-4">
                                <li>Darah Lengkap</li>
                                <li>GDP</li>
                                <li>Asam Urat</li>
                                <li>SGOT</li>
                                <li>SGPT</li>
                                <li>Cholesterol</li>
                                <li>Trigliserida</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-left text-center "> 
                        <span className="text-[25px]">Rp 135.000</span>
                    </div>
                </div>

                   {/* obat 3 */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:mr-4 md:px-5 md:py-3 md:mt-0 xl:pr-[128px]">
                    <div className="md:mr-4 md:mt-0">
                        <img src={obat1} alt="" className="w-full md:w-[270px] h-[200px]"/>
                    </div>
                    <div className="md:mr-4 md:mt-0 flex flex-col md:text-left text-center xl:px-14"> 
                        <span className="text-[25px]">Paket Mili</span>
                        <div className="flex flex-col">
                            <ul className="list-disc ml-4">
                                <li>Darah Lengkap</li>
                                <li>Urin Lengkap</li>
                                <li>GDP</li>
                                <li>2JPP</li>
                                <li>Urea</li>
                                <li>Creatinin</li>
                                <li>Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-left text-center"> 
                        <span className="text-[25px]">Rp 280.000</span>
                    </div>
                </div>

                 {/* obat 4 */}
                 <div className="flex flex-col md:flex-row md:items-start md:justify-between md:mr-4 md:px-5 md:py-3 md:mt-0 xl:pr-[128px]">
                    <div className="md:mr-4 md:mt-0">
                        <img src={obat1} alt="" className="w-full md:w-[270px] h-[200px]"/>
                    </div>
                    <div className="md:mr-4 md:mt-0 flex flex-col md:text-left text-center xl:px-14"> 
                        <span className="text-[25px]">Paket Kilo</span>
                        <div className="flex flex-col">
                            <ul className="list-disc ml-4">
                                <li>Darah Lengkap</li>
                                <li>Urin Lengkap</li>
                                <li>GDP</li>
                                <li>2JPP</li>
                                <li>Urea</li>
                                <li>Creatinin</li>
                                <li>Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-left text-center"> 
                        <span className="text-[25px]">Rp 645.000</span>
                    </div>
                </div>

                {/* obat 5 */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:mr-4 md:px-5 md:py-3 md:mt-0 xl:pr-[128px]">
                    <div className="md:mr-4 md:mt-0">
                        <img src={obat1} alt="" className="w-full md:w-[270px] h-[200px]"/>
                    </div>
                    <div className="md:mr-4 md:mt-0 flex flex-col md:text-left text-center xl:px-14"> 
                        <span className="text-[25px]">Paket Mega</span>
                        <div className="flex flex-col">
                            <ul className="list-disc ml-4">
                                <li>Darah Lengkap</li>
                                <li>Urin Lengkap</li>
                                <li>GDP</li>
                                <li>2JPP</li>
                                <li>Urea</li>
                                <li>Creatinin</li>
                                <li>Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-left text-center"> 
                        <span className="text-[25px]">Rp 1.060.000</span>
                    </div>
                </div>
                
                 {/* Layanan */}
                 <div className="w-full sm:w-[20%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Layanan Kami</span>
                </div>
                 <div className="flex flex-row gap-4 ">
                    <div className="bg-green-700 px-5 py-3 text-white sm:w-[50px] md:w-[25px] xl:w-full">
                        <span>1. Pengujian Kesehatan</span><br />
                        <span>Menyediakan berbagai jenis pengujian untuk diagnosis dan pemantauan kondisi kesehatan, seperti tes darah lengkap, tes urine lengkap dan tes fungsi organ.</span>
                    </div>
                    <div className="bg-green-700  w-full px-5 py-3  text-white sm:w-[50px] md:w-[25px] xl:w-full">
                        <span>2. Pengujian penyakit manular </span><br />
                        <span>menyediakan pengujian untuk penyakit manular seperti HIV, hepatitis, dan penyakit manular lainnya.</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-green-700 px-5 py-3 sm:w-[50%] text-white">
                        <span>3. Pengujian Klinis</span><br />
                        <span>Menyediakan pengujian untuk mendukung penelitian klinis dan pengembangan obat, termasuk uji klinis untuk obat baru dan prosedur diagnostik</span>
                    </div>
                    <div className="bg-green-700  w-full px-5 py-3 sm:w-[50%] text-white">
                        <span>4. Pengujian Lingkungan</span><br />
                        <span>Menyediakan pengujian untuk air, tanah, udara, dan bahan kimia lainnya untuk memantau kualitas lingkungan dan memastikan kepatuhan terhadap peraturan lingkungan</span>
                    </div>
                </div>

                
                {/* Galeri Laboratorium */}
                <div className="w-full sm:w-[20%] mt-[40px] bg-white hover:text-[#101611]  px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Galeri</span>
                </div>
                <div className="flex flex-row gap-6 mt-[30px] sm:w-[75%] h-[300px] ">
                    <div className="w-[400px]  h-[300px] ">
                        <a href="#">
                            <img src={galeri1} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]   h-[300px] ">
                        <a href="#">
                            <img src={galeri2} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px] h-[300px] ">
                        <a href="#">              
                            <img src={galeri3} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row  gap-6 sm:w-[75%] h-[300px]">
                    <div className="w-[400px]  h-[300px] ">
                        <a href="#">
                            <img src={galeri4} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]   h-[300px] ">
                        <a href="#">
                            <img src={galeri5} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  h-[300px] ">
                        <a href="#">
                            <img src={galeri6} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row  gap-6 sm:w-[75%] h-[300px]">
                    <div className="w-full sm:w-[90%] h-[300px] ">
                        <a href="#">
                            <img src={galeri7} alt="" className="w-full h-full shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-full sm:w-[90%]  h-[300px] ">
                        <a href="#">
                            <img src={galeri8} alt="" className="w-full h-full shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-full sm:w-[90%]  h-[300px] ">
                        <a href="#">
                            <img src={galeri9} alt="" className="w-full h-full shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                </div>

                {/* Deskripsi Laboratorium */}

                <div className="w-full sm:w-[90%] bg-white px-5 py-3 rounded-xl">
                    <span>Deskripsi :</span><br />
                    <span>Laboratorium Al-Su'ibah menerapkan konsep laboratorium terpadu sehingga memiliki laboratorium patologi klinik, patologi anatomi, mikrobiologi, parasitologi, biomolekuler, dan bank darah. Semua unit tersebut berada dalam area bersama yang berdampingan satu sama lain. Dengan konsep laboratorium terpadu, diharapkan pelayanan laboratorium dapat dilakukan secara komprehensif.
                        Dokter di laboratorium terpadu RSUI terdiri dari empat spesialisasi dokter laboratorium, yaitu spesialis patologi klinik, spesialis patologi anatomi, spesialis mikrobiologi klinik, dan spesialis parasitologi klinik. Selain itu, pelayanan di laboratorium terpadu RSUI didukung oleh ATLM (Ahli Teknologi Laboratorium Medis), teknisi pelayanan darah, dan sarjana di bidang sains dan biomedis.
                        Pemeriksaan patologi klinik berperan memeriksa specimen darah, urin, feses, dan cairan tubuh untuk melakukan penapisan penyakit, penegakan diagnosis, dan pemantauan terapi. Pemeriksaan laboratorium memegang peran kunci dalam penegakan diagnosis penyakit dan penanganan penyakit tersebut.
                        Pemeriksaan patologi anatomi berperan dalam menilai gambaran sel yang diambil dari dalam tubuh yang dianggap abnormal, misalnya suatu benjolan abnormal. Patologi anatomi merupakan standar baku emas diagnosis yang berkaitan dengan tumor atau kanker.
                        Pemeriksaan mikrobiologi klinik dapat membantu penegakan diagnosis serta evaluasi berbagai penyakit infeksi, baik pada infeksi akut maupun kronik. Pemeriksaan pewarnaan langsung, seperti pewarnaan Gram atau BTA, dapat digunakan sebagai penapisan awal manifestasi infeksi pada berbagai spesimen. Identifikasi patogen dapat dilakukan dengan pemeriksaan biakan, yang akan dilanjutkan dengan uji kepekaan antimikroba untuk membantu klinisi memilih pemberian antimikroba yang sesuai.
                        Pemeriksaan mikrobiologi klinik juga dilakukan pada sampel yang diperoleh di lingkungan Rumah Sakit dan membantu memastikan kaitan antara kejadian penyakit infeksi pada pasien dengan pengendalian infeksi yang dilakukan di rumah sakit tersebut.
                        Bank darah berperan menyediakan produk darah yang aman untuk pasien yang mengalami kekurangan darah seperti pada anemia, kekurangan trombosit, zat pembekuan darah.
                    </span>
                </div>  

                {/* Ucapaan */}
                <div className="bg-green-600  w-full px-5 py-3 sm:w-[50%] rounded-xl">
                        <marquee behavior="" direction="" className="text-white ">Copyright © 2024 STIKES Al-Su'aibah Palembang | Made with 🌟 5
                Codes</marquee>
                    </div>
            </div>

                {/* sjhdsdsjhdshdjsdg */}
          {/* shdssfdfdkjfdfhkjh */}

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default laboratorium;


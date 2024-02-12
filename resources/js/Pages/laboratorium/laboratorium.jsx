import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Footer from "@/Components/dashboard/Footer";
import Gambar1 from "../../../../public/asset/image/gambardepan.jpeg";
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
                <div className="w-full sm:w-[20%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Laboratorium
                </div>
                <div className="w-full sm:w-[90%] px-5 py-3  rounded-xl text-center">
                    <span>Laboratorium Klinik Al-Su'ibah merupakan salah satu unit pelayanan diagnostik terkemuka di STIKES Al-Su'ibah Palembang. Dengan layanan yang tersedia selama 24 jam, laboratorium ini didukung oleh tenaga professional yang berpengalaman di bidangnya. Hasil laporan laboratorium tersedia secara cepat dan akurat, memudahkan para pasien dalam menjalankan pemeriksaan kesehatan mereka dengan nyaman.</span>
                </div>
        
                <div className="flex flex-col">
                    <h4 className=" text-[28px]">Paket Medical CheckUp</h4>
                    <p className="text-bold text-[15px] text-[#3e433f] text-center">*Paket Masa Diskon 50%*</p>
                </div>

                {/* Icon obat 1*/}
                <div className="flex flex-row mr-[140px] mt-[50px]">
                    <div className="items-start ">
                        <img src={obat1} alt="" className="w-[270px] h-[200px]"/>
                    </div>
                    <div className="px-[70px] ">
                        <span className="pl-[40px] text-[25px]">Paket Nano</span>
                        <div className="flex flex-col">
                            <ul className="pl-[40px]">
                                <li>1. GDA (Gula Darah Acak)</li>
                                <li>2. Asam Urat</li>
                                <li>3. Cholestrol</li>
                                <li>4. Trigliserida</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[25px]">Rp 95.000</span>
                    </div>
                </div>

                {/* Icon obat 2*/}
                <div className="flex flex-row mr-[140px] ">
                    <div className="items-start ">
                        <img src={obat2} alt="" className="w-[270px] h-[200px]"/>
                    </div>
                    <div className="px-[120px]">
                        <span  className="text-[25px]">Paket Mikro</span>
                         <div className="flex flex-col">
                            <ul >
                                <li>1. Darah Lengkap</li>
                                <li>2. GDP</li>
                                <li>3. Asam Urat</li>
                                <li>4. SGOT</li>
                                <li>5. SGPT</li>
                                <li>6. Cholesterol</li>
                                <li>7. Trigliserida</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[25px]">Rp 135.000</span>
                    </div>
                </div>

                {/* Icon obat 3*/}
                <div className="flex flex-row mr-[140px] mt-[50px]">
                    <div className="items-start ">
                        <img src={obat3} alt="" className="w-[270px] h-[200px]"/>
                    </div>
                    <div className="px-[120px] ">
                        <span  className="text-[25px]">Paket Mili</span>
                        <div className="flex flex-col">
                            <ul >
                                <li>1. Darah Lengkap</li>
                                <li>2. Urin Lengkap</li>
                                <li>3. GDP</li>
                                <li>4. 2JPP</li>
                                <li>5. Urea</li>
                                <li>6. Creatinin</li>
                                <li>7. Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[25px]">Rp 280.000</span>
                    </div>
                </div>

                {/* Icon obat 4*/}
                <div className="flex flex-row mr-[140px] mt-[50px]">
                    <div className="items-start ">
                        <img src={obat4} alt="" className="w-[270px] h-[200px]"/>
                    </div>
                    <div className="px-[120px]">
                        <span  className="text-[25px]">Paket Kilo</span>
                        <div className="flex flex-col">
                            <ul >
                                <li>1. Darah Lengkap</li>
                                <li>2. Urin Lengkap</li>
                                <li>3. GDP</li>
                                <li>4. 2JPP</li>
                                <li>5. Urea</li>
                                <li>6. Creatinin</li>
                                <li>7. Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[25px]">Rp 645.000</span>
                    </div>
                </div>

                {/* Icon obat 5*/}
                <div className="flex flex-row mr-[135px] mt-[50px]">
                    <div className="items-start ">
                        <img src={obat4} alt="" className="w-[270px] h-[200px]"/>
                    </div>
                    <div className="px-[120px] ">
                        <span  className="text-[25px]">Paket Mega</span>
                        <div className="flex flex-col">
                            <ul >
                                <li>1. Darah Lengkap</li>
                                <li>2. Urin Lengkap</li>
                                <li>3. GDP</li>
                                <li>4. 2JPP</li>
                                <li>5. Urea</li>
                                <li>6. Creatinin</li>
                                <li>7. Asam Urat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[25px]">Rp 1.060.000</span>
                    </div>
                </div>
                
                {/* Galeri Laboratorium */}
                <div className="w-full sm:w-[20%] mt-[40px] bg-white hover:text-[#101611]  px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    <span>Galeri Laboratorium</span>
                </div>
                <div className="flex flex-row  mt-[30px] sm:w-[75%] h-[300px]">
                    <div className="w-[400px]   px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri1} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri2} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px] px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri3} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row  mt-[30px] sm:w-[75%] h-[300px]">
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri4} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri5} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri6} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row  mt-[30px] sm:w-[75%] h-[300px]">
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri7} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri8} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
                        </a>
                    </div>
                    <div className="w-[400px]  px-5 py-3 h-[300px] ">
                        <a href="#">
                            <img src={galeri9} alt="" className="w-[350px] h-[250px] shadow-lg rounded-xl hover:brightness-75 transition-all duration-200 hover:scale-110"/>
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
            </div>

            {/* Blank */}
            <div className="h-[500px] bg-[#F5F7FA]"></div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default laboratorium;


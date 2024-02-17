import React from "react";
import IconLocation from "../../../../public/asset/icon/icon-location.svg";
import IconTelephone from "../../../../public/asset/icon/icon-telephone-footer.svg";
import IconEmail from "../../../../public/asset/icon/icon-email.svg";
import instagram from "../../../../public/asset/image/ig.png";
import fecebook from "../../../../public/asset/image/fb.png";
import youtube from "../../../../public/asset/image/youtube.png";

const Footer = () => {
    return (
        <div className="flex flex-col">

            <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-x-5 px-4 md:px-16 bg-[#278645] text-white">
                {/* Deskripsi */}
                <div className="p-2">
                    <div className="title h-[30%] pb-5 flex items-center text-xl text-center md:text-left font-bold border-b border-white">
                        Laboratorium Prodi S1 Administrasi Kesehatan Stikes Al-Su'aibah Palembang
                    </div>
                    <div className="content mt-3 pl-5 md:pl-0">
                        Fasilitas pendukung pendidikan dan pengembangan mahasiswa, berkonsep administrasi, manajemen, keuangan, dan kepemimpinan Islami untuk menciptakan tenaga administrasi kesehatan unggul dan berintegritas di tingkat nasional.
                    </div>
                </div>
             
              
                {/* Hubungi Kami */}
                <div className="p-2">

                    <div className="title h-[30%] justify-center flex items-center text-xl pb-2 font-bold border-b border-white md:justify-start">
                        Contact Us
                    </div>
                    <div className="content mt-3 pl-3 flex flex-col gap-3 ">
                        {/* Instagram */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={IconLocation} alt="" width={25} />
                            <span className="flex items-center">
                            Jl. Suka Bangun II No.1451, Suka Bangun, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961
                            </span>
                        </div>


                        {/* Fecebook */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={IconTelephone} alt="" width={25} />
                            <span className="flex items-center">
                            0817-7999-2808
                            </span>
                        </div>


                        {/* You Tube */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={IconEmail} alt="" width={25} />
                            <span className="flex items-center">
                                abcd@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Ikuti Kami */}
                <div className="p-2">
                    <div className="title h-[30%] justify-center flex items-center text-xl pb-2 font-bold border-b border-white md:justify-start ">
                        Ikuti Kami
                    </div>
                    <div className="content mt-3 pl-2 flex flex-col gap-3 ">
                        {/* Instagram */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={instagram} alt="" width={45} />
                            <span className="flex items-center mt-[8px]">
                                stikesalsuaibah
                            </span>
                        </div>

                        {/* Fecebook */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={fecebook} alt="" width={45} />
                            <span className="flex items-center mt-[8px]">
                                Stikes Al-Suaibah
                            </span>
                        </div>

                        {/* You Tube */}
                        <div className="flex flex-row gap-3 items-start">
                            <img src={youtube} alt="" width={43} />
                            <span className="flex items-center mt-[8px]">
                                AdminitrasiKesehatanAlsuaibah
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-[#21753c] text-white w-full h-[75px]">
                Copyright © 2024 STIKES Al-Su'aibah Palembang | Made with 🌟 5 Codes

            </div>
        </div>
    );
};

export default Footer;

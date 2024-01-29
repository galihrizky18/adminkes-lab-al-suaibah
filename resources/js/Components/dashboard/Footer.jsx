import React from "react";
import IconLocation from "../../../../public/asset/icon/icon-location.svg";
import IconTelephone from "../../../../public/asset/icon/icon-telephone-footer.svg";
import IconEmail from "../../../../public/asset/icon/icon-email.svg";

const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 py-5 gap-x-5 px-16 bg-[#278645] text-white ">
                {/* Desc */}
                <div className="p-2 ">
                    <div className="title h-[30%] pb-5 flex items-center text-xl text-center font-bold border-b border-white">
                        Laboratorium Prodi S1 Administrasi Kesehatan Stikes Al-
                        Su'aibah Palembang
                    </div>
                    <div className="content mt-3 pl-5">
                        Fasilitas pendukung pendidikan dan pengembangan
                        mahasiswa, berkonsep administrasi, manajemen, keuangan,
                        dan kepemimpinan Islami untuk menciptakan tenaga
                        administrasi kesehatan unggul dan berintegritas di
                        tingkat nasional.
                    </div>
                </div>

                {/* Contact Us */}
                <div className="p-2">
                    <div className="title h-[30%] justify-center flex items-center text-xl pb-2 font-bold border-b border-white">
                        Contact Us
                    </div>
                    <div className="content mt-3 pl-3 flex flex-col gap-3">
                        {/* location */}
                        <div className="flex flex-row gap-3 items-start ">
                            <img src={IconLocation} alt="" width={25} />
                            <span className="flex items-center">
                                Jl. Suka Bangun II No.1451, Suka Bangun, Kec.
                                Sukarami, Kota Palembang, Sumatera Selatan 30961
                            </span>
                        </div>

                        {/* Telephone */}
                        <div className="flex flex-row gap-3 items-start ">
                            <img src={IconTelephone} alt="" width={25} />
                            <span className="flex items-center">
                                0817-7999-2808
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-row gap-3 items-start ">
                            <img src={IconEmail} alt="" width={25} />
                            <span className="flex items-center">
                                abcdefg@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-[#21753c] text-white w-full h-[75px] ">
                Copyright © 2024 STIKES Al-Su'aibah Palembang | Made with 🌟 5
                Codes
            </div>
        </div>
    );
};

export default Footer;

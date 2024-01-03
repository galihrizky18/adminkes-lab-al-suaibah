import React from "react";

const Footer = () => {
    return (
        <div className="grid grid-cols-3 py-3 gap-x-5 px-10 bg-[#278645] text-white ">
            {/* Desc */}
            <div className="p-2">
                <div className="title h-[30%] flex items-center text-xl pb-2 font-bold border-b border-white">
                    Laboratorium Prodi S1 Administrasi Kesehatan Stikes Al-
                    Su'aibah Palembang
                </div>
                <div className="content mt-3  ">
                    Fasilitas pendukung pendidikan dan pengembangan mahasiswa,
                    berkonsep administrasi, manajemen, keuangan, dan
                    kepemimpinan Islami untuk menciptakan tenaga administrasi
                    kesehatan unggul dan berintegritas di tingkat nasional.
                </div>
            </div>

            {/* Contact Us */}
            <div className="p-2">
                <div className="title h-[30%] flex items-center text-xl pb-2 font-bold border-b border-white">
                    Contact Us
                </div>
                <div className="content mt-3    ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    error aliquid, quisquam et soluta sit libero, aperiam magni
                    perspiciatis laborum, voluptate magnam eos? Autem rerum
                    atque, dolorum voluptatem quis ratione numquam recusandae
                    quaerat ea facilis, expedita iure? Odio, sit iste!
                </div>
            </div>
        </div>
    );
};

export default Footer;

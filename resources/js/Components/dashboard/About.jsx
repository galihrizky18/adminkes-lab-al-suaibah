import React from "react";
import Gedung from "../../../../public/asset/gedung-stikes.jpg";

const About = () => {
    return (
        <div className="h-full flex  items-center">
            {/* screen >=sm */}
            <div
                className="h-[95%] hidden sm:flex w-full flex-row items-center "
                style={{
                    backgroundImage: `url(${Gedung})`,
                    backgroundPosition: "left 850px top 80px",
                }}
            >
                <div
                    className="caps  h-[105%] px-16 py-10 w-full relative z-5 bg-[#278645] text-white "
                    style={{
                        clipPath: "polygon(0 0, 75% 0, 50% 100%, 0 100%)",
                    }}
                >
                    <div className="caption w-[70%]  ">
                        <div className="title font-bold text-2xl font-open pb-2 px-3 border-b border-white">
                            LABORATORIUM PRODI S1 ADMINISTRASI KESEHATAN
                        </div>
                        <div className="desc mt-5 mr-36">
                            Laboratorium Program Studi S1 Administrasi Kesehatan
                            di STIKES AL-SU'AIBAH Palembang merupakan suatu
                            fasilitas penting yang mendukung keberhasilan
                            pendidikan dan pengembangan mahasiswa. Laboratorium
                            ini dirancang untuk memenuhi kebutuhan praktikum,
                            penelitian, dan pengembangan keilmuan dalam bidang
                            administrasi kesehatan. Dengan memadukan konsep
                            administrasi, manajemen, keuangan, dan kepemimpinan
                            dengan nilai-nilai islami, laboratorium ini
                            bertujuan untuk melahirkan tenaga administrasi
                            kesehatan yang unggul, berintegritas, dan mampu
                            bersaing di tingkat nasional.
                        </div>
                    </div>
                </div>
            </div>

            {/* anddroid screen */}
            <div className="sm:hidden flex flex-col h-full w-full px-3 py-5 text-white bg-[#278645]">
                <div className="title font-bold text-2xl text-center font-open pb-2 px-3 border-b border-white">
                    LABORATORIUM PRODI S1 ADMINISTRASI KESEHATAN
                </div>
                <div className="desc text-justify mt-3 overflow-auto">
                    Laboratorium Program Studi S1 Administrasi Kesehatan di
                    STIKES AL-SU'AIBAH Palembang merupakan suatu fasilitas
                    penting yang mendukung keberhasilan pendidikan dan
                    pengembangan mahasiswa. Laboratorium ini dirancang untuk
                    memenuhi kebutuhan praktikum, penelitian, dan pengembangan
                    keilmuan dalam bidang administrasi kesehatan. Dengan
                    memadukan konsep administrasi, manajemen, keuangan, dan
                    kepemimpinan dengan nilai-nilai islami, laboratorium ini
                    bertujuan untuk melahirkan tenaga administrasi kesehatan
                    yang unggul, berintegritas, dan mampu bersaing di tingkat
                    nasional.
                </div>
            </div>
        </div>
    );
};

export default About;

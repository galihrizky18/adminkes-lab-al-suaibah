import React from "react";
import Gedung from "../../../../public/asset/gedung-stikes.jpg";

const About = () => {
    return (
        <div className="h-full flex items-center">
            {/* Layar >= sm */}
            <div
                className="h-[95%] hidden sm:flex w-full flex-row items-center bg-cover"
                style={{
                    backgroundImage: `url(${Gedung})`,
                    backgroundPosition: "left 850px top 80px",
                }}
            >
                <div

                    className="caps  h-[105%] px-16 py-10 w-full relative z-5 bg-[#278645] text-white  "

                    style={{
                        clipPath: "polygon(0 0, 75% 0, 50% 100%, 0 100%)",
                    }}
                >

                    <div className="caption w-[70%]  ">
                        <div className="title font-bold text-2xl font-open pb-2 px-3 border-b border-white ">
                        KEUNGGULAN PRODI
                        </div>
                        <div className="desc mt-5 mr-36">
                            <h1>1.Dosen yang profesional berasal dari Universitas Ternama di Indonesia dan praktisi kesehatan berpengalaman</h1>
                            <h1>2.Rancangan perkuliahan dan kurikulum yang up to date sesuai kebutuhan</h1>
                            <h1>3.Tempat magang dan praktik yang berkualitas di beberapa institusi pemerintah,swasta,dan lembaga masyarakat</h1>
                            <h1>4.Lulusan prodi Administrasi Kesehatan dibekali dasar administrasi,manajemen,keuangan,dan kepeminpinan yang menjamin siap kerja di berbagai jenis dan jenjang pelayanan kesehatan</h1>
                            <h1>5.Memfasilitasi alumni jika ingin melanjutkan Pendidikan Magister S2 Kesehatan di kampus terbaik di Indonesia maupun luar negeri</h1>
                            <h1>6.Biaya akademik dapat diangsur secara fleksibel</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layar Android */}
            <div className="sm:hidden flex flex-col h-full w-full px-3 py-5 text-white bg-[#278645]">
                <div className="title font-bold text-2xl text-center font-open pb-2 px-3 border-b border-white">
                KEUNGGULAN PRODI
                </div>
                <div className="desc text-justify mt-3 overflow-auto">
                            <h1>1.Dosen yang profesional berasal dari Universitas Ternama di Indonesia dan praktisi kesehatan berpengalaman</h1>
                            <h1>2.Rancangan perkuliahan dan kurikulum yang up to date sesuai kebutuhan</h1>
                            <h1>3.Tempat magang dan praktik yang berkualitas di beberapa institusi pemerintah,swasta,dan lembaga masyarakat</h1>
                            <h1>4.Lulusan prodi Administrasi Kesehatan dibekali dasar administrasi,manajemen,keuangan,dan kepeminpinan yang menjamin siap kerja di berbagai jenis dan jenjang pelayanan kesehatan</h1>
                            <h1>5.Memfasilitasi alumni jika ingin melanjutkan Pendidikan Magister S2 Kesehatan di kampus terbaik di Indonesia maupun luar negeri</h1>
                            <h1>6.Biaya akademik dapat diangsur secara fleksibel</h1>
                </div>
            </div>
        </div>
    );
};

export default About;

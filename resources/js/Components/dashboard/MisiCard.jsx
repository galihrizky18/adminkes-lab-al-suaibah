import React from "react";

const MisiCard = () => {
    return (
        <div className="bg-[#1e4aa8] w-full md:w-[80%] shadow-lg text-white px-7 py-5 rounded-xl hover:scale-105 transition-all">
            <div className="title w-full bg-[#ffffff] text-[#1e4aa8] px-3 py-1 shadow-lg rounded-xl text-center text-2xl font-bold">
                Misi
            </div>
            <div className="mt-7">
                <ul className="flex flex-col gap-4">
                    <li className="grid grid-cols-[auto,1fr]">
                        <div className="w-[70px] md:w-auto flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg">
                                1
                            </span>
                        </div>
                        <div className="mt-2">
                            Menyelenggarakan proses pendidikan Sarjana
                            Administrasi Kesehatan, unggul dibidang standar mutu
                            pelayanan kesehatan berbasis IT dengan menghasilkan
                            lulusan berkualitas, berjiwa enterpreneur dan
                            berlandaskan nilai-nilai kemanusian dan agama.
                        </div>
                        <div className="w-[70px] md:w-auto flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg">
                                2
                            </span>
                        </div>
                        <div className="mt-2">
                            Menyelenggarakan penelitian dan pengembangan skill administrasi kesehatan yang bermanfaat bagi ilmu pengetahuan dan IT di Instansi dan institusi kesehatan.
                        </div>
                        <div className="w-[70px] md:w-auto flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg">
                                3
                            </span>
                        </div>
                        <div className="mt-2">
                            Menyelenggarakan pengabdian kepada masyarakat dibidang administrasi kesehatan dalam upaya penerapam hasil riset  dan mutu pelayanan keshatan.
                        </div>
                        <div className="w-[70px] md:w-auto flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg">
                                4
                            </span>
                        </div>
                        <div className="mt-2">
                            Menyelenggarakan sistem manajemen pendidikan tinggi administrasi kesehatan yang berkompeten serta bertanggung jawab sesuai dengan disiplin ilmu.
                        </div>
                        <div className="w-[70px] md:w-auto flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg">
                                5
                            </span>
                        </div>
                        <div className="mt-2">
                            Menjalin kemiitraan dan kerja sama dibidang keilmuan administrasi kesehatan yang berbasis IT dengan berbagai Instansi dan institusi kesehatan.
                        </div>
                        
                    </li>
                    {/* Tambahkan item misi lainnya */}
                </ul>
            </div>
        </div>
    );
};

export default MisiCard;

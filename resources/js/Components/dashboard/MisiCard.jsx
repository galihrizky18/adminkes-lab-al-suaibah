import React from "react";

const MisiCard = () => {
    return (
        <div className="bg-[#1e4aa8] xl:w-[80%] sm:w-[120%] shadow-lg text-white px-7 justify-center py-5 rounded-xl hover:scale-105 transition-all  xl:ml-[130px]">
            <div className="title w-full bg-[#ffffff] text-[#1e4aa8] px-3 py-1 shadow-lg rounded-xl text-center text-2xl font-bold ">
                Misi
            </div>
            <div className="mt-7">
                <ul className="flex flex-col gap-4">
                    <li
                        className="grid "
                        style={{ gridTemplateColumns: "0.5fr 5fr" }}
                    >
                        <div className="xl:w-[70%] sm:w-[20px] flex flex-col justify-center items-center ">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg  ">
                                1
                            </span>
                        </div>
                        <div className="xl:text-[16px] sm:text-[18%]">
                            Menyelenggarakan proses pendidikan Sarjana
                            Administrasi Kesehatan, unggul dibidang standar mutu
                            pelayanan kesehatan berbasis IT dengan menghasilkan
                            lulusan berkualitas, berjiwa enterpreneur dan
                            berlandaskan nilai-nilai kemanusian dan agama.
                        </div>
                    </li>
                    <li
                        className="grid "
                        style={{ gridTemplateColumns: "0.5fr 5fr" }}
                    >
                        <div className="xl:w-[70px] flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg  ">
                                2
                            </span>
                        </div>
                        <div>
                            Menyelenggarakan penelitian dan pengembangan skill
                            administrasi kesehatan yang bermanfaat bagi ilmu
                            pengetahuan dan IT di instansi dan institusi
                            kesehatan.
                        </div>
                    </li>
                    <li
                        className="grid "
                        style={{ gridTemplateColumns: "0.5fr 5fr" }}
                    >
                        <div className="xl:w-[70px] flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg  ">
                                3
                            </span>
                        </div>
                        <div>
                            Menyelenggarakan pengabdian kepada masyarakat
                            dibidang administrasi kesehatan dalam upaya
                            penerapan hasil riset dan mutu pelayanan kesehatan.
                        </div>
                    </li>
                    <li
                        className="grid "
                        style={{ gridTemplateColumns: "0.5fr 5fr" }}
                    >
                        <div className="xl:w-[70px] flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg  ">
                                4
                            </span>
                        </div>
                        <div>
                            Menyelenggarakan sistem manajemen pendidikan tinggi
                            administrasi kesehatan yang berkompeten serta
                            bertanggung jawab sesuai dengan disiplin ilmu.
                        </div>
                    </li>
                    <li
                        className="grid "
                        style={{ gridTemplateColumns: "0.5fr 5fr" }}
                    >
                        <div className="xl:w-[70px] flex flex-col justify-center items-center">
                            <span className="bg-[#ffffff] text-[#1e4aa8] flex justify-center items-center font-bold w-full text-xl rounded-lg  ">
                                5
                            </span>
                        </div>
                        <div>
                            Menjalin kemitraan dan kerja sama dibidang keilmuan
                            administrasi kesehatan yang berbasis IT dengan
                            berbagai instansi dan institusi kesehatan.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MisiCard;

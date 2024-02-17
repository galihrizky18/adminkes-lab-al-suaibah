import React from "react";

const VisiCard = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-[#278645] xl:w-[30%] sm:w-[30%] shadow-lg text-white px-7 py-5  rounded-xl hover:scale-110 transition-all xl:mt-[20px]">
                <div className="title w-full bg-[#ffffff] text-[#278645] px-3 py-1 shadow-lg rounded-xl text-center text-sm sm:text-base md:text-lg xl:text-2xl font-bold ">
                    Visi
                </div>
                <div className="mt-3 text-sm sm:text-base md:text-lg xl:text-base">
                    Menjadi Program Studi Administrasi Kesehatan yang berkarakter
                    islami, unggul dan kompeten dalam bidang Standar Mutu Pelayanan
                    Kesehatan berbasis IT serta memiliki daya saing di tingkat
                    nasional pada tahun 2029.
                </div>
            </div>
        </div>
    );
};

export default VisiCard;

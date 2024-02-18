import React from "react";

const CardData = ({ color1, color2, judul, angka }) => {
    return (
        <div
            className={` h-full bg-gradient-to-r from-[${color1}] to-[${color2}] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#afafaf] to-[#656565] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#FC8097] to-[#E24177] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#FFC67B] to-[#F98335] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#3dc5f1] to-[#077ea4] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#3fa559] to-[#037720] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
            // className={`w-[90%] h-full bg-gradient-to-r from-[#08e6e6] to-[#089191] text-white flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-xl shadow-lg`}
        >
            <div className="text-5xl">{angka}</div>
            <div className="font-bold text-center">{judul}</div>
        </div>
    );
};

export default CardData;

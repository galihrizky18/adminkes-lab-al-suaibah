import React from "react";
import VisiCard from "./VisiCard";
import MisiCard from "./MisiCard";

const VisiMisi = () => {
    return (
        <div className="font-montserrat  rounded-xl flex flex-col items-center px-3 py-8 shadow-lg bg-white">
            <div className="title w-full text-center pb-3 font-montserrat text-3xl sm:text-3xl font-bold text-[#27863f] border-b border-gray-300">
                Visi dan Misi
            </div>
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-5 justify-center items-center">
                <VisiCard />
                <MisiCard />
            </div>
        </div>
    );
};

export default VisiMisi;

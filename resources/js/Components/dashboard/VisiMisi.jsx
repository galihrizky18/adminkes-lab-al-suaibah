import React from "react";
import VisiCard from "./VisiCard";
import MisiCard from "./MisiCard";

const VisiMisi = () => {
    return (
        <div className="font-montserrat  rounded-xl flex flex-col items-center px-3 py-2 shadow-lg ">
            <div className="title w-full text-center pb-3 font-montserrat text-3xl sm:text-3xl font-bold text-[#27863f] border-b border-gray-300">
                Visi dan Misi
            </div>
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center mt-5 px-5 py-3">
                <VisiCard />
                <MisiCard />
            </div>
        </div>
    );
};

export default VisiMisi;

import React from "react";
import { useEffect } from "react";

const ComplateTask = () => {


    return (
        <div className="mt-3 px-3 flex flex-col justify-center items-center ">
            <div className="title w-full text-center pb-3 text-xl border-b border-gray-300">
                TERIMA KASIH
            </div>
            <div className="body mt-3 ">
                Data Telah Di Rekam, Harap Menunggu Info Selanjutnya Melalui{" "}
                
                <span className="font-bold">Nomor</span> dan{" "}
                <span className="font-bold">Email</span> Anda
                <h1 className="text-xl text-center font-bold">Harap Tunggu Sampai PDF Terdownload</h1>
            </div>
        </div>
    );
};

export default ComplateTask;

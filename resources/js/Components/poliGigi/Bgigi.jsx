import React from "react";

const Bgigi = () => {
  return (
    <div className="p-4 rounded-lg">
      <h1 className="text-lg font-bold mb-2 text-center">BEFORE DAN AFTER</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/asset/image/dkt.png" alt="New Photo" className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 mx-auto md:mx-0" />
        <img src="/asset/image/bgigi.png" alt="" className="rounded-lg shadow-lg hover:opacity-75 transition duration-300 w-32 md:w-48 h-auto mx-auto md:mx-0" />
        <div className="flex flex-col justify-center ml-0 md:ml-4">
          <h1 className="text-sm font-bold mb-2 md:mb-4 text-center md:text-left">Kami telah menangani puluhan pasien perbulan dengan berbagai masalah kesehatan gigi mereka seperti :</h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Crown Gigi Anak</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Behel Gigi</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Scaling</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Veneer Gigi</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Penambalan Gigi</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Bleaching</h2>
            <h2 className="border border-black p-2 mb-2 rounded-md hover:scale-105">Gigi Tiruan Lengkap</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgigi;

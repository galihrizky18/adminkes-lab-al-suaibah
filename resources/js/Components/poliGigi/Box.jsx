import React from 'react';

const Box = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-full sm:h-screen">
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Butuh Perawatan Gigi</h2>
        <p className="text-gray-700 mb-2">Perawatan gigi akan ditangani langsung oleh tim dokter gigi umum dan spesialis kami.</p>
        <img src="/asset/image/pga.png" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Ingin Konsultasi</h2>
        <p className="text-gray-700 mb-2">Hubungi atau kunjungi langsung ke klinik Stikes Al-Su'aibah Palembang kami.</p>
        <img src="/asset/image/d2.png" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto" />
      </div>
    </div>
  );
};

export default Box;

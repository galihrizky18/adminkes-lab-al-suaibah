import React from 'react';

const Comeon = () => {
  return (
    <div className="text-center bg-gray-300 p-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      {/* Letakkan gambar di atas teks */}
      <img src="/asset/image/d1.png" alt="animasi" className="rounded-full w-64 h-64 mx-auto" />
      <h1 className="text-3xl font-bold">Jadi apa yang kamu tunggu?</h1>
      <p className="text-lg text-gray-700 mb-4">Percayakan perawatan gigi anda dan keluarga kepada klinik Stikes Al-Su'Aibah Palembang.</p>
      {/* Teks reservasi dengan prop onClick */}
      <button className="border border-gray-700 p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-400">
        <a href="http://127.0.0.1:8000/pendaftaran/pasien-baru" className="text-black text-xl font-bold mr-2">Reservasi sekarang</a>
        <span className="text-xl">&#8594;</span>
      </button>
    </div>
  );
};

export default Comeon;

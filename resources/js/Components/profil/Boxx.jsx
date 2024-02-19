import React from 'react';

const Boxx = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-full sm:h-screen">
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Praktisi</h2>
        <p className="text-gray-700 mb-2">Rumah Sakit Pemerintah/Swasta, Puskesmas, Klinik, Instansi Pemerintah mis. Dinas Kesehatan, Kementerian Kesehatan, Bappenas/Bappeda, BPJS, BPOM, & BKKBN, Lembaga Asuransi Kesehatan Swasta, Non Government Organization (NGO) mis. PMI, Save The Children, CISDI, dll. Lembaga dunia mis. WHO, UNICEF, dll. </p>
        <img src="/asset/image/1.jpeg" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto mb-4" />
      </div>
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Akademisi</h2>
        <p className="text-gray-700 mb-2">Dosen (lanjut magister (S-2) terlebih dahulu) atau tenaga pendidik di Berbagai Kampus Pemerintah/Swasta. Peneliti di litbang instansi pemerintah/NGO.</p>
        <img src="/asset/image/2.jpeg" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto mb-4" />
      </div>
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Wirausaha</h2>
        <p className="text-gray-700 mb-2">Mendirikan/Merintis usaha terkait kesehatan berbasis teknologi Misal. Penggunaan Platform digital analisis data kesehatan, penggunaan platform digital informasi kesehatan, dll.</p>
        <img src="/asset/image/3.jpeg" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto mb-4" />
      </div>
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-200">
        <h2 className="text-xl font-bold mb-2 text-green-500">Cpns</h2>
        <p className="text-gray-700 mb-2">Di STIKES Al-Su'Aibah Palembang, kami tidak hanya memberikan pendidikan berkualitas, tetapi juga membuka pintu menuju berbagai kesempatan karier, termasuk CPNS.</p>
        <img src="/asset/image/pn.jpeg" alt="animasi" className="rounded-full w-32 sm:w-64 h-32 sm:h-64 mx-auto mb-4" />
      </div>
    </div>
  );
};

export default Boxx;

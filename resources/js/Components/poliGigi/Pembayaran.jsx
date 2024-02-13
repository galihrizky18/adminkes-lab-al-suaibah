import React from 'react';

const Pembayaran = () => {
  return (
    <div className="container mx-auto px-4 py-8 justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Metode Pembayaran</h1>
      <p className="text-gray-600 text-center">Anda tidak perlu khawatir tentang pembayaran di klinik gigi kami. Kami menyediakan berbagai opsi pembayaran yang fleksibel dan aman, sehingga Anda dapat fokus pada perawatan kesehatan gigi Anda dengan tenang.</p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 ">
          <img src="/asset/image/asuransi.jpeg" alt="Pembayaran Cash" className="rounded-full w-32 h-32 mx-auto transition duration-300 transform hover:scale-110" />
          <h2 className="text-xl font-semibold mb-2 text-center">Pembayaran Asuransi </h2>
          <br />
          <p className="text-gray-600 text-justify">Pembayaran via asuransi memudahkan pasien memanfaatkan cakupan asuransi kesehatan mereka di klinik kami, dengan proses klaim yang disederhanakan.</p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 ">
          <img src="/asset/image/cash.jpeg" alt="Pembayaran dengan Asuransi" className="rounded-full w-32 h-32 mx-auto transition duration-300 transform hover:scale-110" />
          <h2 className="text-xl font-semibold mb-2 text-center">Pembayaran Non Asuransi</h2>
          <br />
          <p className="text-gray-600 text-justify">Pembayaran non-asuransi di klinik gigi tidak melibatkan klaim asuransi, memberi pasien fleksibilitas pembayaran.</p>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;

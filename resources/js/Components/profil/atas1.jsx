import React from 'react';
import Foto1 from "@/Components/profil/foto1";
import Bawah from "@/Components/profil/Bawah";

const atas1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center">
            <marquee behavior="scroll" direction="left">
              <h1 className="text-lg font-bold mb-2 text-center te">STIKES AL-SU’AIBAH PALEMBANG</h1>
            </marquee>
            <br />
            <img src="/asset/image/pf.png" alt="animasi"  />
          </div>
          <div className="mt-6">
            <p className="text-sm text-justify text-gray-700">Administrasi Kesehatan adalah suatu kegiatan perencanaan, pelaksanaan, dan pengendalian, serta pengawasan dan pertanggungjawaban penyelenggaraan pembangunan kesehatan. Program Studi Administrasi Kesehatan pada STIKES AL-SU’AIBAH Palembang membekali keilmuan administrasi, manajemen, keuangan dan kepemimpinan serta kewirausahaan untuk melahirkan tenaga administrasi kesehatan yang berkarakter islami, unggul dan kompeten dalam bidang standar mutu pelayanan kesehatan berbasis IT serta memiliki daya saing di tingkat Nasional pada tahun 2023.</p>
            <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">STIKES AL-SU’AIBAH PALEMBANG</h1>
            <hr class="my-4 border-gray-300"></hr>
            <br />
            <img src="/asset/image/br.png" alt="animasi" className="transition duration-300 transform hover:scale-110" />
          <br />
          <hr class="my-4 border-gray-300"></hr>
            <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">BIAYA PENDIDIKAN</h1>
            <hr class="my-4 border-gray-300"></hr>
            <img src="/asset/image/bp.png" alt="animasi" className="transition duration-300 transform hover:scale-110"/>
            <br />
            <p className="text-sm text-justify text-gray-700">Tingkatkan karier Anda di dunia kesehatan! Bergabunglah dengan kami di STIKES Al Suaibah Palembang dan mulailah perjalanan Anda menuju masa depan yang cerah sebagai tenaga kesehatan profesional dengan biaya yang terjangkau. Temukan peluang pendidikan dan pengembangan diri yang tak tertandingi. Bersama, kita bisa menciptakan perubahan positif dalam masyarakat dan memberikan dampak yang besar bagi kesehatan publik. Bergabunglah sekarang dan wujudkan impian Anda!</p>
            <hr class="my-4 border-gray-300"></hr>
            <br />
            <Foto1 />
            <hr class="my-4 border-gray-300"></hr>
            <Bawah />
          </div>
        </div>
      </div>
    </div>
  );
};

export default atas1;

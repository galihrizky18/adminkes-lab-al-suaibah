import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { MantineProvider } from "@mantine/core";
import Footer from "@/Components/dashboard/Footer";
import CollapseComponents from "@/Components/apotek/CollapseComponents";
import CollapseComponents1 from "@/Components/apotek/CollapseComponents1";
import CollapseComponents2 from "@/Components/apotek/CollapseComponents2";
import CollapseComponents3 from "@/Components/apotek/CollapseComponents3";
import CollapseComponents4 from "@/Components/apotek/CollapseComponents4";
import CollapseComponents5 from "@/Components/apotek/CollapseComponents5";

const Apotek = () => {
    return (
      <MantineProvider>
        <Head title="Apotek" />
  
        {/* Navbar */}
        <Navbar />
  
        {/* Body */}
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
          {/* Title */}
          <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
            Apotek
          </div>
  
          <div className="flex flex-col items-center"> 
            <img
                src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2024/01/Omzet-apotek.png?w=700&ssl=1"
                alt=""
                className="w-full max-w-full mb-4 border border-[#278645] rounded-xl width-[750px]"
                style={{ width: "850px", height:"550px" }}
            />
          </div>
          
          {/* Pelayanan Farmasi */}
          <div className="bg-[#278645] w-full h-full sm:w-full md:w-full lg:w-[105%] xl:w-[85%] 2xl:w-[50%] mx-auto shadow-lg text-white px-7 py-5 rounded-xl hover:scale-110 transition-all">
            <div className="bg-[#ffffff] text-[#278645] px-3 py-1 shadow-lg rounded-xl text-center text-2xl font-bold mb-4 lg:text-left">
              <h2 className="text-center"> Pelayanan Farmasi</h2>
            </div>
            <div className="text-white-500 text-justify">
              Pelayanan farmasi merupakan salah satu standar pelayanan kefarmasian yang harus ada di apotek sesuai dengan peraturan yang berlaku. Selain untuk memenuhi standar pelayanan apotek, aspek pelayanan farmasi klinik di apotek juga dapat meningkatkan nilai jual apotek. Tidak hanya itu, memberikan pelayanan yang baik di apotek juga dapat meningkatkan jumlah pelanggan, omzet, dan membuat pelanggan loyal terhadap apotek. Disini akan dibahas mengenai pelayanan farmasi yang bisa dilakukan di apotek dan berbagai kiat untuk meningkatkan pelayanan di apotek.
            </div>
          </div>

    
          {/* Informasi Apotek */}
          <div className="w-full sm:w-[90%] flex flex-col gap-5 rounded-xl px-5 py-7 shadow-lg bg-white ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <CollapseComponents title="Waspada, Obat-Obat Tertentu yang Sering Disalahgunakan!" />
                
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/08/Untitled-design.png?w=788&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
              <div>
                <CollapseComponents1 title="Cara Apoteker Mencegah Pembelian Obat Ilegal Secara Online" />
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/11/Untitled-design-15-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
              <div>
                
                <CollapseComponents2 title="Obat Paten vs Obat Generik, Apa Perbedaannya?" />
                
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/12/obat-paten-vs-generik-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
              <div>
                <CollapseComponents3 title="Peran Apoteker pada Layanan Telefarmasi di Apotek" />
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/06/Dokter-2-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
              <div>
                <CollapseComponents4 title="Informasi yang Harus Disampaikan Saat Pelanggan Membeli Obat di Apotek" />
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/12/obat-paten-vs-generik-1-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
              <div>
                <CollapseComponents5 title="Aturan Minum Obat : Sebelum Makan, Sesudah Makan, Saat Makan, Apa Perbedaannya?" />
                <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/08/Untitled-design-13-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
              </div>
            </div>
          </div>
        </div>

      {/* tambahan */}

      <div className="border-4 border-solid border-[#278645] rounded-lg p-6 md:p-10 max-w-2xl mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h2 className="text-3xl font-bold text-[#278645] mb-4">Area fasilitas pelayanan kesehatan</h2>
      <p className="text-lg text-[#278645] text-justify">
        Anda bisa mengamati apa saja fasilitas kesehatan yang ada di sekitar apotek. Seperti rumah sakit, klinik, puskesmas, atau dokter praktik mandiri. Hal ini akan berpengaruh pada jenis produk apa saja yang kebanyakan dicari pelanggan setelah mengunjungi fasilitas pelayanan kesehatan tersebut. Contoh, jika apotek berada di sekitar rumah sakit, Anda bisa menyediakan sediaan farmasi terutama untuk pengobatan kronis, multivitamin, dan alat kesehatan. Untuk klinik, dapat dilihat pelayanan kliniknya, apakah klinik kecantikan, klinik bersalin, klinik gigi, atau klinik umum. Untuk klinik gigi, Anda dapat menyediakan obat kumur, dental flos, obat anti nyeri dan pasta gigi khusus.
      </p>
      <img
        src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/02/Untitled-design-8-jpg.webp?resize=1536%2C864&ssl=1"
        alt="Apotek"
        className="mt-4 w-full h-auto border border-[#1e4aa8] rounded-md"
      />
    </div>

    {/* Gamabar area */}

    <div className="w-full p-4 flex flex-col items-center bg-[#278645] mt-20">
    <div>
        <h2 className="text-[32px] mb-4 border-b-2 border-[#ffffff] text-white text-center">Gambar Area Fasilitas Apotek</h2>
    </div>
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 ml-4 sm:ml-0">
        {/* Layanan 1 */}
        <div className="flex flex-col gap-6 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
            <img src="https://i.pinimg.com/236x/eb/96/3d/eb963da11b875eb996ac6690039c3bf5.jpg" alt="" />
        </div>

        {/* Layanan 2 */}
        <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[360px] lg:w-[360px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
            <img src="https://i.pinimg.com/236x/3c/4b/3e/3c4b3ed833bc3c0fc2ed30971c8f7f80.jpg" alt="" />
        </div>

        {/* Layanan 3 */}
        <div className="flex flex-col gap-6 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
           <img src="https://i.pinimg.com/564x/5c/00/4b/5c004b7ee153412f3e4a6604c29a22db.jpg" alt="" />
        </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-8 mt-4">
        {/* Layanan 4 */}
        <div className="flex flex-col gap-6 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
            <img src="https://i.pinimg.com/236x/0f/75/09/0f75098af9a4bfaef2c7ddf766f2354b.jpg" alt="" />
        </div>

        {/* Layanan 5 */}
        <div className="flex flex-col gap-6 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] shadow-md rounded-xl bg-[#ffffff] hover:scale-110 transition-all duration-200">
            <img src="https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/299693852_415644360547814_4343029053923731381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K4AA6L_kW5gAX90j_vc&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBWOOvmvcoWtycaei9w2a7wa-orCpmj9aVrjUmGPxJM6A&oe=65D05144" alt="" />
        </div>
    </div>
</div>





        {/* About */}
        <div className="bg-[#1e4aa8] w-full h-full sm:w-full md:w-full lg:w-[105%] xl:w-[85%] 2xl:w-[50%] mx-auto shadow-lg text-white px-7 py-5 rounded-xl hover:scale-110 transition-all mt-10 md:mt-20">
      <div className="bg-[#ffffff] text-[#1e4aa8] px-3 py-1 shadow-lg rounded-xl text-center text-2xl font-bold mb-4 lg:text-left">
        <h2 className="text-center">Tentang Kami</h2>
      </div>
      <div className="text-white-500 text-justify">
        <p>Apotek STIKES AL-SU'AIBAH PALEMBANG berkomitmen untuk memberikan pelayanan kesehatan terbaik kepada masyarakat. Dengan tim profesional dan produk berkualitas, kami siap mendukung kebutuhan kesehatan Anda.</p>
        <p style={{ marginTop: '20px' }}>Apotek STIKES AL-SU'AIBAH PALEMBANG merupakan bagian integral dari lembaga pendidikan tinggi STIKES AL-SU'AIBAH yang berkomitmen untuk memberikan layanan kesehatan terbaik kepada mahasiswa, tenaga pengajar, dan masyarakat sekitar. Apotek ini berperan penting dalam mendukung kebutuhan obat dan perawatan kesehatan bagi seluruh komunitas kampus.</p>
        <p style={{ marginTop: '20px' }}>Laboratorium Prodi S1 Administrasi Kesehatan di STIKES AL-SU'AIBAH PALEMBANG memberikan pengalaman praktis yang mendalam kepada mahasiswa. Laboratorium ini dirancang untuk memfasilitasi pembelajaran teori yang diperoleh dalam program S1 Administrasi Kesehatan melalui pengalaman praktis yang terintegrasi.</p>
        <p style={{ marginTop: '20px' }}>Dengan peralatan dan fasilitas modern, laboratorium ini memungkinkan mahasiswa untuk mengembangkan keterampilan praktis dalam manajemen administrasi kesehatan, termasuk pengelolaan inventaris, penanganan informasi pasien, dan proses administratif lainnya. Prodi ini bertujuan untuk melahirkan lulusan yang siap terjun ke dunia administrasi kesehatan dengan pengetahuan yang kuat dan keterampilan praktis yang diperoleh dari pengalaman laboratorium yang berkualitas.</p>
      </div>
    </div>

        {/* Blank */}
        <div className="h-[100px] bg-[#F5F7FA]"></div>
        {/* Footer */}
        <Footer />
      </MantineProvider>
    );
  };

export default Apotek;

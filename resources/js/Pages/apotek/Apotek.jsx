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
          className="w-full max-w-[800px] h-auto mb-4 border border-[#278645] rounded-xl"
        />
      </div>

          
          {/* Pelayanan Farmasi */}
          <div className="bg-[#278645] w-full sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] mx-auto shadow-lg text-white px-4 py-4 sm:px-6 sm:py-5 rounded-xl hover:scale-110 transition-all mt-5 sm:mt-8 md:mt-12 lg:mt-16">
              <div className="bg-[#ffffff] text-[#278645] px-3 py-1 shadow-lg rounded-xl text-center text-lg sm:text-xl lg:text-2xl font-bold mb-3 lg:text-left">
                <h2 className="text-center">Pelayanan Farmasi</h2>
              </div>
              <div className="text-white-500 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
                Pelayanan farmasi merupakan salah satu standar pelayanan kefarmasian yang harus ada di apotek sesuai dengan peraturan yang berlaku. Selain untuk memenuhi standar pelayanan apotek, aspek pelayanan farmasi klinik di apotek juga dapat meningkatkan nilai jual apotek. Tidak hanya itu, memberikan pelayanan yang baik di apotek juga dapat meningkatkan jumlah pelanggan, omzet, dan membuat pelanggan loyal terhadap apotek. Disini akan dibahas mengenai pelayanan farmasi yang bisa dilakukan di apotek dan berbagai kiat untuk meningkatkan pelayanan di apotek.
              </div>
            </div>


    
          {/* Informasi Apotek */}
          <div className="w-full sm:w-[90%] flex flex-col gap-5 rounded-xl px-5 py-7 shadow-lg bg-white ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/08/Untitled-design.png?w=788&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents title="Waspada, Obat-Obat Tertentu yang Sering Disalahgunakan!" />
                
              </div>
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/11/Untitled-design-15-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents1 title="Cara Apoteker Mencegah Pembelian Obat Ilegal Secara Online" />
                
              </div>
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/12/obat-paten-vs-generik-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents2 title="Obat Paten vs Obat Generik, Apa Perbedaannya?" />
              
              </div>
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/06/Dokter-2-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents3 title="Peran Apoteker pada Layanan Telefarmasi di Apotek" />
                
              </div>
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/12/obat-paten-vs-generik-1-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents4 title="Informasi yang Harus Disampaikan Saat Pelanggan Membeli Obat di Apotek" />
               
              </div>
              <div>
              <img
                  src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/08/Untitled-design-13-jpg.webp?w=700&ssl=1"
                  alt=""
                  className="w-full max-w-full mb-4"
                />
                <CollapseComponents5 title="Aturan Minum Obat : Sebelum Makan, Sesudah Makan, Saat Makan, Apa Perbedaannya?" />
                
              </div>
            </div>
          </div>
        </div>

      {/* tambahan */}

      <div className="border-4 border-solid border-[#278645] rounded-lg p-4 md:p-6 lg:p-8 max-w-md mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#278645] mb-2 md:mb-4">Area fasilitas pelayanan kesehatan</h2>
  <p className="text-sm md:text-base lg:text-lg text-[#278645] text-justify">
    Anda bisa mengamati apa saja fasilitas kesehatan yang ada di sekitar apotek. Seperti rumah sakit, klinik, puskesmas, atau dokter praktik mandiri. Hal ini akan berpengaruh pada jenis produk apa saja yang kebanyakan dicari pelanggan setelah mengunjungi fasilitas pelayanan kesehatan tersebut. Contoh, jika apotek berada di sekitar rumah sakit, Anda bisa menyediakan sediaan farmasi terutama untuk pengobatan kronis, multivitamin, dan alat kesehatan. Untuk klinik, dapat dilihat pelayanan kliniknya, apakah klinik kecantikan, klinik bersalin, klinik gigi, atau klinik umum. Untuk klinik gigi, Anda dapat menyediakan obat kumur, dental flos, obat anti nyeri dan pasta gigi khusus.
  </p>
  <img
    src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/02/Untitled-design-8-jpg.webp?resize=768%2C432&ssl=1"
    alt="Apotek"
    className="mt-3 w-full h-auto border border-[#1e4aa8] rounded-md"
  />
</div>


    {/* Gamabar area */}

    <div className="w-full p-4 flex flex-col items-center bg-[#278645] mt-8 sm:mt-20">
  <div>
    <h2 className="text-2xl sm:text-4xl mb-4 border-b-2 border-[#ffffff] text-white text-center">Gambar Area Fasilitas Apotek</h2>
  </div>
  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 ml-4 sm:ml-0">
    {/* Layanan 1 */}
    <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
      <img src="https://i.pinimg.com/236x/eb/96/3d/eb963da11b875eb996ac6690039c3bf5.jpg" alt="" className="w-full h-auto rounded-xl" />
    </div>

    {/* Layanan 2 */}
    <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
      <img src="https://i.pinimg.com/236x/3c/4b/3e/3c4b3ed833bc3c0fc2ed30971c8f7f80.jpg" alt="" className="w-full h-auto rounded-xl" />
    </div>

    {/* Layanan 3 */}
    <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
      <img src="https://i.pinimg.com/564x/5c/00/4b/5c004b7ee153412f3e4a6604c29a22db.jpg" alt="" className="w-full h-auto rounded-xl" />
    </div>
  </div>
  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-4 mt-4">
    {/* Layanan 4 */}
    <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] bg-[#ffffff] rounded-xl shadow-md hover:scale-110 transition-all duration-200">
      <img src="https://i.pinimg.com/236x/0f/75/09/0f75098af9a4bfaef2c7ddf766f2354b.jpg" alt="" className="w-full h-auto rounded-xl" />
    </div>

    {/* Layanan 5 */}
    <div className="flex flex-col gap-4 p-4 w-full sm:w-full md:w-[350px] lg:w-[350px] shadow-md rounded-xl bg-[#ffffff] hover:scale-110 transition-all duration-200">
      <img src="https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/299693852_415644360547814_4343029053923731381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K4AA6L_kW5gAX90j_vc&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBWOOvmvcoWtycaei9w2a7wa-orCpmj9aVrjUmGPxJM6A&oe=65D05144" alt="" className="w-full h-auto rounded-xl" />
    </div>
  </div>
</div>






        {/* About */}
        <div className="bg-[#1e4aa8] w-full sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] mx-auto shadow-lg text-white px-4 py-4 sm:px-6 sm:py-5 rounded-xl hover:scale-110 transition-all mt-5 sm:mt-8 md:mt-12 lg:mt-16">
        <div className="bg-[#ffffff] text-[#1e4aa8] px-3 py-1 shadow-lg rounded-xl text-center text-lg sm:text-xl lg:text-2xl font-bold mb-3 lg:text-left">
          <h2 className="text-center">Tentang Kami</h2>
        </div>
        <div className="text-white-500 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
          <p>Apotek STIKES AL-SU'AIBAH PALEMBANG berkomitmen untuk memberikan pelayanan kesehatan terbaik kepada masyarakat. Dengan tim profesional dan produk berkualitas, kami siap mendukung kebutuhan kesehatan Anda.</p>
          <p style={{ marginTop: '15px' }}>Apotek STIKES AL-SU'AIBAH PALEMBANG merupakan bagian integral dari lembaga pendidikan tinggi STIKES AL-SU'AIBAH yang berkomitmen untuk memberikan layanan kesehatan terbaik kepada mahasiswa, tenaga pengajar, dan masyarakat sekitar. Apotek ini berperan penting dalam mendukung kebutuhan obat dan perawatan kesehatan bagi seluruh komunitas kampus.</p>
          <p style={{ marginTop: '15px' }}>Laboratorium Prodi S1 Administrasi Kesehatan di STIKES AL-SU'AIBAH PALEMBANG memberikan pengalaman praktis yang mendalam kepada mahasiswa. Laboratorium ini dirancang untuk memfasilitasi pembelajaran teori yang diperoleh dalam program S1 Administrasi Kesehatan melalui pengalaman praktis yang terintegrasi.</p>
          <p style={{ marginTop: '15px' }}>Dengan peralatan dan fasilitas modern, laboratorium ini memungkinkan mahasiswa untuk mengembangkan keterampilan praktis dalam manajemen administrasi kesehatan, termasuk pengelolaan inventaris, penanganan informasi pasien, dan proses administratif lainnya. Prodi ini bertujuan untuk melahirkan lulusan yang siap terjun ke dunia administrasi kesehatan dengan pengetahuan yang kuat dan keterampilan praktis yang diperoleh dari pengalaman laboratorium yang berkualitas.</p>
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

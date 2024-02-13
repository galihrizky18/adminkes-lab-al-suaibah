import React from "react";
import { MantineProvider } from "@mantine/core";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/dashboard/Footer";
import Image from "../../../../public/asset/image/gigi.jpg";
import Imagee from "../../../../public/asset/image/dokter.jpeg";
import Imagebg from "../../../../public/asset/image/bg.jpeg";
import ServicesList from "@/Components/poliGigi/ServiceList";
import ServiceCard from "@/Components/poliGigi/ServiceCard";
import TestimonialCard from "@/Components/poliGigi/TestimonialCard";
import NewPhoto from "@/Components/poliGigi/NewPhoto";
import Bgigi from "@/Components/poliGigi/Bgigi";
import Atas from "@/Components/poliGigi/Atas";
import Box from "@/Components/poliGigi/Box";
import Comeon from "@/Components/poliGigi/Comeon";
import Info from "@/Components/poliGigi/Info";
import TestimonialCarousel from "@/Components/poliGigi/TestimonialCarousel";
import Sc from "@/Components/poliGigi/Sc";
import Pembayaran from "@/Components/poliGigi/Pembayaran";

const PoliGigi = () => {
  return (
    <MantineProvider>
      <Head title="Poli Umum" />

      {/* Navbar */}
      <Navbar />
     
      {/* Body */}
      <div className="w-full flex flex-col justify-center items-center p-5 sm:p-10 ">
        {/* Title */}
        <div className="w-full sm:w-1/2 bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
          Poli Gigi
        </div>
        <Atas />
        <Box />
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
        <img src={Imagee} alt="" className="mr-4 w-full sm:w-auto mb-4 sm:mb-0 object-cover h-65 w-65" />
          <div>
            <h1 className="text-green-600 text-2xl sm:text-3xl font-bold">Berani Tunjukkan Senyum Sehatmu!</h1>
            <p className="text-gray-600 mt-2 md:text-justify lg:text-left">
                Jaga senyum sehat keluarga Anda dengan perawatan gigi di klinik Stikes Al-Sua'ibah Palembang. Kami selalu memberikan pelayanan yang hangat dan ramah serta berusaha membuat kunjungan Anda menjadi pengalaman yang nyaman dan menyenangkan.
            </p>
            <br />
            <ServicesList />
          </div>
        </div>
        {/* Body */}
        <h1 className="text-green-600 text-2xl sm:text-3xl font-bold">Our Services</h1>
        <p className="text-center text-gray-600 mt-2">
          Dokter gigi spesialis kami yang handal dan kompeten,siap membantu masalah kesehatan gigi Anda.Pilih Perawatanmu
          sekarang!
        </p>
        <br />
        <Sc />
        <br />
        <Comeon />
        <br />
        {/* Testimonial */}
        <h1 className="text-green-600 text-2xl sm:text-3xl font-bold">Testimonial</h1>
        <h2 className="text-center text-gray-600 mt-2">
          Kami berkompeten untuk memberikan senyum yang lebih indah untuk Anda sekeluarga dengan berbagai layanan
          perawatan gigi untuk dewasa dan anak hingga layanan dental estetika dan berbagai Testimonial dari beberapa
          pelanggan kami yang memiliki kepuasan tersendiri di klinik kami
        </h2>
        <br />
        <TestimonialCarousel />  
        <Bgigi />
        <Pembayaran />
      </div>
      {/* Footer */}
      <Footer />
    </MantineProvider>
  );
};

export default PoliGigi;

import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

//import fotonya


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Riski Febrian Algafuri',
      testimonial: 'Saya sangat senang dengan pelayanan di klinik gigi ini. Dokternya sangat ramah dan profesional. Saya merasa nyaman selama proses perawatan dan hasilnya pun sangat memuaskan. Terima kasih banyak.',
      imageSrc: '/asset/image/imp.png'
    },
    {
      name: 'Aka Ramadhan',
      testimonial: 'Klinik gigi ini benar-benar luar biasa! Dokternya sangat ahli dan peralatan yang digunakan sangat modern. Saya merasa sangat percaya diri dengan senyum baru saya setelah menjalani perawatan di sini.',
      imageSrc: '/asset/image/penamgi.png'
    },
    {
      name: 'Hanif Aqil',
      testimonial: 'Saya selalu khawatir dengan kunjungan ke dokter gigi, tetapi setelah mengunjungi klinik ini, semua kekhawatiran saya hilang. Dokternya sangat sabar dan menjelaskan setiap langkah perawatan dengan detail. Saya sangat puas dengan hasilnya.',
      imageSrc: '/asset/image/pgs.png'
    },
    {
      name: 'Alvino Adiananta',
      testimonial: 'Klinik gigi ini benar-benar memberikan perawatan yang berkualitas. Mereka sangat memperhatikan kebersihan dan keamanan selama pandemi COVID-19. Saya merasa aman dan nyaman selama perawatan.',
      imageSrc: '/asset/image/sclng.png'
    },
    {
      name: 'Adiguna W Putra',
      testimonial: 'Saya sudah menjadi pelanggan setia klinik gigi ini selama bertahun-tahun. Mereka selalu memberikan pelayanan yang terbaik dan hasil perawatan yang konsisten. Saya tidak akan pernah ragu untuk merekomendasikan klinik ini kepada teman dan keluarga.',
      imageSrc: '/asset/image/psg.png'
    },
    // Tambahkan testimonial lainnya di sini
  ];

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <div className="testimonial-carousel">
      <TestimonialCard {...testimonials[currentIndex]} />
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105" onClick={prevTestimonial}>&lt; Sebelumnya</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105" onClick={nextTestimonial}>Selanjutnya &gt;</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

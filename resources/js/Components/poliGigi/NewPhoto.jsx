import React from "react";

const NewPhoto = () => {
  return (
    <div className="relative">
     <img src="/asset/image/bg.jpeg" alt="New Photo" class="w-screen h-[80vh] rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
      <div className="absolute inset-0 flex items-center">
        <div className="text-white ml-20">
          <h1 className="text-lg font-bold mb-8">Jadi apa yang kamu tunggu?</h1>
          <h1 className="text-sm">Percayakan perawatan gigi anda dan keluarga kepada klinik kami</h1>
        </div>
      </div>
    </div>
  );
};

export default NewPhoto;

import React from "react";

const foto1 = () => {
  return (
    <div className="p-4 rounded-lg relative overflow-hidden">
      <img
        src="/asset/image/mou.png"
        alt="New Photo"
        className="w-full h-auto max-w-1/2 object-cover transition duration-300 transform hover:scale-105 rounded-lg"
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
};

export default foto1;

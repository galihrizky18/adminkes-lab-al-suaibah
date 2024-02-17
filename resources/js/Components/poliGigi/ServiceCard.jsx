import React from "react";


const ServiceCard = ({ title, description, href }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-justify">{description}</p>
      </div>
      <div className="px-4 py-2 mt-4">
        <a
          href={href}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from 'react';

const TestimonialCard = ({ name, testimonial, imageSrc }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
      <div className="px-6 py-4">
        <img src={imageSrc} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <div className="text-black font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-800 text-base">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

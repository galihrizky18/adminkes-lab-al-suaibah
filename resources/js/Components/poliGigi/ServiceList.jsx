import React from "react";

const services = [
    "Perawatan Gigi Umum",
    "Pembersihan Gigi dan Scaling",
    "Perawatan Saluran Akar",
    "Pasang Gigi Palsu",
    "Pencabutan Gigi",
    "Pemeriksaan Gigi Rutin",
    "Pemasangan Kawat Gigi",
    // untuk menambahkan list yg lain disini memasukannya
];

const ServicesList = () => {
    return (
        <ul className="text-gray-600 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2">
            {services.map((service, index) => (
                <li key={index} className="mb-2">
                    <span className="inline-block mr-2">&#10003;</span>
                    {service}
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;

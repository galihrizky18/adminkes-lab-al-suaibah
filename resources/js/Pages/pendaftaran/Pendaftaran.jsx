import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/pendaftaran/Card";

import NewPatient from "../../../../public/asset/icon/icon-new-patient.svg";
import OldPatient from "../../../../public/asset/icon/icon-old-patient.svg";
import Footer from "@/Components/dashboard/Footer";

const Pendaftaran = () => {
    const menu = [
        {
            key: "pasienBaru",
            label: "PENDAFTRAN PASIEN BARU",
            img: NewPatient,
            url: "/pendaftaran/pasien-baru",
            warna: "36b33c",
        },
        {
            key: "pasienLama",
            label: "PASIEN LAMA",
            img: OldPatient,
            url: "/pendaftaran/pasien-lama",
            warna: "3641a5",
        },
    ];

    return (
        <div>
            <Head title="Pendaftaran" />

            {/* Navbar */}
            <Navbar />

            <div className="flex h-[85vh] justify-center items-center">
                <div className="card-pendaftaran w-[90%] sm:w-[65%] h-[80%] px-5 py-3 rounded-xl shadow-lg bg-white">
                    <div className="title text-center pb-2 text-2xl text-[#638d72] font-bold border-b border-gray-400">
                        PENDAFTARAN PASIEN
                    </div>
                    <div className="card mt-7 flex flex-row justify-center flex-wrap gap-x-5 gap-y-3 ">
                        {menu.map((data, i) => (
                            <Link
                                key={i}
                                className={`w-80 rounded-xl shadow-lg bg-[#36b33c] hover:scale-105 transition-all duration-300`}
                                href={`${data.url}`}
                            >
                                <Card title={data.label} img={data.img} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Pendaftaran;

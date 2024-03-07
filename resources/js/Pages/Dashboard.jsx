import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/dashboard/Hero";
import LayananSection from "@/Components/dashboard/LayananSection";
import About from "@/Components/dashboard/About";

import iconPhone from "../../../public/asset/icon/icon-telephone.svg";
import JadwalDokter from "@/Components/dashboard/JadwalDokter";
import Footer from "@/Components/dashboard/Footer";
import VisiMisi from "@/Components/dashboard/VisiMisi";

const Dashboard = ({jadwalDokter}) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head title="Dashboard" />

            {/* Header Section */}
            <section className="bg-[#278645] flex flex-row px-5 sm:px-20 items-center h-14 font-open text-white">
                <div className="flex flex-row items-center gap-3">
                    <div className="icon">
                        <img src={iconPhone} alt="" width={30} />
                    </div>
                    <div className="number mr-3 text-sm sm:text-base">
                        0812-3456-78910
                    </div>
                    <span>|</span>
                    <div className="email ml-3 text-sm sm:text-base">
                        abcdefgh@gmail.com
                    </div>
                </div>
            </section>

            {/* Navbar */}
            <section className="sticky top-0 z-10">
                <Navbar />
            </section>

            <div className="flex flex-col gap-10">
                {/* Hero */}
                <section className="my-5 ">
                    <Hero />
                </section>

                {/* Layanan */}
                <section className="px-3 sm:px-10 ">
                    <LayananSection />
                </section>

                {/* Visi dan Misi  */}
                <section className="px-3 sm:px-10 ">
                    <VisiMisi />
                </section>

                {/* About */}
                <section className="my-5 ">
                    <About />
                </section>

                {/* Jadwal Dokter */}
                <section className="px-3 sm:px-10 ">
                    <JadwalDokter jadwalDokter={jadwalDokter}/>
                </section>
            </div>

            {/* Footer */}
            <section className="mt-10">
                <Footer />
            </section>
        </div>
    );
};

export default Dashboard;

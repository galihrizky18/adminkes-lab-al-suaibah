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

const Dashboard = () => {
    return (
        <div className="">
            <Head title="Dashboard" />

            {/* Header Section */}
            <section className="bg-[#278645] flex flex-row px-20 items-center h-14 font-open ">
                <div className=" flex flex-row w-full text-white items-center gap-3 ">
                    <div className="icon">
                        <img src={iconPhone} alt="" width={30} />
                    </div>
                    <div className="number mr-5">0817-7999-2808</div>
                    <span>|</span>
                    <div className="email">abcdefgh@gmail.com</div>
                </div>
            </section>

            {/* Navbar */}
            <section className="sticky top-0 z-10 ">
                <Navbar />
            </section>

            {/* Hero */}
            <section className="">
                <Hero />
            </section>

            {/* Layanan */}
            <section className="p-3 sm:p-10">
                <LayananSection />
            </section>

            {/* Visi dan Misi  */}
            <section className="p-3 sm:p-10">
                <VisiMisi />
            </section>

            {/* About */}
            <section className="mt-5 sm:h-[85vh]">
                <About />
            </section>

            {/* Jadwal Dokter */}
            <section className="p-3 sm:p-10">
                <JadwalDokter />
            </section>

            <h1 className=" h-[300px] " />

            {/* Footer */}
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Dashboard;

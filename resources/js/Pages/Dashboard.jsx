import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import LayananSection from "@/Components/LayananSection";

import iconPhone from "../../../public/asset/icon/icon-telephone.svg";

const Dashboard = () => {
    return (
        <div>
            <Head title="Dashboard" />

            {/* Header Section */}
            <section className="bg-[#278645] flex flex-row px-20 items-center h-14 font-open">
                <div className=" flex flex-row text-white items-center gap-3 ">
                    <div className="icon">
                        <img src={iconPhone} alt="" width={30} />
                    </div>
                    <div className="number mr-5">0812-1234-5678</div>
                    <span>|</span>
                    <div className="email">abcdefgh@gmail.com</div>
                </div>
            </section>

            {/* Navbar */}
            <section className="sticky top-0 z-10">
                <Navbar />
            </section>

            {/* Hero */}
            <section className="">
                <Hero />
            </section>

            {/* Layanan */}
            <section className="p-3 sm:p-10 ">
                <LayananSection />
            </section>

            <h1>Ini Dahboard</h1>
        </div>
    );
};

export default Dashboard;

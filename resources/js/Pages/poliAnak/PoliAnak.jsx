import React from "react";
import { MantineProvider } from "@mantine/core";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/dashboard/Footer";
import CollapseComponents from "@/Components/poliAnak/CollapseComponents";

const PoliAnak = () => {
    return (
        <MantineProvider>
            <Head title="Poli Umum" />

            {/* Navbar */}
            <Navbar />

            {/* Body */}
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center p-5 sm:p-10 ">
                {/* Title */}
                <div className="w-full sm:w-[50%] bg-white px-5 py-3 text-center font-bold text-2xl font-roboto text-[#237939] rounded-xl shadow-lg ">
                    Ruangan Umum Anak
                </div>

                {/* Body */}
                <div className="w-full sm:w-[90%] flex flex-col gap-5 rounded-xl px-5 py-7 shadow-lg bg-white ">
                    <CollapseComponents title="Persyaratan Pelayanan" />
                    <CollapseComponents title="Prosedur" />
                    <CollapseComponents title="Waktu Pelayanan" />
                    <CollapseComponents title="Biaya dan Tarif" />
                </div>
            </div>

            {/* Blank */}
            <div className="h-[500px] bg-[#F5F7FA]"></div>

            {/* Footer */}
            <Footer />
        </MantineProvider>
    );
};

export default PoliAnak;

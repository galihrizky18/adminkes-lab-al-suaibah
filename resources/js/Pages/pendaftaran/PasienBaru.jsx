import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Stepper from "@/Components/pendaftaran/pasienBaru/Stepper";

const PasienBaru = () => {
    return (
        <div>
            <Head title="Pasien Baru" />
            {/* Navbar   */}
            <Navbar />

            {/* Stepper */}
            <div className=" flex justify-center p-10  ">
                <Stepper />
            </div>
        </div>
    );
};

export default PasienBaru;

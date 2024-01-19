import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Stepper from "@/Components/pendaftaran/pasienLama/Stepper";

const PasienLama = () => {
    // Number Input
    const [noRM, setNoRM] = useState("");

    // Text Input
    const [namaPasien, setNamaPasien] = useState("");

    // Date Input
    const [tanggalLahir, setTanggalLahir] = useState("");

    // Data Pasien
    const dataPatient = [
        {
            name: "no_rekam_medik",
            value: noRM,
        },
        {
            name: "name",
            value: namaPasien,
        },
        {
            name: "birth",
            value: tanggalLahir,
        },
    ];

    return (
        <div>
            <Head title="Pasien Lama" />

            {/* Navbar */}
            <Navbar />

            {/* Card */}
            <div className=" flex justify-center p-5 sm:p-10 ">
                <Stepper
                    setNoRM={setNoRM}
                    setNamaPasien={setNamaPasien}
                    setTanggalLahir={setTanggalLahir}
                    dataPatient={dataPatient}
                />
            </div>
        </div>
    );
};

export default PasienLama;

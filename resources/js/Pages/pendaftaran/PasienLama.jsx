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
            name: "norm",
            value: noRM,
        },
        {
            name: "namaPasien",
            value: namaPasien,
        },
        {
            name: "tanggalLahir",
            value: tanggalLahir,
        },
    ];

    useState(() => {
        console.log(noRM);
    }, [noRM]);
    return (
        <div>
            <Head title="Pasien Lama" />

            {/* Navbar */}
            <Navbar />

            {/* Card */}
            <div className=" flex justify-center p-5 sm:p-10 ">
                <Stepper
                    setNoRM={setNoRM}
                    dataPatient={dataPatient}
                    setNamaPasien={setNamaPasien}
                    setTanggalLahir={setTanggalLahir}
                />
            </div>
        </div>
    );
};

export default PasienLama;

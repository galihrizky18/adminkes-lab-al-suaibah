import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Stepper from "@/Components/pendaftaran/pasienBaru/Stepper";

const PasienBaru = () => {
    // Radio
    const [radioKelaminValue, setRadioKelaminValue] = useState("");

    // Text Input
    const [textNikValue, setTextNikValue] = useState("");
    const [textNamaValue, setTextNamaValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

    // Number Input
    const [noHpValue, setNoHpValue] = useState("");

    // Search Input
    const [searchValueProv, setSearchValueProv] = useState("");
    const [searchValueCity, setSearchValueCity] = useState("");
    const [poliValue, setPoliValue] = useState("");
    const [dokterValue, setDokterValue] = useState("");

    // Date Input
    const [tanggalLahirValue, setTanggalLahirValue] = useState();
    const [dateJadwalKunjunganValue, setdateJadwalKunjunganValue] = useState();

    // TextArea Input
    const [alamatValue, setAlamatValue] = useState("");

    const dataPendaftar = [
        {
            name: "nik",
            value: textNikValue,
        },
        {
            name: "namaPasien",
            value: textNamaValue,
        },
        {
            name: "jenisKelamin",
            value: radioKelaminValue,
        },
        {
            name: "tanggalLahir",
            value: tanggalLahirValue,
        },
        {
            name: "provinsi",
            value: searchValueProv,
        },
        {
            name: "kota",
            value: searchValueCity,
        },
        {
            name: "alamat",
            value: alamatValue,
        },
        {
            name: "poli",
            value: poliValue,
        },
        {
            name: "jadwalKunjungan",
            value: dateJadwalKunjunganValue,
        },
        {
            name: "noHp",
            value: noHpValue,
        },
        {
            name: "email",
            value: emailValue,
        },
        {
            name: "dokter",
            value: dokterValue,
        },
    ];

    return (
        <div className="">
            <Head title="Pasien Baru" />
            {/* Navbar   */}
            <Navbar />

            {/* Stepper */}
            <div className=" flex justify-center p-5 sm:p-10 ">
                <Stepper
                    setRadioKelaminValue={setRadioKelaminValue}
                    setTextNikValue={setTextNikValue}
                    setTextNamaValue={setTextNamaValue}
                    setSearchValueProv={setSearchValueProv}
                    setSearchValueCity={setSearchValueCity}
                    setTanggalLahirValue={setTanggalLahirValue}
                    setAlamatValue={setAlamatValue}
                    // Clinic Section
                    setPoliValue={setPoliValue}
                    setdateJadwalKunjunganValue={setdateJadwalKunjunganValue}
                    setNoHpValue={setNoHpValue}
                    setEmailValue={setEmailValue}
                    setDokterValue={setDokterValue}
                    dataPendaftar={dataPendaftar}
                />
            </div>
        </div>
    );
};

export default PasienBaru;

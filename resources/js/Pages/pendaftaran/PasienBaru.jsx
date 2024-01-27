import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Stepper from "@/Components/pendaftaran/pasienBaru/Stepper";

const PasienBaru = ({ dataDokter, dataLayanan }) => {
    // Radio
    const [radioKelaminValue, setRadioKelaminValue] = useState("");

    // Text Input
    const [textNikValue, setTextNikValue] = useState("");
    const [textNamaValue, setTextNamaValue] = useState("");
    const [emailValue, setEmailValue] = useState("-");
    const [birthPlace, setBirthPlace] = useState("");
    const [religion, setReligion] = useState("");
    const [ethnic, setEthnic] = useState("");
    const [language, setLanguage] = useState("");
    const [education, setEducation] = useState("");
    const [job, setJob] = useState("");
    const [blood, setBlood] = useState("");
    const [marriage, setMarriage] = useState("");

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
            name: "name",
            value: textNamaValue,
        },
        {
            name: "gender",
            value: radioKelaminValue,
        },
        {
            name: "birth_place",
            value: birthPlace,
        },
        {
            name: "birth",
            value: tanggalLahirValue,
        },
        {
            name: "religion",
            value: religion,
        },
        {
            name: "ethnic",
            value: ethnic,
        },
        {
            name: "language",
            value: language,
        },
        {
            name: "education",
            value: education,
        },
        {
            name: "job",
            value: job,
        },
        {
            name: "blood",
            value: blood,
        },
        {
            name: "marriage",
            value: marriage,
        },
        {
            name: "province",
            value: searchValueProv,
        },
        {
            name: "city",
            value: searchValueCity,
        },
        {
            name: "address",
            value: alamatValue,
        },
        {
            name: "id_layanan",
            value: poliValue,
        },
        {
            name: "jadwal",
            value: dateJadwalKunjunganValue,
        },
        {
            name: "no_telepon",
            value: noHpValue,
        },
        {
            name: "email",
            value: emailValue,
        },
        {
            name: "id_dokter",
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
                    //
                    setBirthPlace={setBirthPlace}
                    setReligion={setReligion}
                    setEthnic={setEthnic}
                    setLanguage={setLanguage}
                    setEducation={setEducation}
                    setJob={setJob}
                    setBlood={setBlood}
                    setMarriage={setMarriage}
                    // Clinic Section
                    setPoliValue={setPoliValue}
                    setdateJadwalKunjunganValue={setdateJadwalKunjunganValue}
                    setNoHpValue={setNoHpValue}
                    setEmailValue={setEmailValue}
                    setDokterValue={setDokterValue}
                    dataPendaftar={dataPendaftar}
                    dataDokter={dataDokter}
                    dataLayanan={dataLayanan}
                />
            </div>
        </div>
    );
};

export default PasienBaru;

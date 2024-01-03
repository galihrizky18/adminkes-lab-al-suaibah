import React from "react";
import { useState } from "react";
import {
    MantineProvider,
    Select,
    TextInput,
    Radio,
    Textarea,
} from "@mantine/core";

const RegistrationSec = ({
    setRadioKelaminValue,
    setTextNikValue,
    setTextNamaValue,
    setSearchValueProv,
    setSearchValueCity,
    setTanggalLahirValue,
    setAlamatValue,
    dataPendaftar,
}) => {
    // Data Pendafter
    const getData = (name) => {
        return dataPendaftar
            ? dataPendaftar.find((e) => e.name === name).value
            : null;
    };

    const prov = [
        { value: "sumsel", label: "Sumatera Selatan" },
        { value: "sumut", label: "Sumatera Utara" },
        { value: "sumbar", label: "Sumatera Barat" },
    ];
    const city = [
        { value: "palembang", label: "Palembang" },
        { value: "jakarta", label: "Jakarta" },
        { value: "aceh", label: "Aceh" },
    ];
    return (
        <MantineProvider>
            <div className="mt-3 px-3">
                <div className="title text-center pb-3 text-xl border-b border-gray-300">
                    DATA PASIEN
                </div>
                <div className="form mt-3">
                    <div className="flex flex-col gap-3">
                        {/* Nomor Induk Penduduk */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Nomor Induk Penduduk (NIK)
                            </div>
                            <div className=" w-full">
                                <TextInput
                                    radius="md"
                                    placeholder="Nomor Induk Penduduk (NIK)"
                                    value={getData("nik")}
                                    onChange={(event) =>
                                        setTextNikValue(
                                            event.currentTarget.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* Nama Pasien */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Nama Pasien
                            </div>
                            <div className=" w-full">
                                <TextInput
                                    radius="md"
                                    placeholder="Nama Pasien"
                                    value={getData("namaPasien")}
                                    onChange={(event) =>
                                        setTextNamaValue(
                                            event.currentTarget.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* Jenis Kelamin */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Jenis Kelamin
                            </div>
                            <div className=" w-full flex flex-row ">
                                <Radio.Group
                                    onChange={setRadioKelaminValue}
                                    name="gender"
                                    className="w-full h-full "
                                    value={getData("jenisKelamin")}
                                >
                                    <div className="w-full h-full flex flex-row items-center gap-3 sm:gap-7 ">
                                        <Radio
                                            value="male"
                                            label="Laki-Laki"
                                            size="md"
                                        />
                                        <Radio
                                            value="female"
                                            label="Perempuan"
                                            size="md"
                                        />
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>

                        {/* Tanggal Lahir */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Tanggal Lahir
                            </div>
                            <div className=" w-full">
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    value={getData("tanggalLahir")}
                                    onChange={(e) =>
                                        setTanggalLahirValue(
                                            e.currentTarget.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* Provinsi */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Provinsi
                            </div>
                            <div className=" w-full">
                                <Select
                                    placeholder="Provinsi"
                                    value={getData("provinsi")}
                                    onChange={setSearchValueProv}
                                    data={prov}
                                    radius="md"
                                    searchable
                                    className="border border-b-violet-50"
                                />
                            </div>
                        </div>

                        {/* Kota */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Kota
                            </div>
                            <div className=" w-full">
                                <Select
                                    placeholder="Kota"
                                    value={getData("kota")}
                                    onChange={setSearchValueCity}
                                    data={city}
                                    radius="md"
                                    searchable
                                    className="border border-b-violet-50"
                                />
                            </div>
                        </div>

                        {/* Alamat */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Alamat
                            </div>
                            <div className=" w-full">
                                <Textarea
                                    value={getData("alamat")}
                                    onChange={(event) =>
                                        setAlamatValue(
                                            event.currentTarget.value
                                        )
                                    }
                                    radius="md"
                                    placeholder="Input placeholder"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default RegistrationSec;

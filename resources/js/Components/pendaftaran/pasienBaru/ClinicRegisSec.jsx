import React, { useEffect } from "react";
import { useState } from "react";
import { MantineProvider, Select, TextInput, NumberInput } from "@mantine/core";

const ClinicRegisSec = ({
    setPoliValue,
    setdateJadwalKunjunganValue,
    setNoHpValue,
    setEmailValue,
    setDokterValue,
    dataPendaftar,
}) => {
    // Data Pendafter
    const getData = (name) => {
        return dataPendaftar
            ? dataPendaftar.find((e) => e.name === name).value
            : null;
    };

    const poli = [
        { value: "poliumum", label: "Poli Umum" },
        { value: "polianak", label: "Poli Anak" },
        { value: "poligigi", label: "Poli Gigi" },
        { value: "apotek", label: "Apotek" },
        { value: "lab", label: "Laboratorium" },
        { value: "kia", label: "Kesehatan Ibu Anak" },
    ];
    const dokter = [
        { value: "galih", label: "Dr. Galih Rizky" },
        { value: "nur", label: "Dr. Nur Alfatiha" },
        { value: "mery", label: "Dr. Mery Suryani" },
        { value: "renal", label: "Dr. Renal Yusuf" },
        { value: "endah", label: "Dr. Endah Novareta" },
        { value: "deon", label: "Dr. Riana Dewi" },
        { value: "bila", label: "Dr. Senja Nabila" },
        { value: "mayang", label: "Dr. Mayang Sari" },
    ];

    return (
        <MantineProvider>
            <div className="mt-3 px-3">
                <div className="title text-center pb-3 text-xl border-b border-gray-300">
                    REGISTRASI POLI KLINIK
                </div>
                <div className="form mt-3">
                    <div className="flex flex-col gap-3">
                        {/* Pilih poli */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Poli
                            </div>
                            <div className=" w-full">
                                <Select
                                    placeholder="--- Pilih Poli ---"
                                    value={getData("poli")}
                                    onChange={setPoliValue}
                                    data={poli}
                                    radius="md"
                                    searchable
                                    className="border border-b-violet-50"
                                />
                            </div>
                        </div>

                        {/* Pilih Dokter */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Dokter
                            </div>
                            <div className=" w-full">
                                <Select
                                    placeholder="--- Pilih Dokter ---"
                                    value={getData("dokter")}
                                    onChange={setDokterValue}
                                    data={dokter}
                                    radius="md"
                                    searchable
                                    className="border border-b-violet-50"
                                />
                            </div>
                        </div>

                        {/* Pilih Jadwal */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Jadwal Kunjungan
                            </div>
                            <div className=" w-full">
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    value={getData("jadwalKunjungan")}
                                    onChange={(e) =>
                                        setdateJadwalKunjunganValue(
                                            e.currentTarget.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* No Hp */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Nomor Handphone
                            </div>
                            <div className=" w-full">
                                <NumberInput
                                    radius="md"
                                    placeholder="Nomor Handphone"
                                    value={getData("noHp")}
                                    onChange={setNoHpValue}
                                />
                            </div>
                        </div>

                        {/* Email*/}
                        <div className="item h-10 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Email
                            </div>
                            <div className=" w-full">
                                <TextInput
                                    radius="md"
                                    placeholder="Email"
                                    value={getData("email")}
                                    onChange={(event) =>
                                        setEmailValue(event.currentTarget.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default ClinicRegisSec;

import React from "react";
import { MantineProvider, Select, TextInput } from "@mantine/core";
import { layanan } from "../../../lib/ArrayData";

const ReviewStep = ({ dataPendaftar, dataDokter }) => {
    // Data Pendaftar
    const pasien = dataPendaftar;

    // Filter Data
    const getData = (name) => {
        return pasien ? pasien.find((e) => e.name === name).value : null;
    };

    // Selected Layanan
    const layanans = layanan.find(
        (item) => item.value === getData("id_layanan")
    );
    const selectedLayanan = layanans ? layanans.label : "";

    // Selected Dokter
    const dokters = dataDokter.find(
        (item) => item.id_dokter === getData("id_dokter")
    );
    const selectedDokter = dokters ? dokters.nama_dokter : "";

    return (
        <MantineProvider>
            <div className="mt-3 px-3">
                <div className="title text-center pb-3 text-xl border-b border-gray-300">
                    ULAS KEMBALI DATA
                </div>
                <div className="form mt-3">
                    <div className="flex flex-col gap-2">
                        {/* NIK*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                NIK
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("nik")}
                            </div>
                        </div>

                        {/* Nama Pasien*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Nama Pasien
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("name")}
                            </div>
                        </div>

                        {/* Tanggal Lahir*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Tanggal Lahir
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("birth")}
                            </div>
                        </div>

                        {/* Provinsi*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Provinsi
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("province")}
                            </div>
                        </div>

                        {/* Kota*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Kota
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("city")}
                            </div>
                        </div>

                        {/* Poli*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Poli
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {selectedLayanan}
                            </div>
                        </div>

                        {/* Dokter Terpilih*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Dokter
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {selectedDokter}
                            </div>
                        </div>

                        {/* Jadwal Kunjungan*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Jadwal Kunjungan
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("jadwal")}
                            </div>
                        </div>

                        {/* Nomor Telepon*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Nomor Telepon
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                {getData("no_telepon")}
                            </div>
                        </div>

                        {/* Email*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Email
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold">
                                {getData("email")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default ReviewStep;

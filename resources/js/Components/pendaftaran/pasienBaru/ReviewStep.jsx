import React from "react";
import { useState } from "react";
import { MantineProvider, Select, TextInput } from "@mantine/core";

const ReviewStep = () => {
    // Text Input
    const [noHpValue, setNoHpValue] = useState("");
    return (
        <MantineProvider>
            <div className="mt-3 px-3">
                <div className="title text-center pb-3 text-xl border-b border-gray-300">
                    ULAS KEMBALI DATA
                </div>
                <div className="form mt-3">
                    <div className="flex flex-col gap-2">
                        {/* Nama Pasien*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Nama Pasien
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                Yudi Asnanda
                            </div>
                        </div>

                        {/* Tanggal Lahir*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Tanggal Lahir
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                20/03/2023
                            </div>
                        </div>

                        {/* Provinsi*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Provinsi
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                Sumatera Selatan
                            </div>
                        </div>

                        {/* Kota*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Kota
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                Palembang
                            </div>
                        </div>

                        {/* Poli*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Poli
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                Poli Klinik Anak
                            </div>
                        </div>

                        {/* Jadwal Kunjungan*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Jadwal Kunjungan
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                13/04/2003
                            </div>
                        </div>

                        {/* Nomor Telepon*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Nomor Telepon
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                                08123456789
                            </div>
                        </div>

                        {/* Email*/}
                        <div className="item h-8 flex flex-row">
                            <div className="title w-[50%] flex items-center">
                                Email
                            </div>
                            <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold">
                                abcdefg@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default ReviewStep;

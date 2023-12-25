import React, { useEffect } from "react";
import { useState } from "react";
import { MantineProvider, Select, TextInput } from "@mantine/core";

const ClinicRegisSec = () => {
    // Search Input
    const [poliValue, setPoliValue] = useState("");

    // Date Input
    const [dateValue, setDateValue] = useState();

    // Text Input
    const [noHpValue, setNoHpValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

    const poli = [
        { value: "poliumum", label: "Poli Umum" },
        { value: "polianak", label: "Poli Anak" },
        { value: "poligigi", label: "Poli Gigi" },
        { value: "apotek", label: "Apotek" },
        { value: "lab", label: "Laboratorium" },
        { value: "kia", label: "Kesehatan Ibu Anak" },
    ];

    useEffect(() => {
        console.log(poliValue);
    }, [poliValue]);

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
                                    searchValue={poliValue}
                                    onSearchChange={setPoliValue}
                                    data={poli}
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
                                    onChange={(e) =>
                                        setDateValue(e.currentTarget.value)
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
                                <TextInput
                                    radius="md"
                                    placeholder="Nomor Handphone"
                                    value={noHpValue}
                                    onChange={(event) =>
                                        setNoHpValue(event.currentTarget.value)
                                    }
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
                                    value={emailValue}
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

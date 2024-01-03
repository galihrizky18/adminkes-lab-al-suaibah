import React from "react";
import { NumberInput, TextInput } from "@mantine/core";

const SearchPatient = ({
    setNoRM,
    setNamaPasien,
    setTanggalLahir,
    dataPatient,
}) => {
    // Data Pasien
    const getData = (name) => {
        return dataPatient
            ? dataPatient.find((e) => e.name === name).value
            : null;
    };
    return (
        <div className="mt-3 px-3 ">
            <div className="title text-center pb-3 text-xl border-b border-gray-300">
                CARI DATA PASIEN
            </div>

            {/* form */}
            <div className="mt-3 flex flex-col gap-3">
                {/* No Rekam Medik */}
                <div className="item h-10 flex flex-row ">
                    <div className="title w-[50%] flex items-center ">
                        Nomor Rekam Medik
                    </div>
                    <div className=" w-full">
                        <NumberInput
                            value={getData("norm")}
                            onChange={setNoRM}
                        />
                    </div>
                </div>

                {/* No Nama Pasien */}
                <div className="item h-10 flex flex-row ">
                    <div className="title w-[50%] flex items-center ">
                        Nama Pasien
                    </div>
                    <div className=" w-full">
                        <TextInput
                            value={getData("namaPasien")}
                            onChange={setNamaPasien}
                        />
                    </div>
                </div>

                {/* Tanggal Lahir */}
                <div className="item h-10 flex flex-row ">
                    <div className="title w-[50%] flex items-center ">
                        Tanggal Lahir
                    </div>
                    <div className=" w-full">
                        <TextInput
                            value={getData("tanggalLahir")}
                            onChange={setTanggalLahir}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPatient;

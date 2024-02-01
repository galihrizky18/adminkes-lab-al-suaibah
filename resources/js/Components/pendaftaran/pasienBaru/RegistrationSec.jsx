import React, { useEffect, useState } from "react";
import {
    MantineProvider,
    Select,
    TextInput,
    NumberInput,
    Radio,
    Textarea,
} from "@mantine/core";
import { region } from "../../../lib/RegionsIndonesia";

const RegistrationSec = ({
    setRadioKelaminValue,
    setTextNikValue,
    setTextNamaValue,
    setSearchValueProv,
    setSearchValueCity,
    setTanggalLahirValue,
    setAlamatValue,
    dataPendaftar,
    //
    setBirthPlace,
    setReligion,
    setEthnic,
    setLanguage,
    setEducation,
    setJob,
    setBlood,
    setMarriage,
}) => {
    const [kotas, setKotas] = useState();

    // Data Pendafter
    const getData = (name) => {
        return dataPendaftar
            ? dataPendaftar.find((e) => e.name === name).value
            : null;
    };

    // data Province
    const provinces = region.map((prov) => ({
        value: prov.provinsi,
        label: prov.provinsi,
    }));

    // data Kota sesuai Provinsi
    const getKotas = (province) => {
        const kota = region
            .filter(({ provinsi }) => provinsi === province)
            .flatMap(({ kota }) => kota);

        const newKota = kota.map((kotaItem) => ({
            value: kotaItem,
            label: kotaItem,
        }));

        setKotas(newKota);
    };

    useEffect(() => {
        getKotas(getData("province"));
    }, [getData("province")]);

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
                                <NumberInput
                                    radius="md"
                                    placeholder="Nomor Induk Penduduk (NIK)"
                                    value={getData("no_telepon")}
                                    onChange={setTextNikValue}
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
                                    value={getData("name")}
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
                                    value={getData("gender")}
                                >
                                    <div className="w-full h-full flex flex-row items-center gap-3 sm:gap-7">
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

                        {/* Tempat Lahir */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Tempat Lahir
                            </div>
                            <div className=" w-full">
                                <TextInput
                                    radius="md"
                                    placeholder="Tempat Lahir"
                                    value={getData("birth_place")}
                                    onChange={(event) =>
                                        setBirthPlace(event.currentTarget.value)
                                    }
                                />
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
                                    onChange={(e) =>
                                        setTanggalLahirValue(
                                            e.currentTarget.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* Agama Section */}
                        <div>
                            <div className="font-bold text-lg text-center bg-gray-200 p-2 m-3">
                                Agama
                            </div>
                            {/* Agama */}
                            <div className="item h-auto flex flex-row ">
                                <div className="title w-[50%] flex items-center">
                                    Agama
                                </div>
                                <div className=" w-full flex">
                                    <Radio.Group
                                        onChange={setReligion}
                                        name="religion"
                                        className="w-full h-full "
                                        value={getData("religion")}
                                    >
                                        <div
                                            className="w-full h-full grid items-center  sm:gap-x-1 sm:gap-y-3 "
                                            style={{
                                                gridTemplateColumns:
                                                    "repeat(3, 1fr)",
                                            }}
                                        >
                                            <Radio
                                                value="islam"
                                                label="Islam"
                                                size="md"
                                            />
                                            <Radio
                                                value="kristen-protestan"
                                                label="Kristen Protestan"
                                                size="md"
                                            />
                                            <Radio
                                                value="kristen-katolik"
                                                label="Kristen Katolik"
                                                size="md"
                                            />
                                            <Radio
                                                value="hindu"
                                                label="Hindu"
                                                size="md"
                                            />
                                            <Radio
                                                value="buddha"
                                                label="Buddha"
                                                size="md"
                                            />
                                            <Radio
                                                value="konghucu"
                                                label="Konghucu"
                                                size="md"
                                            />
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>

                            {/* Suku */}
                            <div className="item h-10 flex flex-row ">
                                <div className="title w-[50%] flex items-center">
                                    Suku
                                </div>
                                <div className=" w-full">
                                    <TextInput
                                        radius="md"
                                        placeholder="Suku"
                                        value={getData("ethnic")}
                                        onChange={(event) =>
                                            setEthnic(event.currentTarget.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Bahasa */}
                            <div className="item h-10 flex flex-row ">
                                <div className="title w-[50%] flex items-center">
                                    Bahasa
                                </div>
                                <div className=" w-full">
                                    <TextInput
                                        radius="md"
                                        placeholder="Bahasa"
                                        value={getData("language")}
                                        onChange={(event) =>
                                            setLanguage(
                                                event.currentTarget.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pendidikan */}
                        <div className="item h-auto flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Pendidikan
                            </div>
                            <div className=" w-full flex">
                                <Radio.Group
                                    onChange={setEducation}
                                    name="education"
                                    className="w-full h-full "
                                    value={getData("education")}
                                >
                                    <div
                                        className="w-full h-full grid items-center  sm:gap-x-1 sm:gap-y-3 "
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        <Radio
                                            value="tidak tamat sd"
                                            label="Belum / Tidak Tamat SD"
                                            size="md"
                                        />
                                        <Radio
                                            value="sd"
                                            label="SD"
                                            size="md"
                                        />
                                        <Radio
                                            value="sltp"
                                            label="SLTP"
                                            size="md"
                                        />
                                        <Radio
                                            value="slta"
                                            label="SLTA"
                                            size="md"
                                        />
                                        <Radio
                                            value="diploma"
                                            label="Diploma"
                                            size="md"
                                        />
                                        <Radio
                                            value="sarjana"
                                            label="Sarjana"
                                            size="md"
                                        />
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>

                        {/* Pekerjaan */}
                        <div className="item h-10 flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Pekerjaan
                            </div>
                            <div className=" w-full">
                                <TextInput
                                    radius="md"
                                    placeholder="Pekerjaan"
                                    value={getData("job")}
                                    onChange={(event) =>
                                        setJob(event.currentTarget.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Golongan Darah */}
                        <div className="item h-auto flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Golongan Darah
                            </div>
                            <div className=" w-full flex">
                                <Radio.Group
                                    onChange={setBlood}
                                    name="blood"
                                    className="w-full h-full "
                                    value={getData("blood")}
                                >
                                    <div
                                        className="w-full h-full grid items-center  sm:gap-x-1 sm:gap-y-3 "
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        <Radio value="a" label="A" size="md" />
                                        <Radio value="b" label="B" size="md" />
                                        <Radio
                                            value="ab"
                                            label="AB"
                                            size="md"
                                        />
                                        <Radio value="o" label="O" size="md" />
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>

                        {/* Status Perkawinan */}
                        <div className="item h-auto flex flex-row ">
                            <div className="title w-[50%] flex items-center">
                                Status Perkawinan
                            </div>
                            <div className=" w-full flex">
                                <Radio.Group
                                    onChange={setMarriage}
                                    name="marriage"
                                    className="w-full h-full "
                                    value={getData("marriage")}
                                >
                                    <div
                                        className="w-full h-full grid items-center  sm:gap-x-1 sm:gap-y-3 "
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        <Radio
                                            value="kawin"
                                            label="Kawin"
                                            size="md"
                                        />
                                        <Radio
                                            value="belum kawin"
                                            label="Belum Kawin"
                                            size="md"
                                        />
                                        <Radio
                                            value="janda"
                                            label="Janda"
                                            size="md"
                                        />
                                        <Radio
                                            value="duda"
                                            label="Duda"
                                            size="md"
                                        />
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>

                        {/* Alamat Section */}
                        <div>
                            <div className="font-bold text-lg text-center bg-gray-200 p-2 m-3">
                                Alamat
                            </div>
                            {/* Provinsi */}
                            <div className="item h-10 flex flex-row ">
                                <div className="title w-[50%] flex items-center">
                                    Provinsi
                                </div>
                                <div className=" w-full">
                                    <Select
                                        placeholder="Provinsi"
                                        value={getData("province")}
                                        onChange={setSearchValueProv}
                                        data={provinces}
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
                                        value={getData("city")}
                                        onChange={setSearchValueCity}
                                        data={kotas}
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
                                        value={getData("address")}
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
            </div>
        </MantineProvider>
    );
};

export default RegistrationSec;

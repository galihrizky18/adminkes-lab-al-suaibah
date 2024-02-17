import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import {
    Button,
    Group,
    TextInput,
    Box,
    Grid,
    NumberInput,
    Select,
    Textarea,
    Radio,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";
import {
    layanan,
    dataHematologi,
    dataSerologis,
    dataUrinalisa,
    dataMikrobiologi,
    dataFaeces,
    dataFaalHati,
    dataFaalGinjal,
    dataFaalJantung,
    dataMetabolismeKarbo,
    dataProfilLipid,
} from "@/lib/ArrayData";

const EditLabModal = ({ baseData }) => {
    // Validator Form
    const form = useForm({
        initialValues: {
            id_laboratorium: baseData.id_laboratorium,
            officer: baseData.officer,
            name: baseData.name,
            jk: baseData.jk,
            ttl: baseData.ttl,
            age: baseData.age,
            address: baseData.address,
            phone: baseData.phone,
            card_number: baseData.card_number,
            request_date: baseData.request_date,
            poli: baseData.poli[0].id_layanan,
            clinical_desc: baseData.clinical_desc,
            responsible: baseData.responsible,
            // Col2
            hematologi: baseData.hematologi,
            serologis: baseData.serologis,
            urinalisa: baseData.urinalisa,
            mikrobiologi: baseData.mikrobiologi,
            faeces: baseData.faeces,
            faal_hati: baseData.faal_hati,
            faal_ginjal: baseData.faal_ginjal,
            faal_jantung: baseData.faal_jantung,
            metabolisme_karbo: baseData.metabolisme_karbo,
            profil_lipid: baseData.profil_lipid,
            pemeriksaan_lainnya: baseData.pemeriksaan_lainnya,
        },

        validate: {
            officer: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            name: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            jk: isNotEmpty("Jenis Kelamin tidak boleh kosong"),
            ttl: isNotEmpty("Tempat Tanggal Lahir tidak boleh kosong"),
            age: isNotEmpty("Umur tidak boleh kosong"),
            address: isNotEmpty("Alamat tidak boleh kosong"),
            phone: isNotEmpty("No Telepon  tidak boleh kosong"),
            card_number: isNotEmpty("Nomor Kartu tidak boleh kosong"),
            request_date: isNotEmpty("Tanggal Permintaan tidak boleh kosong"),
            poli: isNotEmpty("Asal Poli tidak boleh kosong"),
            clinical_desc: isNotEmpty("Keterangan Klinis tidak boleh kosong"),
            responsible: isNotEmpty(
                "Penanggung Jawab / Paraf tidak boleh kosong"
            ),
            // Col2
            hematologi: isNotEmpty("Hematologi tidak boleh kosong"),
            serologis: isNotEmpty("Serologis tidak boleh kosong"),
            urinalisa: isNotEmpty("Urinalisa tidak boleh kosong"),
            mikrobiologi: isNotEmpty("Mikrobiologi tidak boleh kosong"),
            faeces: isNotEmpty("Faeces tidak boleh kosong"),
            faal_hati: isNotEmpty("Faal Hati tidak boleh kosong"),
            faal_ginjal: isNotEmpty("Faal Ginjal tidak boleh kosong"),
            faal_jantung: isNotEmpty("Faal Jantung tidak boleh kosong"),
            metabolisme_karbo: isNotEmpty(
                "Fungsi Metabolisme Karbohidrat tidak boleh kosong"
            ),
            pemeriksaan_lainnya: isNotEmpty(
                "Pemeriksaan Lain tidak boleh kosong"
            ),
            profil_lipid: isNotEmpty("Profil Lipid tidak boleh kosong"),
        },
    });

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/edit-data/lab", {
                newData: data,
            });

            if (response.data.message === "Success Edit Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/laboratorium");
            } else if (response.data.message === "Failed Edit Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message === "Fail Request") {
                Swal.fire({
                    title: "Failed Request",
                    text: "Failed Request To Database",
                    icon: "error",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect
    // useEffect(() => {}, [console.log(baseData)]);

    return (
        <Box
            className="flex flex-col gap-3"
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            {/* Data Pasien Section */}
            <section className="flex flex-col gap-3 w-full ">
                <div className="bg-gray-400 flex flex-row mt-3 items-center justify-center text-white text-xl font-bold h-10 ">
                    DATA PASIEN
                </div>
                <div className="px-5">
                    <Grid gutter="xl">
                        {/* kolom 1 */}
                        <Grid.Col
                            className="mt-4 flex flex-col gap-3"
                            span={{ base: 12, md: 6 }}
                        >
                            {/* Nama Pasien */}
                            <TextInput
                                label="Nama Pasien"
                                placeholder="Nama Pasien"
                                withAsterisk
                                {...form.getInputProps("name")}
                            />

                            {/* Jenis Kelamin */}
                            <div className="flex flex-col gap-2 ">
                                <label className="text-[.95rem] font-bold">
                                    Jenis Kelamin
                                </label>
                                <Radio.Group
                                    name="gender"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("jk")}
                                >
                                    <div className="w-full h-full flex flex-row items-center gap-3 sm:gap-7 ">
                                        <Radio
                                            value="male"
                                            label="Laki-Laki"
                                            size="sm"
                                        />
                                        <Radio
                                            value="female"
                                            label="Perempuan"
                                            size="sm"
                                        />
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* Input TTL */}
                            <TextInput
                                label="Tempat Tanggal Lahir"
                                placeholder="Kota, Tanggal"
                                withAsterisk
                                {...form.getInputProps("ttl")}
                            />

                            {/* Umur */}
                            <div className="flex flex-row gap-3 items-center ">
                                <div className="w-36">
                                    <NumberInput
                                        label="Umur"
                                        placeholder="Umur"
                                        width="sm"
                                        withAsterisk
                                        {...form.getInputProps("age")}
                                    />
                                </div>
                                <div className="h-full flex items-end ">
                                    <div className="">Tahun</div>
                                </div>
                            </div>

                            {/* Alamat */}
                            <div>
                                <Textarea
                                    label="Alamat"
                                    placeholder="Alamat"
                                    withAsterisk
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...form.getInputProps("address")}
                                />
                                <span className="text-sm ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>

                            {/* No Telepon */}
                            <TextInput
                                label="No. Telepon"
                                placeholder="No. Telepon"
                                type="number"
                                width="sm"
                                withAsterisk
                                {...form.getInputProps("phone")}
                            />
                        </Grid.Col>

                        {/* Kolom 2 */}
                        <Grid.Col
                            className="mt-4 flex flex-col gap-3"
                            span={{ base: 12, md: 6 }}
                        >
                            {/* Card Number */}
                            <TextInput
                                label="No. Kartu"
                                placeholder="No. Telepon"
                                type="number"
                                width="sm"
                                withAsterisk
                                {...form.getInputProps("card_number")}
                            />

                            {/* Tanggal Permintaan */}
                            <div className="item flex flex-col ">
                                <div className="font-bold text-[.95rem] flex items-center">
                                    Tanggal Permintaan
                                </div>
                                <div className="w-full">
                                    <input
                                        type="date"
                                        className="w-full h-full border border-gray-300 text-gray-400 rounded-lg"
                                        {...form.getInputProps("request_date")}
                                    />
                                </div>
                            </div>

                            {/* Dokter / Petugas Pengirim */}
                            <TextInput
                                label="Dokter / Petugas Pengirim"
                                placeholder="Dokter / Petugas Pengirim"
                                width="sm"
                                withAsterisk
                                {...form.getInputProps("officer")}
                            />

                            {/* Asal Poli */}
                            <div className="item flex flex-col ">
                                <div className="font-bold text-[.95rem] w-[50%] flex items-center">
                                    Asal Poli
                                </div>
                                <div className=" w-full">
                                    <Select
                                        placeholder="--- Asal Poli ---"
                                        data={layanan}
                                        radius="md"
                                        searchable
                                        className="border border-b-violet-50"
                                        {...form.getInputProps("poli")}
                                    />
                                </div>
                            </div>

                            {/* Keterangan Klinis */}
                            <div>
                                <Textarea
                                    label="Keterangan Klinis"
                                    placeholder="Keterangan Klinis"
                                    withAsterisk
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...form.getInputProps("clinical_desc")}
                                />
                                <span className="text-sm ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>

                            {/* Paraf*/}
                            <TextInput
                                label="Paraf / Penanggung Jawab"
                                placeholder="Paraf / Penanggung Jawab"
                                width="sm"
                                withAsterisk
                                {...form.getInputProps("responsible")}
                            />

                            {/*  */}
                        </Grid.Col>
                    </Grid>
                </div>
            </section>

            {/* Formulis Permintaan Pemeriksaan Laboratorium */}
            <section className="flex flex-col gap-3 w-full">
                <div className="bg-gray-400 flex flex-row mt-3 items-center justify-center text-white text-xl font-bold h-10 ">
                    FORMULIR PERMINTAAN PEMERIKSAAN LABORATORIUM
                </div>
                <div className="px-5">
                    <Grid gutter="xl">
                        {/* Col 1 */}
                        <Grid.Col
                            className="mt-4 flex flex-col gap-5"
                            span={{ base: 12, md: 6 }}
                        >
                            {/* HEMATOLOGI */}
                            <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    HEMATOLOGI
                                </label>
                                <Radio.Group
                                    name="hematologi"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("hematologi")}
                                >
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        {dataHematologi.map((e) => (
                                            <Radio
                                                key={e.value}
                                                value={e.value}
                                                label={e.label}
                                                size="md"
                                            />
                                        ))}
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* SEROLOGIS */}
                            <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    SEROLOGIS
                                </label>
                                <Radio.Group
                                    name="serologis"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("serologis")}
                                >
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(3, 1fr)",
                                        }}
                                    >
                                        {dataSerologis.map((e) => (
                                            <Radio
                                                key={e.value}
                                                value={e.value}
                                                label={e.label}
                                                size="md"
                                            />
                                        ))}
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* URINALISA */}
                            <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    URINALISA
                                </label>
                                <Radio.Group
                                    name="urinalisa"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("urinalisa")}
                                >
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        {dataUrinalisa.map((e) => (
                                            <Radio
                                                key={e.value}
                                                value={e.value}
                                                label={e.label}
                                                size="md"
                                            />
                                        ))}
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* MIKROBIOLOGI */}
                            <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    MIKROBIOLOGI
                                </label>
                                <Radio.Group
                                    name="mikrobiologi"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("mikrobiologi")}
                                >
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataMikrobiologi.map((e) => (
                                            <Radio
                                                key={e.value}
                                                value={e.value}
                                                label={e.label}
                                                size="md"
                                            />
                                        ))}
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* FAECES */}
                            <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    FAECES
                                </label>
                                <Radio.Group
                                    name="faeces"
                                    className="w-full h-full px-3"
                                    {...form.getInputProps("faeces")}
                                >
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataFaeces.map((e) => (
                                            <Radio
                                                key={e.value}
                                                value={e.value}
                                                label={e.label}
                                                size="md"
                                            />
                                        ))}
                                    </div>
                                </Radio.Group>
                            </div>

                            {/* Pemeriksaan Lainnya */}
                            <div className="flex flex-col border border-gray-300 px-3 py-2 shadow-lg">
                                <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                                    PEMERIKSAAN LAINNYA
                                </label>
                                <Textarea
                                    placeholder="Pemeriksaan Lainnya"
                                    withAsterisk
                                    autosize
                                    minRows={5}
                                    maxRows={5}
                                    size="md"
                                    {...form.getInputProps(
                                        "pemeriksaan_lainnya"
                                    )}
                                />
                                <span className="text-sm ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col
                            className="mt-4 flex flex-col gap-3"
                            span={{ base: 12, md: 6 }}
                        >
                            <div className="py-3 flex flex-col gap-3 border border-gray-300">
                                {/* Title */}
                                <div className="flex justify-center items-center h-10 text-xl font-bold border-b border-gray-300">
                                    KIMIA DARAH
                                </div>

                                {/* Isi */}
                                <div className="px-4 flex flex-col gap-5">
                                    {/* Faal Hati */}
                                    <div className="flex flex-col gap-3">
                                        <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                            A. FAAL HATI
                                        </div>
                                        <div className="px-5">
                                            <Radio.Group
                                                name="faal_hati"
                                                className="w-full h-full px-3"
                                                {...form.getInputProps(
                                                    "faal_hati"
                                                )}
                                            >
                                                <div
                                                    className="w-full h-full grid gap-3"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(1, 1fr)",
                                                    }}
                                                >
                                                    {dataFaalHati.map((e) => (
                                                        <Radio
                                                            key={e.value}
                                                            value={e.value}
                                                            label={e.label}
                                                            size="md"
                                                        />
                                                    ))}
                                                </div>
                                            </Radio.Group>
                                        </div>
                                    </div>

                                    {/* Faal Ginjal */}
                                    <div className="flex flex-col gap-3">
                                        <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                            B. FAAL GINJAL
                                        </div>
                                        <div className="px-5">
                                            <Radio.Group
                                                name="faal_ginjal"
                                                className="w-full h-full px-3"
                                                {...form.getInputProps(
                                                    "faal_ginjal"
                                                )}
                                            >
                                                <div
                                                    className="w-full h-full grid gap-3"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(2, 1fr)",
                                                    }}
                                                >
                                                    {dataFaalGinjal.map((e) => (
                                                        <Radio
                                                            key={e.value}
                                                            value={e.value}
                                                            label={e.label}
                                                            size="md"
                                                        />
                                                    ))}
                                                </div>
                                            </Radio.Group>
                                        </div>
                                    </div>

                                    {/* Faal Jantung */}
                                    <div className="flex flex-col gap-3">
                                        <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                            C. FAAL JANTUNG
                                        </div>
                                        <div className="px-5">
                                            <Radio.Group
                                                name="faal_jantung"
                                                className="w-full h-full px-3"
                                                {...form.getInputProps(
                                                    "faal_jantung"
                                                )}
                                            >
                                                <div
                                                    className="w-full h-full grid gap-3"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(1, 1fr)",
                                                    }}
                                                >
                                                    {dataFaalJantung.map(
                                                        (e) => (
                                                            <Radio
                                                                key={e.value}
                                                                value={e.value}
                                                                label={e.label}
                                                                size="md"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </Radio.Group>
                                        </div>
                                    </div>

                                    {/* Fungsi Metabolisme Karbohidrat */}
                                    <div className="flex flex-col gap-3">
                                        <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                            D. FUNGSI METABOLISME KARBOHIDRAT
                                        </div>
                                        <div className="px-5">
                                            <Radio.Group
                                                name="metabolisme_karbo"
                                                className="w-full h-full px-3"
                                                {...form.getInputProps(
                                                    "metabolisme_karbo"
                                                )}
                                            >
                                                <div
                                                    className="w-full h-full grid gap-3"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(1, 1fr)",
                                                    }}
                                                >
                                                    {dataMetabolismeKarbo.map(
                                                        (e) => (
                                                            <Radio
                                                                key={e.value}
                                                                value={e.value}
                                                                label={e.label}
                                                                size="md"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </Radio.Group>
                                        </div>
                                    </div>

                                    {/* Profil Lipid */}
                                    <div className="flex flex-col gap-3">
                                        <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                            E. PROFIL LIPID
                                        </div>
                                        <div className="px-5">
                                            <Radio.Group
                                                name="profil_lipid"
                                                className="w-full h-full px-3"
                                                {...form.getInputProps(
                                                    "profil_lipid"
                                                )}
                                            >
                                                <div
                                                    className="w-full h-full grid gap-3"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(1, 1fr)",
                                                    }}
                                                >
                                                    {dataProfilLipid.map(
                                                        (e) => (
                                                            <Radio
                                                                key={e.value}
                                                                value={e.value}
                                                                label={e.label}
                                                                size="md"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
            </section>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default EditLabModal;

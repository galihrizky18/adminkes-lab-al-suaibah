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

const AddLabModal = () => {
    // Validator Form
    const form = useForm({
        initialValues: {
            officer: "",
            name: "",
            jk: "",
            ttl: "",
            age: "",
            address: "",
            phone: "",
            card_number: "",
            request_date: "",
            poli: "",
            clinical_desc: "",
            responsible: "",
            hematologi: "",
            serologis: "",
            urinalisa: "",
            mikrobiologi: "",
            faeces: "",
            faal_hati: "",
            faal_ginjal: "",
            faal_jantung: "",
            metabolisme_karbo: "",
            pemeriksaan_lainnya: "",
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
        },
    });

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/add-data/gigi", {
                data: data,
            });

            if (response.data.message === "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/poli-gigi");
            } else if (response.data.message === "Failed Save Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message === "Found Data") {
                Swal.fire({
                    title: "Duplicate Data",
                    text: "Data Telah Ada",
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
    useEffect(() => {}, []);

    return (
        <Box
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            <section className="w-full ">
                <div className="bg-gray-400 flex flex-row mt-3 items-center justify-center text-white text-xl font-bold h-10 ">
                    Data Pasien
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
                                    mt="md"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...form.getInputProps("address")}
                                />
                                <span className="text-sm ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>

                            {/* Diagnosis */}
                            <div>
                                <Textarea
                                    label="Diagnosis (A)"
                                    placeholder="Diagnosis (A)"
                                    withAsterisk
                                    mt="md"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...form.getInputProps("diagnosis")}
                                />
                                <span className="text-sxs ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>

                            {/* Terapi */}
                            <div>
                                <Textarea
                                    label="Terapi (P)"
                                    placeholder="Terapi (P)"
                                    withAsterisk
                                    mt="md"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...form.getInputProps("terapi")}
                                />
                                <span className="text-sxs ml-3 text-blue-700">
                                    isi " - " jika tidak ada
                                </span>
                            </div>
                        </Grid.Col>

                        {/* Kolom 2 */}
                        <Grid.Col className="mt-8" span={{ base: 12, md: 6 }}>
                            <div className="flex flex-col">
                                {/* Penanggung Jawab */}
                                <TextInput
                                    label="Penanggung Jawab"
                                    placeholder="Penanggung Jawab"
                                    withAsterisk
                                    {...form.getInputProps("penanggung_jawab")}
                                />
                                <span className="font-bold ">
                                    Pemeriksaan (O)
                                </span>
                                <NumberInput
                                    label="Berat Badan"
                                    placeholder="Beraat Badan"
                                    mt="md"
                                    {...form.getInputProps("bb")}
                                />
                                <NumberInput
                                    label="Tinggi Badan"
                                    placeholder="Tinggi Badan"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps("tb")}
                                />

                                {/* Tekanan Darah */}
                                <div className="my-3 border border-gray-300 p-2">
                                    <div className="bg-gray-400 text-white py-1  text-center font-bold text-lg">
                                        Tekanan Darah
                                    </div>
                                    <NumberInput
                                        label="Sistolik"
                                        placeholder="Sistolik"
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps("tdSistolik")}
                                    />
                                    <NumberInput
                                        label="Diastolik"
                                        placeholder="Diastolik"
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps("tdDiastolik")}
                                    />
                                </div>

                                {/* Laju Pernapasan */}
                                <NumberInput
                                    label="Laju Pernapasan"
                                    placeholder="Laju Pernapasan"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps("rr")}
                                />

                                {/* Nadi */}
                                <NumberInput
                                    label="Nadi"
                                    placeholder="Nadi"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps("n")}
                                />

                                {/* Skala Nyeri */}
                                <NumberInput
                                    label="Skala Nyeri"
                                    placeholder="Skala Nyeri"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps("skala_nyeri")}
                                />

                                {/* Intra Oral */}
                                <div>
                                    <Textarea
                                        label="Intra Oral"
                                        placeholder="Intra Oral"
                                        withAsterisk
                                        mt="md"
                                        autosize
                                        minRows={2}
                                        maxRows={4}
                                        {...form.getInputProps("intra_oral")}
                                    />
                                    <span className="text-sm ml-3 text-blue-700">
                                        isi " - " jika tidak ada
                                    </span>
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

export default AddLabModal;

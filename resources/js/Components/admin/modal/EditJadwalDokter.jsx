import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import {
    Button,
    Group,
    TextInput,
    Box,
    NumberInput,
    Grid,
    Select,
    Textarea,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";

const EditJadwalDokter = ({ data }) => {
    const [dokterConvert, setDokterConvert] = useState();

    // Split waktu
    const splitWaktu = (waktu) => {
        const waktuSplit = waktu.split(" - ");

        return {
            waktuAwal: waktuSplit[0],
            waktuAkhir: waktuSplit[1],
        };
    };

    // Validator Form
    const form = useForm({
        initialValues: {
            id_jadwal_dokter: data.jadwal.id_jadwal_dokter,
            id_dokter: data.jadwal.dokter.id_dokter,

            senin: splitWaktu(data.jadwal.senin).waktuAwal,
            seninSampai: splitWaktu(data.jadwal.senin).waktuAkhir,
            selasa: splitWaktu(data.jadwal.selasa).waktuAwal,
            selasaSampai: splitWaktu(data.jadwal.selasa).waktuAkhir,
            rabu: splitWaktu(data.jadwal.rabu).waktuAwal,
            rabuSampai: splitWaktu(data.jadwal.rabu).waktuAkhir,
            kamis: splitWaktu(data.jadwal.kamis).waktuAwal,
            kamisSampai: splitWaktu(data.jadwal.kamis).waktuAkhir,
            jumat: splitWaktu(data.jadwal.jumat).waktuAwal,
            jumatSampai: splitWaktu(data.jadwal.jumat).waktuAkhir,
            sabtu: splitWaktu(data.jadwal.sabtu).waktuAwal,
            sabtuSampai: splitWaktu(data.jadwal.sabtu).waktuAkhir,
        },

        validate: {
            id_jadwal_dokter: isNotEmpty("Dokter tidak boleh kosong"),
            id_dokter: isNotEmpty("Dokter tidak boleh kosong"),
            senin: isNotEmpty("Hari tidak boleh kosong"),
            selasa: isNotEmpty("Hari tidak boleh kosong"),
            rabu: isNotEmpty("Hari tidak boleh kosong"),
            kamis: isNotEmpty("Hari tidak boleh kosong"),
            jumat: isNotEmpty("Hari tidak boleh kosong"),
            sabtu: isNotEmpty("Hari tidak boleh kosong"),
        },
    });

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post(
                "/admin/edit-data/jadwal-dokter",
                {
                    dataNewJadwal: data,
                }
            );

            if (response.data.message == "Success Edit Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Jadwal Berhasil DiEdit!",
                    icon: "success",
                });
                router.get("/admin/master-menu/jadwal-dokter");
            } else if (response.data.message == "Failed Edit Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Edit Data!",
                    icon: "error",
                });
            } else if (response.data.message == "Data not found") {
                Swal.fire({
                    title: "Data Not Found",
                    text: "Data Tidak Ada!",
                    icon: "error",
                });
            } else if (response.data.message == "Fail Request") {
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

    return (
        <Box
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            <Grid gutter="xl" className="px-3 ">
                {/* Col 1 */}
                <Grid.Col className="mt-4" span={{ base: 12, md: 6 }}>
                    <div className="flex flex-col gap-3">
                        {/* title */}
                        <div className="bg-gray-200 text-center py-2 font-bold">
                            DOKTER INFORMATION
                        </div>

                        {/* Dokter */}
                        <div>
                            <TextInput
                                label="Dokter"
                                placeholder="Dokter"
                                withAsterisk
                                mt="md"
                                disabled
                                value={data.jadwal.dokter.nama_dokter}
                            />
                        </div>
                    </div>
                </Grid.Col>

                {/* col 2 */}
                <Grid.Col className="mt-4" span={{ base: 12, md: 6 }}>
                    <div className="flex flex-col gap-3">
                        {/* title */}
                        <div className="bg-gray-200 text-center py-2 font-bold">
                            Jadwal
                        </div>

                        {/* Senin */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Senin</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Senin"
                                    type="time"
                                    {...form.getInputProps("senin")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <input
                                className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                label="Senin"
                                type="time"
                                {...form.getInputProps("seninSampai")}
                            />
                        </div>

                        {/* Selasa */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Selasa</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("selasa")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("selasaSampai")}
                                />
                            </div>
                        </div>

                        {/* Rabu */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Rabu</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Rabu"
                                    type="time"
                                    {...form.getInputProps("rabu")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("rabuSampai")}
                                />
                            </div>
                        </div>

                        {/* Kamis */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Kamis</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Kamis"
                                    type="time"
                                    {...form.getInputProps("kamis")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("kamisSampai")}
                                />
                            </div>
                        </div>

                        {/* Jumat */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Jum'at</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Ju'mat"
                                    type="time"
                                    {...form.getInputProps("jumat")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("jumatSampai")}
                                />
                            </div>
                        </div>

                        {/* Sabtu */}
                        <div className="flex flex-col border border-gray-400 px-3 py-2">
                            <label className="font-bold">Sabtu</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Sabtu"
                                    type="time"
                                    {...form.getInputProps("sabtu")}
                                />
                            </div>
                            <div className="text-center">Sampai</div>
                            <div>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Selasa"
                                    type="time"
                                    {...form.getInputProps("sabtuSampai")}
                                />
                            </div>
                        </div>
                    </div>
                </Grid.Col>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default EditJadwalDokter;

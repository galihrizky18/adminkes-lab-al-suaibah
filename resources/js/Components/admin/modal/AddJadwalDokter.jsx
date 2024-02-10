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

const AddJadwalDokter = ({ dataSpesialis, dataDokters }) => {
    const [dokterConvert, setDokterConvert] = useState();

    // Convert Data Layanan
    const handleConvertDokter = (data) => {
        return data.map((e) => ({
            value: e.id_dokter,
            label: e.nama_dokter,
        }));
    };

    // Convert Data Layanan
    const handleConvertSpesialis = (data) => {
        return data.map((e) => ({
            value: e.id_spesialis,
            label: e.spesialis,
        }));
    };

    // Validator Form
    const form = useForm({
        initialValues: {
            id_dokter: "",
            senin: "00:00",
            seninSampai: "00:00",
            selasa: "00:00",
            selasaSampai: "00:00",
            rabu: "00:00",
            rabuSampai: "00:00",
            kamis: "00:00",
            kamisSampai: "00:00",
            jumat: "00:00",
            jumatSampai: "00:00",
            sabtu: "00:00",
            sabtuSampai: "00:00",
        },

        validate: {
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
            const response = await axios.post("/admin/add-data/jadwal-dokter", {
                dataNewJadwal: data,
            });

            if (response.data.message == "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Jadwal Berhasil Ditambahkaan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/jadwal-dokter");
            } else if (response.data.message == "Failed Save Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message == "Found Data") {
                Swal.fire({
                    title: "Found Dokter",
                    text: "Jadwal Sudah Ada!",
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
                            <div className="font-bold">Dokter :</div>
                            <Select
                                placeholder="--- Dokter ---"
                                data={handleConvertDokter(dataDokters)}
                                radius="md"
                                searchable
                                className="border border-b-violet-50"
                                {...form.getInputProps("id_dokter")}
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

export default AddJadwalDokter;

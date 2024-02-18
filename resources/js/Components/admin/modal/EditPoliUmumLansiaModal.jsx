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
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";

const EditPoliUmumLansiaModal = ({ dataDoker, baseData }) => {
    // State
    const [dokterConvert, setDokerConvert] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            id_krjUmumLansia: baseData.id_krjUmumLansia,
            id_dokter: baseData.id_dokter,
            name: baseData.name,
            birth: baseData.birth,
            bb: baseData.bb,
            tb: baseData.tb,
            tdSistolik: baseData.td.tdSistolik,
            tdDiastolik: baseData.td.tdDiastolik,
            rr: baseData.rr,
            n: baseData.n,
            anamnesis: baseData.anamnesis,
            pemeriksaan_fisik: baseData.pemeriksaan_fisik,
            pemeriksaan_penunjang: baseData.pemeriksaan_penunjang,
            diagnosis: baseData.diagnosis,
            terapi: baseData.terapi,
            rujukan: baseData.rujukan,
        },

        validate: {
            id_dokter: isNotEmpty("Id Dokter tidak boleh kosong"),
            name: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            birth: isNotEmpty("Tanggal Lahir tidak boleh kosong"),
            bb: isNotEmpty("Berat Badan tidak boleh kosong"),
            tb: isNotEmpty("Tinggi Badan tidak boleh kosong"),
            tdSistolik: isNotEmpty("Tekanan Darah Sistolik tidak boleh kosong"),
            tdDiastolik: isNotEmpty(
                "Tekanan Darah Diastolik tidak boleh kosong"
            ),
            rr: isNotEmpty("Laju Pernapasan tidak boleh kosong"),
            n: isNotEmpty("Nadi tidak boleh kosong"),
            anamnesis: isNotEmpty("Anamnesis tidak boleh kosong"),
            pemeriksaan_fisik: isNotEmpty(
                "Pemeriksaan Fisik tidak boleh kosong"
            ),
            pemeriksaan_penunjang: isNotEmpty(
                "Pemeriksaan Penunjang tidak boleh kosong"
            ),
            diagnosis: isNotEmpty("Diagnosis"),
            terapi: isNotEmpty("Terapi tidak boleh kosong"),
            rujukan: isNotEmpty("Rujukn tidak boleh kosong"),
        },
    });

    // Convert Data
    const handleConvertDokter = (data) => {
        return data.map((e) => ({
            value: e.id_dokter,
            label: e.nama_dokter,
        }));
    };

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/edit-data/umum-lansia", {
                newData: data,
            });

            if (response.data.message === "Success Edit Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/rawat-jalan-umum-lansia");
            } else if (response.data.message === "Failed Edit Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message === "Failed Request Database") {
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
    useEffect(() => {
        setDokerConvert(handleConvertDokter(dataDoker));
    }, [dataDoker]);

    return (
        <Box
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            <Grid gutter="xl">
                {/* kolom 1 */}
                <Grid.Col className="mt-4" span={6}>
                    <Select
                        data={dokterConvert}
                        label="Dokter Penanggung Jawab"
                        placeholder="Dokter Penanggung Jawab"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("id_dokter")}
                    />
                    <TextInput
                        label="Nama Pasien"
                        placeholder="Nama Pasien"
                        withAsterisk
                        {...form.getInputProps("name")}
                    />

                    {/* Input Tanggal Lahir */}
                    <div className="flex flex-col mt-3">
                        <label htmlFor="">Tanggal Lahir</label>
                        <input
                            className="w-full border border-gray-300 text-gray-400 rounded-lg"
                            label="Tanggal Lahir"
                            type="date"
                            {...form.getInputProps("birth")}
                        />
                    </div>

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

                    {/* Tekanan Darta */}
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
                    <NumberInput
                        label="Laju Pernapasan"
                        placeholder="Laju Pernapasan"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("rr")}
                    />
                    <NumberInput
                        label="Nadi"
                        placeholder="Nadi"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("n")}
                    />
                </Grid.Col>

                {/* Kolom 2 */}
                <Grid.Col className="mt-4" span={6}>
                    <div>
                        <Textarea
                            label="Anamnesis"
                            placeholder="Anamnesis"
                            withAsterisk
                            mt="md"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...form.getInputProps("anamnesis")}
                        />
                        <span className="text-sm ml-3 text-blue-700">
                            isi " - " jika tidak ada
                        </span>
                    </div>
                    <div>
                        <Textarea
                            label="Pemeriksaan Fisik"
                            placeholder="Pemeriksaan Fisik"
                            withAsterisk
                            mt="md"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...form.getInputProps("pemeriksaan_fisik")}
                        />
                        <span className="text-sxs ml-3 text-blue-700">
                            isi " - " jika tidak ada
                        </span>
                    </div>
                    <div>
                        <Textarea
                            label="Pemeriksaan Penunjang"
                            placeholder="Pemeriksaaan Penunjang"
                            withAsterisk
                            mt="md"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...form.getInputProps("pemeriksaan_penunjang")}
                        />
                        <span className="text-sxs ml-3 text-blue-700">
                            isi " - " jika tidak ada
                        </span>
                    </div>
                    <div>
                        <Textarea
                            label="Diagnosis"
                            placeholder="Diagnosis"
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
                    <div>
                        <Textarea
                            label="Terapi"
                            placeholder="Terapi"
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
                    <div>
                        <Textarea
                            label="Rujukan"
                            placeholder="Rujukan"
                            withAsterisk
                            mt="md"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...form.getInputProps("rujukan")}
                        />
                        <span className="text-sxs ml-3 text-blue-700">
                            isi " - " jika tidak ada
                        </span>
                    </div>
                </Grid.Col>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default EditPoliUmumLansiaModal;

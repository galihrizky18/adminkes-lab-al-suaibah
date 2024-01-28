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

const AddDokterModal = ({ dataLayanan }) => {
    const [layananConvert, setLayananconvert] = useState();

    // Convert Data Layanan
    const handleConvertLayanan = (data) => {
        return data.map((e) => ({
            value: e.id_layanan,
            label: e.layanan,
        }));
    };
    // Validator Form
    const form = useForm({
        initialValues: {
            nip: "",
            nameDokter: "",
            layanan: "",
            spesialis: "",
            email: "",
            noHp: "",
            alamat: "",
        },

        validate: {
            nip: isNotEmpty("NIP tidak boleh kosong"),
            nameDokter: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            layanan: isNotEmpty("Layanan tidak boleh kosong"),
            spesialis: isNotEmpty("Spesialis tidak boleh kosong"),
            email: isEmail("Email tidak valid"),
            noHp: isNotEmpty("No Hp Tidak Boleh Kosong"),
            alamat: isNotEmpty("Alamat Tidak Boleh Kosong"),
        },
    });

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/add-data/dokters", {
                dataNewDokter: data,
            });

            if (response.data.message == "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Dokter Berhasil Ditambahkaan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/dokter");
            } else if (response.data.message == "Failed Save Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message == "Found Dokter") {
                Swal.fire({
                    title: "Found Dokter",
                    text: "Dokter Sudah Terdaftar!",
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

    useEffect(() => {
        setLayananconvert(handleConvertLayanan(dataLayanan));
    }, [dataLayanan]);

    return (
        <Box
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => handleSubmit(data))}
        >
            <Grid gutter="xl">
                <Grid.Col className="mt-4">
                    <NumberInput
                        label="NIP"
                        placeholder="NIP"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("nip")}
                    />
                    <TextInput
                        label="Nama Dokter"
                        placeholder="Nama Dokter"
                        withAsterisk
                        {...form.getInputProps("nameDokter")}
                    />
                    <TextInput
                        label="Spesialis"
                        placeholder="Spesialis"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("spesialis")}
                    />

                    <Select
                        data={layananConvert}
                        label="Layanan"
                        placeholder="Input Layanan"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("layanan")}
                    />

                    <TextInput
                        label="Email"
                        placeholder="Email"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("email")}
                    />
                    <NumberInput
                        label="No Hp"
                        placeholder="No HP"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("noHp")}
                    />
                    <Textarea
                        label="Alamat"
                        placeholder="Alamat"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("alamat")}
                    />
                </Grid.Col>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default AddDokterModal;

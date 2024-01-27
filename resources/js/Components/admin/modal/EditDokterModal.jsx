import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import {
    Button,
    Group,
    TextInput,
    Box,
    Select,
    Grid,
    NumberInput,
    Textarea,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";

const EditDokterModal = ({ data, dataLayanan }) => {
    const [layananConvert, setLayananconvert] = useState();
    // Validator Form
    const form = useForm({
        initialValues: {
            idDokter: data.id_dokter,
            nameDokter: "",
            layanan: "",
            spesialis: "",
            email: "",
            noHp: "",
            alamat: "",
        },

        validate: {
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

    // Handle Submit Form
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/edit-data/dokter", {
                dataEditDokter: data,
            });

            if (response.data.message == "Success Edit Dokter") {
                Swal.fire({
                    title: "Success Edit Admin!",
                    text: "Data Berhasil Di Edit!",
                    icon: "success",
                });
                router.get("/admin/master-menu/dokter");
            } else if (response.data.message == "Failed Edit Dokter") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Mengedit Admin!",
                    icon: "error",
                });
            } else if (response.data.message == "Failed Request Database") {
                Swal.fire({
                    title: "Failed Request",
                    text: "Failed Request To Database",
                    icon: "error",
                });
            }
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    // convert layanan
    const handleConvertLayanan = (LayananOri) => {
        return LayananOri.map((e) => ({
            value: e.id_layanan,
            label: e.layanan,
        }));
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
                    <TextInput
                        label="Nama Dokter"
                        placeholder={data.nama}
                        withAsterisk
                        {...form.getInputProps("nameDokter")}
                    />
                    <TextInput
                        label="Spesialis"
                        placeholder={data.spesialis}
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("spesialis")}
                    />

                    <Select
                        data={layananConvert}
                        label="Layanan"
                        placeholder={data.layanan}
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("layanan")}
                    />

                    <TextInput
                        label="Email"
                        placeholder={data.email}
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("email")}
                    />
                    <NumberInput
                        label="No Hp"
                        placeholder={data.noHp}
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("noHp")}
                    />
                    <Textarea
                        label="Alamat"
                        placeholder={data.alamat}
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

export default EditDokterModal;

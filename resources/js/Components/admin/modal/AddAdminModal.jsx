import React from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import {
    Button,
    Group,
    TextInput,
    Box,
    PasswordInput,
    Grid,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";

const AddAdminModal = ({ setIsSuccessSave }) => {
    // Validator Form
    const form = useForm({
        initialValues: {
            name: "",
            username: "",
            password: "",
            email: "",
        },

        validate: {
            name: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            username: isNotEmpty("Username tidak boleh kosong"),
            password: isNotEmpty("Password tidak boleh kosong"),
            email: isEmail("Email tidak valid"),
        },
    });

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/add-data/admin", {
                dataNewAdmin: data,
            });

            if (response.data.message == "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                setIsSuccessSave(true);
            } else if (response.data.message == "Failed Save Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message == "Found Data") {
                Swal.fire({
                    title: "Duplicate Data",
                    text: "Data Telah Ada",
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
            <Grid gutter="xl">
                <Grid.Col className="mt-4">
                    <TextInput
                        label="Nama"
                        placeholder="Nama"
                        withAsterisk
                        {...form.getInputProps("name")}
                    />
                    <TextInput
                        label="Username"
                        placeholder="Username"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("username")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        mt="md"
                        {...form.getInputProps("password")}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Email"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("email")}
                    />
                </Grid.Col>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default AddAdminModal;

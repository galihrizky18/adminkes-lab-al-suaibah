import React, { useState } from "react";
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
import { router } from "@inertiajs/react";

const EditAdminModal = ({ data }) => {
    // Validator Form
    const form = useForm({
        initialValues: {
            id_user: data.id_user,
            name: data.name,
            username: data.username,
            password: data.password,
            email: data.email,
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

    // Handle Submit Form
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/edit-data/admin", {
                dataEditAdmin: data,
            });

            if (response.data.message == "Success Edit Admin") {
                Swal.fire({
                    title: "Success Edit Admin!",
                    text: "Data Berhasil Di Edit!",
                    icon: "success",
                });
                router.get("/admin/master-menu/admin");
            } else if (response.data.message == "Failed Edit Admin") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Mengedit Admin!",
                    icon: "error",
                });
            } else if (response.data.message == "Admin Not Found") {
                Swal.fire({
                    title: "Admin Not Found!",
                    text: "Data Admin Tidak Di Temukan",
                    icon: "error",
                });
            } else if (response.data.message == "Failed Requst Database") {
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

    // useState(() => {
    //     console.log(data);
    // }, []);

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
                    <div className="text-center mb-3">
                        Username :{" "}
                        <span className="font-bold">{data.id_user}</span>
                    </div>
                    <TextInput
                        label="Nama"
                        placeholder={data.name}
                        withAsterisk
                        {...form.getInputProps("name")}
                    />
                    <TextInput
                        label="Username"
                        placeholder={data.username}
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("username")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder={data.password}
                        mt="md"
                        {...form.getInputProps("password")}
                    />
                    <TextInput
                        label="Email"
                        placeholder={data.email}
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

export default EditAdminModal;

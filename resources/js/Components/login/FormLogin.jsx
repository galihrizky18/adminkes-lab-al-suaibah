import React, { useEffect, useState } from "react";
import axios from "axios";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import {
    useForm,
    isNotEmpty,
    isEmail,
    isInRange,
    hasLength,
    matches,
} from "@mantine/form";
import {
    MantineProvider,
    Button,
    Group,
    TextInput,
    PasswordInput,
    Box,
} from "@mantine/core";

const FormLogin = () => {
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },

        validate: {
            username: isNotEmpty("Username Must be Input"),
            password: isNotEmpty("Password Must be Input"),
        },
    });

    // upload
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/login", {
                data: data,
            });

            console.log(response.data.message);

            if (response.data.isLoggedIn) {
                Swal.fire({
                    icon: "success",
                    title: "Login Success",
                    text: "Login Berhasil",
                });
                // window.location.href = "/admin";
                router.get("/admin");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Username atau Password Salah!",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Internal Server Error",
                text: "Terjadi kesalahan internal server.",
            });
        }
    };

    return (
        <MantineProvider>
            <Box
                component="form"
                maw={400}
                mx="auto"
                onSubmit={form.onSubmit((data) => {
                    handleSubmit(data);
                })}
            >
                <TextInput
                    label="Username"
                    placeholder="Username"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps("username")}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    radius="md"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps("password")}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </Box>
        </MantineProvider>
    );
};

export default FormLogin;

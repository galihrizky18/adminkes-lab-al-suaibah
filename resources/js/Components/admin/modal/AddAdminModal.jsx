import React from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import {
    Button,
    Group,
    TextInput,
    Box,
    NumberInput,
    PasswordInput,
    Grid,
    Select,
    Textarea,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";

const AddAdminModal = ({ setIsSuccessSave }) => {
    // Validator Form
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
            name: "",
            phone: "",
            email: "",
            gender: "",
            birth: "",
            religion: "",
            province: "",
            city: "",
            nationality: "",
            address: "",
        },

        validate: {
            username: isNotEmpty("Username tidak boleh kosong"),
            password: isNotEmpty("Password tidak boleh kosong"),
            name: hasLength(
                { min: 1, max: 32 },
                "Panjang nama harus 1-32 kata"
            ),
            phone: isNotEmpty("Nomor Telepon tidak boleh kosong"),
            email: isEmail("Email tidak valid"),
            gender: isNotEmpty("Jenis Kelamin tidak boleh kosong"),
            birth: isNotEmpty("Tanggal Lahir tidak boleh kosong"),
            religion: isNotEmpty("Agama tidak boleh kosong"),
            province: isNotEmpty("Provinsi tidak boleh kosong"),
            city: isNotEmpty("Kota tidak boleh kosong"),
            nationality: isNotEmpty("Kebangsaan tidak boleh kosong"),
            address: isNotEmpty("Alamat tidak boleh kosong"),
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
            <Grid span={{ base: 12, md: 6 }} gutter={0}>
                <Grid.Col
                    span={{ base: 12, md: 6 }}
                    className="mt-4 flex flex-col gap-2"
                >
                    {/* Account Information */}
                    <div>
                        <div className="bg-gray-400 text-white h-10 flex justify-center items-center">
                            Account Info
                        </div>
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
                    </div>

                    {/* Detail info */}
                    <div>
                        <div className="bg-gray-400 text-white h-10 flex justify-center items-center">
                            Detail Admin
                        </div>
                        <TextInput
                            label="Nama"
                            placeholder="Nama"
                            withAsterisk
                            {...form.getInputProps("name")}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            withAsterisk
                            mt="md"
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            label="No Telepon"
                            placeholder="No Telepon"
                            type="number"
                            withAsterisk
                            mt="md"
                            {...form.getInputProps("phone")}
                        />
                        <TextInput
                            label="Jenis Kelamin"
                            placeholder="Email"
                            withAsterisk
                            mt="md"
                            {...form.getInputProps("gender")}
                        />
                    </div>
                </Grid.Col>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default AddAdminModal;

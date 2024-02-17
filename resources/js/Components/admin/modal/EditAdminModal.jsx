import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { router } from "@inertiajs/react";
import {
    Button,
    Group,
    TextInput,
    Box,
    Radio,
    Grid,
    Select,
    Textarea,
} from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { agama } from "@/lib/ArrayData";
import { region } from "@/lib/RegionsIndonesia";

const EditAdminModal = ({ data }) => {
    // useState
    const [kotas, setKotas] = useState();
    const [selectProvince, setSelectProvince] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            id_user: data.id_user,
            id_admin: data.id_admin,
            idStaff: data.idStaff,
            name: data.name,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            birth: data.birth,
            religion: data.religion,
            province: data.province,
            city: data.city,
            nationality: data.nationality,
            address: data.address,
        },

        validate: {
            idStaff: isNotEmpty("ID Staff tidak boleh kosong"),
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

    // data Province
    const provinces = region.map((prov) => ({
        value: prov.provinsi,
        label: prov.provinsi,
    }));

    // data Kota sesuai Provinsi
    const getKotas = (province) => {
        const kota = region
            .filter(({ provinsi }) => provinsi === province)
            .flatMap(({ kota }) => kota);

        const newKota = kota.map((kotaItem) => ({
            value: kotaItem,
            label: kotaItem,
        }));

        setKotas(newKota);
    };

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

    return (
        <Box
            component="form"
            mx="auto"
            px="sm"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            <Grid span={{ base: 12, md: 6 }} gutter={30}>
                {/* Col 1 */}
                <Grid.Col
                    span={{ base: 12, md: 6 }}
                    className="mt-4 flex flex-col gap-3"
                >
                    {/* Account Information */}
                    <div>
                        <div className="bg-gray-400 text-white h-10 flex justify-center items-center">
                            Account Info
                        </div>

                        {/* Id Staff */}
                        <div className="flex flex-col gap-1">
                            <TextInput
                                label="Id Staff"
                                placeholder="Id Staff"
                                type="number"
                                withAsterisk
                                mt="md"
                                {...form.getInputProps("idStaff")}
                            />
                            <div className="text-gray-500 ml-5 text-sm">
                                Isi angka 0 jika ID Staff tidak ada
                            </div>
                        </div>
                    </div>

                    {/* Detail info */}
                    <div className="flex flex-col gap-0">
                        <div className="bg-gray-400 text-white h-10 flex justify-center items-center">
                            Detail Admin
                        </div>
                        <TextInput
                            label="Nama"
                            placeholder="Nama"
                            withAsterisk
                            {...form.getInputProps("name")}
                        />

                        {/* Jenis Kelamin */}
                        <div className="item h-10 my-3 flex flex-col gap-2">
                            <div className="title w-[50%] flex items-center">
                                Jenis Kelamin
                            </div>
                            <div className=" w-full flex flex-row ">
                                <Radio.Group
                                    name="gender"
                                    className="w-full h-full"
                                    {...form.getInputProps("gender")}
                                >
                                    <div className="w-full h-full flex flex-row items-center gap-3 sm:gap-7">
                                        <Radio
                                            value="male"
                                            label="Laki-Laki"
                                            size="md"
                                        />
                                        <Radio
                                            value="female"
                                            label="Perempuan"
                                            size="md"
                                        />
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>

                        <TextInput
                            label="No Telepon"
                            placeholder="No Telepon"
                            type="number"
                            withAsterisk
                            mt="md"
                            {...form.getInputProps("phone")}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            withAsterisk
                            mt="md"
                            {...form.getInputProps("email")}
                        />
                    </div>
                </Grid.Col>

                {/* Col 2 */}
                <Grid.Col
                    span={{ base: 12, md: 6 }}
                    className="mt-4 flex flex-col gap-3"
                >
                    {/* Input Tanggal Lahir */}
                    <div className="flex flex-col lg:mt-14">
                        <label className="font-bold">Tanggal Lahir</label>
                        <input
                            className="w-full border border-gray-300 text-gray-400 rounded-lg"
                            label="Tanggal Lahir"
                            type="date"
                            {...form.getInputProps("birth")}
                        />
                    </div>

                    {/* Agama */}
                    <div className="item flex flex-col gap-2">
                        <div className="title w-[50%] flex items-center font-bold">
                            Agama
                        </div>
                        <div className=" w-full flex flex-row ">
                            <Radio.Group
                                name="religion"
                                className="w-full h-full"
                                {...form.getInputProps("religion")}
                            >
                                <div className="w-full h-full grid grid-cols-3 gap-3 items-center lg:gap-3">
                                    {agama.map((e) => (
                                        <Radio
                                            key={e.value}
                                            value={e.value}
                                            label={e.label}
                                            size="md"
                                        />
                                    ))}
                                </div>
                            </Radio.Group>
                        </div>
                    </div>

                    {/* Provinsi */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center font-bold">
                            Provinsi
                        </div>
                        <div className="">
                            <Select
                                placeholder="Provinsi"
                                data={provinces}
                                radius="md"
                                searchable
                                className="border border-b-violet-50"
                                onChange={(selectedProvince) => {
                                    form.setFieldValue(
                                        "province",
                                        selectedProvince
                                    );
                                    setSelectProvince(selectedProvince);
                                    getKotas(selectedProvince); // Panggil getKotas saat provinsi dipilih
                                }}
                                value={data.province}
                            />
                        </div>
                    </div>

                    {/* Kota */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center font-bold">City</div>
                        <div className="">
                            <Select
                                placeholder="Kota"
                                data={kotas}
                                radius="md"
                                searchable
                                className="border border-b-violet-50"
                                onChange={(selectedCity) => {
                                    form.setFieldValue("city", selectedCity);
                                }}
                            />
                        </div>
                    </div>

                    {/* Kebangsaan */}
                    <TextInput
                        label="Kebangsaan"
                        placeholder="Kebangsaan"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps("nationality")}
                    />

                    {/* Address */}
                    <Textarea
                        label="Alamat"
                        placeholder="Alamat"
                        withAsterisk
                        autosize
                        minRows={3}
                        maxRows={3}
                        size="sm"
                        {...form.getInputProps("address")}
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

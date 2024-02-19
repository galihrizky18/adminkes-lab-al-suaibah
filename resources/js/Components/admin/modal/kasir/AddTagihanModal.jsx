import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { router } from "@inertiajs/react";
import { Button, Group, Box, NumberInput, Grid, Select } from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";

const AddTagihanModal = ({ dataLayanan }) => {
    // useState
    const [layanan, setLayanan] = useState();
    const [idSelectedPatient, setIdSelectedPatient] = useState();
    const [dataPatient, setDataPatient] = useState();
    const [dataSelectedPatient, setDataSelectedPatient] = useState();
    const [createTime, setCreateTime] = useState();
    // Data Farmasi
    const [dataFarmasi, setDataFarmasi] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            id_pemeriksaan: idSelectedPatient || "",
            biaya_dokter: "",
            biaya_perawat: "",
            biaya_resep: "",
        },

        validate: {
            biaya_dokter: isNotEmpty("Biaya Dokter Harus Di Isi"),
            biaya_perawat: isNotEmpty("Biaya Perawat Harus Di Isi"),
            biaya_resep: isNotEmpty("BIaya Resep Harus Di Isi"),
        },
    });

    // Convert Data
    // Conver Layanan
    const convertLayanan = (data) => {
        return data.map((item) => ({
            value: item.id_layanan,
            label: item.layanan,
        }));
    };
    const convertPatient = (data) => {
        return data.map((item) => ({
            value:
                item.id_krj_poli_umum_lansia ||
                item.id_krj_poli_gigi ||
                item.id_krj_poli_anak ||
                item.id_krj_poli_KIA,
            label: `${item.name} - ${
                item.id_krj_poli_umum_lansia ||
                item.id_krj_poli_gigi ||
                item.id_krj_poli_anak ||
                item.id_krj_poli_KIA
            }`,
        }));
    };

    // Handle get Data Selected Patient
    const getDataSelectedPatient = (id) => {
        if (dataPatient) {
            const selectedPatient = dataPatient.filter(
                (patient) =>
                    patient.id_krj_poli_umum_lansia === id ||
                    patient.id_krj_poli_gigi === id ||
                    patient.id_krj_poli_anak === id ||
                    patient.id_krj_poli_KIA === id
            );
            const firstSelectedPatient =
                selectedPatient.length > 0 ? selectedPatient[0] : null;
            setDataSelectedPatient(firstSelectedPatient);
        }
    };
    const handleCreateTime = (createdAt) => {
        const date = new Date(createdAt);

        // Mengambil tanggal
        const tanggal = date.toLocaleDateString(); // Format tanggal sesuai pengaturan lokal

        // Mengambil jam
        const jam = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }); // Format jam sesuai pengaturan lokal dengan dua digit untuk jam dan menit

        return {
            Tanggal: tanggal,
            Jam: jam,
        };
    };
    const handleGetDataFarmasi = async (id) => {
        try {
            const response = await axios.post("get-data/get-data-farmasi", {
                id_farmasi: id,
            });
            setDataFarmasi(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/add-data/tagihan", {
                data: data,
            });

            console.log(response.data.message);

            if (response.data.message == "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/kasir");
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

    // useEffect
    // Handle Get Data From DB
    useEffect(() => {
        if (layanan === "layanan1") {
            axios
                .get("/admin/get-data/get-data-umum-kasir")
                .then((response) => {
                    if (response.data.message === "Empty Data") {
                        console.log("Empty Data");
                    }
                    setDataPatient(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (layanan === "layanan2") {
            axios
                .get("/admin/get-data/get-data-anak-kasir")
                .then((response) => {
                    if (response.data.message === "Empty Data") {
                        console.log("Empty Data");
                    }
                    setDataPatient(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (layanan === "layanan3") {
            axios
                .get("/admin/get-data/get-data-gigi-kasir")
                .then((response) => {
                    if (response.data.message === "Empty Data") {
                        console.log("Empty Data");
                    }
                    setDataPatient(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (layanan === "layanan6") {
            axios
                .get("/admin/get-data/get-data-kia-kasir")
                .then((response) => {
                    if (response.data.message === "Empty Data") {
                        console.log("Empty Data");
                    }
                    setDataPatient(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [layanan]);

    useEffect(() => {
        getDataSelectedPatient(idSelectedPatient);
        form.setFieldValue("id_pemeriksaan", idSelectedPatient || "");
    }, [idSelectedPatient]);

    useEffect(() => {
        if (dataSelectedPatient) {
            const setTime = handleCreateTime(dataSelectedPatient.updated_at);
            setCreateTime(setTime);

            if (dataSelectedPatient.id_farmasi) {
                handleGetDataFarmasi(dataSelectedPatient.id_farmasi);
            }
            setDataFarmasi(null);
        }

        // console.log(dataSelectedPatient);
    }, [dataSelectedPatient]);

    // useEffect(() => {
    //     console.log(idSelectedPatient);
    // }, [idSelectedPatient]);

    return (
        <Box
            component="form"
            mx="auto"
            px="sm"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            <div className="flex flex-col gap-5">
                {/* Find Patient  */}
                <div>
                    <div className="font-bold lg:text-xl py-1 text-center bg-gray-500 text-white">
                        FIND PATIENT
                    </div>

                    {/* Data */}
                    <Grid span={{ base: 12, md: 6 }} gutter={20}>
                        {/* Col 1 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="mt-4 flex flex-col gap-3"
                        >
                            {/* Ruangan / Unit Asal */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center font-bold">
                                    Ruangan / Unit Asal
                                </div>
                                <div className="">
                                    <Select
                                        placeholder="Ruangan / Unit Asal"
                                        data={convertLayanan(dataLayanan)}
                                        radius="md"
                                        searchable
                                        className="border border-b-violet-50"
                                        onChange={(selectedLayanan) =>
                                            setLayanan(selectedLayanan)
                                        }
                                    />
                                </div>
                            </div>
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="lg:mt-4 flex flex-col gap-3"
                        >
                            {/* Patient */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center font-bold">
                                    Patient
                                </div>
                                <div className="">
                                    <Select
                                        placeholder="Patient"
                                        data={
                                            dataPatient
                                                ? convertPatient(dataPatient)
                                                : ""
                                        }
                                        radius="md"
                                        searchable
                                        className="border border-b-violet-50"
                                        onChange={(SelectedPatient) => {
                                            setIdSelectedPatient(
                                                SelectedPatient
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>

                {/* Detail Patient Information */}
                <div>
                    <div className="font-bold lg:text-xl py-1 text-center bg-gray-500 text-white">
                        DETAIL PATIENT INFORMATION
                    </div>

                    {/* Data */}
                    <Grid span={{ base: 12, md: 6 }} gutter={20}>
                        {/* Col 1 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="mt-4 flex flex-col gap-3"
                        >
                            {/* Nama  */}
                            <div>
                                <div>Nama</div>
                                <input
                                    className="w-full rounded-lg font-bold"
                                    type="text"
                                    placeholder="Nama"
                                    value={
                                        dataSelectedPatient
                                            ? dataSelectedPatient.name
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* Jenis Kelamin  */}
                            <div>
                                <div>Jenis Kelamin</div>
                                <input
                                    className="w-full rounded-lg font-bold"
                                    type="text"
                                    placeholder="Jenis Kelamin"
                                    value={
                                        dataSelectedPatient
                                            ? dataSelectedPatient.jk === "male"
                                                ? "Laki Laki"
                                                : dataSelectedPatient.jk ===
                                                  "female"
                                                ? "Perempuan"
                                                : "Tidak Di Ketahui"
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* Tanggal Lahir */}
                            <div>
                                <div>Tanggal Lahir</div>
                                <input
                                    className="w-full rounded-lg"
                                    type="text"
                                    placeholder="Tanggal Lahir"
                                    value={
                                        dataSelectedPatient
                                            ? dataSelectedPatient.birth
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* BB */}
                            <div>
                                <div>Berat Badan</div>
                                <input
                                    className="w-full rounded-lg"
                                    type="text"
                                    placeholder="Berat Badan"
                                    value={
                                        dataSelectedPatient
                                            ? dataSelectedPatient.bb
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* TB */}
                            <div>
                                <div>Tinggi Badan</div>
                                <input
                                    className="w-full rounded-lg"
                                    type="text"
                                    placeholder="Tinggi Badan"
                                    value={
                                        dataSelectedPatient
                                            ? dataSelectedPatient.tb
                                            : ""
                                    }
                                    disabled
                                />
                            </div>
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="lg:mt-4 flex flex-col gap-3"
                        >
                            {/* Asal Poli  */}
                            <div>
                                <div>Asal Poli</div>
                                <input
                                    className="w-full rounded-lg font-bold"
                                    type="text"
                                    placeholder="Asal Poli"
                                    value={
                                        layanan
                                            ? dataLayanan.find(
                                                  (item) =>
                                                      item.id_layanan ===
                                                      layanan
                                              )?.layanan
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* Tanggal Kunjungan */}
                            <div>
                                <div>Tanggal Kunjungan</div>
                                <input
                                    className="w-full rounded-lg"
                                    type="text"
                                    placeholder="Tanggal Kunjungan"
                                    value={
                                        createTime
                                            ? `${createTime.Tanggal} - ${createTime.Jam}`
                                            : ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* Dokter  */}
                            <div>
                                <div>Dokter</div>
                                <input
                                    className="w-full rounded-lg font-bold"
                                    type="text"
                                    placeholder="Dokter"
                                    value={
                                        dataSelectedPatient?.dokter
                                            ?.nama_dokter || ""
                                    }
                                    disabled
                                />
                            </div>

                            {/* Petugas Penanggung Jawab  */}
                            <div>
                                <div>Petugas Penanggung Jawab</div>
                                <input
                                    className="w-full rounded-lg font-bold"
                                    type="text"
                                    placeholder="Petugas Penanggung Jawab"
                                    value={
                                        dataSelectedPatient?.penanggung_jawab ||
                                        ""
                                    }
                                    disabled
                                />
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>

                {/* Resep Information */}
                <div>
                    <div className="font-bold lg:text-xl py-1 text-center bg-gray-500 text-white">
                        RESEP INFORMATION
                    </div>

                    {dataFarmasi ? (
                        <Grid span={{ base: 12, md: 6 }} gutter={20}>
                            {/* Col 1 */}
                            <Grid.Col
                                span={{ base: 12, md: 6 }}
                                className="mt-4 flex flex-col gap-3"
                            >
                                {/* Tanggal Resep  */}
                                <div>
                                    <div>Tanggal Resep</div>
                                    <input
                                        className="w-full rounded-lg font-bold"
                                        type="text"
                                        placeholder="Tanggal Resep"
                                        value={dataFarmasi?.tanggal_resep || ""}
                                        disabled
                                    />
                                </div>

                                {/* Nama Obat  */}
                                <div>
                                    <div>Nama Obat</div>
                                    <input
                                        className="w-full rounded-lg font-bold"
                                        type="text"
                                        placeholder="Nama Obat"
                                        value={dataFarmasi?.nama_obat || ""}
                                        disabled
                                    />
                                </div>

                                {/* Bentuk Sediaan */}
                                <div>
                                    <div>Bentuk Sediaan</div>
                                    <input
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="Bentuk Sediaan"
                                        value={
                                            dataFarmasi?.bentuk_sediaan || ""
                                        }
                                        disabled
                                    />
                                </div>
                            </Grid.Col>

                            {/* Col 2 */}
                            <Grid.Col
                                span={{ base: 12, md: 6 }}
                                className="lg:mt-4 flex flex-col gap-3"
                            >
                                {/* Dosis Obat */}
                                <div>
                                    <div>Dosis Obat</div>
                                    <input
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="Dosis Obat"
                                        value={dataFarmasi?.dosis_obat || ""}
                                        disabled
                                    />
                                </div>

                                {/* Jumlah Obat */}
                                <div>
                                    <div>Jumlah Obat</div>
                                    <input
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="Jumlah Obat"
                                        value={dataFarmasi?.jumlah_obat || ""}
                                        disabled
                                    />
                                </div>
                            </Grid.Col>
                        </Grid>
                    ) : (
                        <div className="mt-3 text-center font-bold text-xl ">
                            Data Resep Kosong
                        </div>
                    )}

                    {/* Data */}
                </div>

                {/* INPUT BILL  */}
                <div>
                    <div className="font-bold lg:text-xl py-1 text-center bg-gray-500 text-white">
                        INPUT BILL
                    </div>

                    {/* Data */}
                    <Grid span={{ base: 12, md: 6 }} gutter={20}>
                        {/* Col 1 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="mt-4 flex flex-col gap-3"
                        >
                            {/* Biaya Dokter */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Biaya Dokter</label>
                                <div className="flex flex-row gap-3 items-center">
                                    <div>Rp. </div>
                                    <NumberInput
                                        placeholder="Biaya Dokter"
                                        thousandSeparator=","
                                        defaultValue={1_000_000}
                                        withAsterisk
                                        {...form.getInputProps("biaya_dokter")}
                                    />
                                </div>
                            </div>

                            {/* Biaya Perawat */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Biaya Perawat</label>
                                <div className="flex flex-row gap-3 items-center">
                                    <div>Rp. </div>
                                    <NumberInput
                                        placeholder="Biaya Perawat"
                                        thousandSeparator=","
                                        defaultValue={1_000_000}
                                        withAsterisk
                                        {...form.getInputProps("biaya_perawat")}
                                    />
                                </div>
                            </div>
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            className="lg:mt-4 flex flex-col gap-3"
                        >
                            {/* Biaya Resep */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Biaya Resep</label>
                                <div className="flex flex-row gap-3 items-center">
                                    <div>Rp. </div>
                                    <NumberInput
                                        placeholder="Biaya Resep"
                                        thousandSeparator=","
                                        defaultValue={1_000_000}
                                        withAsterisk
                                        {...form.getInputProps("biaya_resep")}
                                    />
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default AddTagihanModal;

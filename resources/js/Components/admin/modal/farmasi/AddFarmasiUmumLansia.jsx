import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { Button, Group, TextInput, Box, Grid, Select } from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";

const AddFarmasiUmumLansia = ({ dataLayanan }) => {
    // State
    const [layanan, setLayanan] = useState();
    const [idSelectedPatient, setIdSelectedPatient] = useState();
    const [dataPatient, setDataPatient] = useState();
    const [dataSelectedPatient, setDataSelectedPatient] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            jenis_farmasi: "non asuransi",
            id_pemeriksaan: "",
            id_layanan: "",
            tanggal_resep: "",
            nama_obat: "",
            bentuk_sediaan: "",
            dosis_obat: "",
            jumlah_obat: "",
            aturan_pakai: "",
            stabilitas: "",
            tepat_obat: "",
            tepat_indikasi: "",
            tepat_dosis: "",
            tepat_waktu_penggunaan: "",
            tepat_rute: "",
            interaksi: "",
            duplikasi: "",
            alergi: "",
            kontra_indikasi: "",
            pio: "",
            konseling: "",
            telah_diberikan: "",
        },

        validate: {
            id_pemeriksaan: isNotEmpty("Dokter tidak boleh kosong"),
            id_layanan: isNotEmpty("ID Layanan tidak boleh kosong"),
            tanggal_resep: isNotEmpty("Tanggal Resep tidak boleh kosong"),
            nama_obat: isNotEmpty("Nama Obat tidak boleh kosong"),
            bentuk_sediaan: isNotEmpty("Bentuk Sediaan tidak boleh kosong"),
            dosis_obat: isNotEmpty("Dosis Obat tidak boleh kosong"),
            jumlah_obat: isNotEmpty("Jumlah Obat tidak boleh kosong"),
            aturan_pakai: isNotEmpty("Aturan Pakai tidak boleh kosong"),
            stabilitas: isNotEmpty("Stablitas tidak boleh kosong"),
            tepat_obat: isNotEmpty("Tepat Obat tidak boleh kosong"),
            tepat_indikasi: isNotEmpty("Tepat Indikasi tidak boleh kosong"),
            tepat_dosis: isNotEmpty("Tepat Dosis tidak boleh kosong"),
            tepat_waktu_penggunaan: isNotEmpty(
                "Tepat Waktu Penggunaan tidak boleh kosong"
            ),
            tepat_rute: isNotEmpty("Tepat Rute tidak boleh kosong"),
            interaksi: isNotEmpty("Interaksi tidak boleh kosong"),
            duplikasi: isNotEmpty("Duplikasi tidak boleh kosong"),
            alergi: isNotEmpty("Alergi tidak boleh kosong"),
            kontra_indikasi: isNotEmpty("Kontra Indikasi tidak boleh kosong"),
            pio: isNotEmpty("PIO/KIE tidak boleh kosong"),
            konseling: isNotEmpty("Konseling tidak boleh kosong"),
            telah_diberikan: isNotEmpty("Telah Diberikan tidak boleh kosong"),
        },
    });

    // console.log(dataLayanan);

    // Convert Data
    // Conver Layanan
    const convertLayanan = (data) => {
        return data.map((item) => ({
            value: item.id_layanan,
            label: item.layanan,
        }));
    };
    const convertPatient = (data) => {
        return dataPatient.map((item) => ({
            value:
                item.id_krj_poli_umum_lansia ||
                item.id_krj_poli_gigi ||
                item.id_krj_poli_KIA,
            label: `${item.name} - ${
                item.id_krj_poli_umum_lansia ||
                item.id_krj_poli_gigi ||
                item.id_krj_poli_KIA
            }`,
        }));
    };

    // Handle
    // Handle get Data Selected Patient
    const getDataSelectedPatient = (id) => {
        if (dataPatient) {
            const selectedPatient = dataPatient.filter(
                (patient) =>
                    patient.id_krj_poli_umum_lansia === id ||
                    patient.id_krj_poli_gigi === id ||
                    patient.id_krj_poli_KIA === id
            );
            const firstSelectedPatient =
                selectedPatient.length > 0 ? selectedPatient[0] : null;
            setDataSelectedPatient(firstSelectedPatient);
        }
    };

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/add-data/farmasi", {
                data: data,
            });

            if (response.data.message === "Success Save Data") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/master-menu/farmasi");
            } else if (response.data.message === "Failed Save Data") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message === "Found Data") {
                Swal.fire({
                    title: "Duplicate Data",
                    text: "Data Telah Ada",
                    icon: "error",
                });
            } else if (response.data.message === "Fail Request") {
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
                .get("/admin/get-data/get-data-umum")
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
                .get("/admin/get-data/get-data-gigi")
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
                .get("/admin/get-data/get-data-kia")
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
    }, [idSelectedPatient]);

    return (
        <Box
            component="form"
            mx="auto"
            onSubmit={form.onSubmit((data) => {
                handleSubmit(data);
            })}
        >
            {/* Detailatient */}
            <div>
                <div className="font-bold text-xl py-1 text-center bg-gray-500 text-white">
                    DETAIL PATIENT
                </div>
                {/* Selected PAtient */}
                <Grid>
                    {/* Layanan */}
                    <Grid.Col
                        className="mt-4 flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
                    >
                        {/* Ruangan / Unit Asal */}
                        <div className="flex flex-col gap-2">
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
                                    onChange={(selectedLayanan) => {
                                        form.setFieldValue(
                                            "id_layanan",
                                            selectedLayanan
                                        );
                                        setLayanan(selectedLayanan);
                                        // getKotas(selectedProvince); // Panggil getKotas saat provinsi dipilih
                                    }}
                                />
                            </div>
                        </div>
                    </Grid.Col>

                    {/* Patient */}
                    <Grid.Col
                        className="lg:mt-4 flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
                    >
                        {/* Patient */}
                        <div className="flex flex-col gap-2">
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
                                        form.setFieldValue(
                                            "id_pemeriksaan",
                                            SelectedPatient
                                        );
                                        setIdSelectedPatient(SelectedPatient);
                                        // getKotas(selectedProvince); // Panggil getKotas saat provinsi dipilih
                                    }}
                                />
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>

                {/* Detail Information PAtien */}
                <Grid>
                    {/* Col 1 */}
                    <Grid.Col
                        className=" flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
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
                    </Grid.Col>

                    {/* Col 2 */}
                    <Grid.Col
                        className=" flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
                    >
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
                </Grid>
            </div>

            {/* ISI */}
            <div className="flex flex-col">
                <Grid gutter="xl">
                    {/* kolom 1 */}
                    <Grid.Col
                        className="mt-4 flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
                    >
                        <div className=" py-2 flex flex-col gap-5">
                            {/* Administrasi */}
                            <div className="flex flex-col gap-3 py-2 px-3 border border-gray-400">
                                {/* Title */}
                                <div className="font-bold text-xl text-center bg-gray-500 text-white">
                                    ADMINISTRASI
                                </div>

                                {/* Isi */}
                                <div className="flex flex-col gap-3">
                                    {/* Dokter  */}
                                    <div>
                                        <div className="font-bold">Dokter</div>
                                        <input
                                            className="w-full rounded-lg "
                                            type="text"
                                            placeholder="Nama"
                                            value={
                                                dataSelectedPatient
                                                    ? dataSelectedPatient.dokter
                                                          .nama_dokter
                                                    : ""
                                            }
                                            disabled
                                        />
                                    </div>

                                    {/* Tanggal Resep  */}
                                    <div>
                                        <div className="font-bold">
                                            Tanggal Resep
                                        </div>
                                        <input
                                            className="w-full rounded-lg "
                                            type="date"
                                            placeholder=" Tanggal Resep"
                                            {...form.getInputProps(
                                                "tanggal_resep"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Farmasitik */}
                            <div className="flex flex-col gap-3 py-2 px-3 border border-gray-400">
                                {/* Title */}
                                <div className="font-bold text-xl text-center bg-gray-500 text-white">
                                    FARMASITIK
                                </div>

                                {/* Isi */}
                                <div className="flex flex-col gap-3">
                                    {/* Nama Obat  */}
                                    <TextInput
                                        label="Nama Obat"
                                        placeholder="Nama Obat"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("nama_obat")}
                                    />

                                    {/* Bentuk Sediaan  */}
                                    <TextInput
                                        label="Bentuk Sediaan"
                                        placeholder="Bentuk Sediaan"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps(
                                            "bentuk_sediaan"
                                        )}
                                    />

                                    {/* Dosis Obat  */}
                                    <TextInput
                                        label="Dosis Obat"
                                        placeholder="Dosis Obat"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("dosis_obat")}
                                    />

                                    {/* Jumlah Obat  */}
                                    <TextInput
                                        label="Jumlah Obat"
                                        placeholder="Jumlah Obat"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("jumlah_obat")}
                                    />

                                    {/* Aturan Pakai  */}
                                    <TextInput
                                        label="Aturan Pakai"
                                        placeholder="Aturan Pakai"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("aturan_pakai")}
                                    />

                                    {/* Stabilitas  */}
                                    <TextInput
                                        label="Stabilitas"
                                        placeholder="Bentuk Sediaan"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("stabilitas")}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid.Col>

                    {/* Kolom 2 */}
                    <Grid.Col
                        className="mt-4 flex flex-col gap-3"
                        span={{ base: 12, md: 6 }}
                    >
                        <div className="flex flex-col py-2 ">
                            {/* KLINIS */}
                            <div className="flex flex-col gap-3 py-2 px-3 border border-gray-400">
                                {/* Title */}
                                <div className="font-bold text-xl text-center bg-gray-500 text-white">
                                    KLINIS
                                </div>

                                {/* Isi */}
                                <div className="flex flex-col gap-3">
                                    {/* Tepat Obat  */}
                                    <TextInput
                                        label="Tepat Obat"
                                        placeholder="Tepat Obat"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("tepat_obat")}
                                    />

                                    {/* Tepat Indikasi  */}
                                    <TextInput
                                        label="Tepat Indikasi"
                                        placeholder="Tepat Indikasi"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps(
                                            "tepat_indikasi"
                                        )}
                                    />

                                    {/* Tepat Dosis  */}
                                    <TextInput
                                        label="Tepat Dosis"
                                        placeholder="Tepat Dosis"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("tepat_dosis")}
                                    />

                                    {/* Tepat Waktu Penggunaan  */}
                                    <TextInput
                                        label="Tepat Waktu Penggunaan"
                                        placeholder="Tepat Waktu Penggunaan"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps(
                                            "tepat_waktu_penggunaan"
                                        )}
                                    />

                                    {/* Tepat Rute  */}
                                    <TextInput
                                        label="Tepat Rute"
                                        placeholder="Tepat Rute"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("tepat_rute")}
                                    />

                                    {/* Interaksi  */}
                                    <TextInput
                                        label="Interaksi"
                                        placeholder="Interaksi"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("interaksi")}
                                    />

                                    {/* Duplikasi  */}
                                    <TextInput
                                        label="Duplikasi"
                                        placeholder="Duplikasi"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("duplikasi")}
                                    />

                                    {/* Alergi  */}
                                    <TextInput
                                        label="Alergi"
                                        placeholder="Alergi"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps("alergi")}
                                    />

                                    {/* Kontra Indikasi  */}
                                    <TextInput
                                        label="Kontra Indikasi"
                                        placeholder="Kontra Indikasi"
                                        size="md"
                                        withAsterisk
                                        {...form.getInputProps(
                                            "kontra_indikasi"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>

                <div>
                    <div className="font-bold text-xl py-1 text-center bg-gray-500 text-white">
                        ADDITIONAL INFORMATION
                    </div>

                    <div className="mt-3 flex flex-col gap-3">
                        {/* Telah Diberikan  */}
                        <TextInput
                            label="Telah Diberikan"
                            placeholder="Telah Diberikan"
                            size="md"
                            withAsterisk
                            {...form.getInputProps("telah_diberikan")}
                        />

                        {/* PIO / KIE  */}
                        <TextInput
                            label="PIO / KIE"
                            placeholder="PIO / KIE"
                            size="md"
                            withAsterisk
                            {...form.getInputProps("pio")}
                        />

                        {/* Konseling  */}
                        <TextInput
                            label="Konseling"
                            placeholder="Konseling"
                            size="md"
                            withAsterisk
                            {...form.getInputProps("konseling")}
                        />
                    </div>
                </div>
            </div>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};

export default AddFarmasiUmumLansia;

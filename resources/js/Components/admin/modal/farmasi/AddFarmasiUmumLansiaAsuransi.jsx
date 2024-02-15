import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { Button, Group, TextInput, Box, Grid, Radio } from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";
import { router } from "@inertiajs/react";

const AddFarmasiUmumLansiaAsuransi = ({ dataLayanan }) => {
    // State
    const [layanan, setLayanan] = useState();
    const [idSelectedPatient, setIdSelectedPatient] = useState();
    const [dataPatient, setDataPatient] = useState();
    const [dataSelectedPatient, setDataSelectedPatient] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            jenis_farmasi: "asuransi",
            id_pemeriksaan: "asuransi",
            id_layanan: "asuransi",
            tanggal_resep: "",

            // Asuransi
            asuransi_nama: "",
            asuransi_umur: "",
            asuransi_jk: "",
            asuransi_bb: "",
            asuransi_dokter: "",
            asuransi_unit_asal: "",

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

            // asuransi
            asuransi_nama: isNotEmpty(" Nama tidak boleh kosong"),
            asuransi_umur: isNotEmpty(" Tanggal Lahir tidak boleh kosong"),
            asuransi_jk: isNotEmpty(" Jenis Kelamin tidak boleh kosong"),
            asuransi_bb: isNotEmpty(" Berat Badan tidak boleh kosong"),
            asuransi_dokter: isNotEmpty(" Dokter tidak boleh kosong"),
            asuransi_unit_asal: isNotEmpty(" Unit Asal tidak boleh kosong"),

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
            value: item.id_krj_poli_umum_lansia || item.id_krj_poli_gigi,
            label: `${item.name} - ${
                item.id_krj_poli_umum_lansia || item.id_krj_poli_gigi
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
                    patient.id_krj_poli_gigi === id
            );
            const firstSelectedPatient =
                selectedPatient.length > 0 ? selectedPatient[0] : null;
            setDataSelectedPatient(firstSelectedPatient);
        }
    };

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post(
                "/admin/add-data/farmasi-asuransi",
                {
                    data: data,
                }
            );

            console.log(response.data.message);

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
    useEffect(() => {
        if (layanan === "layanan1") {
            axios
                .get("/admin/get-data/get-data-umum")
                .then((response) => {
                    setDataPatient(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (layanan === "layanan3") {
            axios
                .get("/admin/get-data/get-data-gigi")
                .then((response) => {
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

    // useEffect(() => {
    //     console.log(idSelectedPatient);
    // }, [idSelectedPatient]);

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

                {/* Detail Information PAtien */}
                <div className="mt-5">
                    <Grid>
                        {/* Col 1 */}
                        <Grid.Col
                            className=" flex flex-col gap-3"
                            span={{ base: 12, md: 6 }}
                        >
                            {/* Nama  */}
                            <TextInput
                                label="Nama "
                                placeholder="Nama"
                                size="md"
                                withAsterisk
                                {...form.getInputProps("asuransi_nama")}
                            />

                            {/* Tanggal Lahir */}
                            <div className="flex flex-col">
                                <label className="font-bold">
                                    Tanggal Lahir
                                </label>
                                <input
                                    className="w-full border border-gray-300 text-gray-400 rounded-lg"
                                    label="Tanggal Lahir"
                                    type="date"
                                    {...form.getInputProps("asuransi_umur")}
                                />
                            </div>

                            {/* Ruangan / Unit Asal */}
                            <TextInput
                                label="Ruangan / Unit Asal "
                                placeholder="Ruangan / Unit Asal"
                                size="md"
                                withAsterisk
                                {...form.getInputProps("asuransi_unit_asal")}
                            />
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col
                            className=" flex flex-col gap-3"
                            span={{ base: 12, md: 6 }}
                        >
                            {/* Jenis Kelamin */}
                            <div className="item h-10 my-3 flex flex-col gap-2">
                                <div className="title w-[50%] flex items-center">
                                    Jenis Kelamin
                                </div>
                                <div className=" w-full flex flex-row ">
                                    <Radio.Group
                                        name="gender"
                                        className="w-full h-full"
                                        {...form.getInputProps("asuransi_jk")}
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

                            {/* BB */}
                            <TextInput
                                label="Berat Badan "
                                placeholder="Berat Badan"
                                type="number"
                                size="md"
                                withAsterisk
                                {...form.getInputProps("asuransi_bb")}
                            />

                            {/* Dokter */}
                            <TextInput
                                label="Dokter"
                                placeholder="Dokter"
                                size="md"
                                withAsterisk
                                {...form.getInputProps("asuransi_dokter")}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
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

export default AddFarmasiUmumLansiaAsuransi;

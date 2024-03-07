import React, { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { router } from "@inertiajs/react";
import { Button, Group, Box, NumberInput, Grid, Select } from "@mantine/core";
import Swal from "sweetalert2";
import axios from "axios";

const PembayaranModal = () => {
    // useState

    // Kasir
    const [allDataTagihan, setAllDataTagihan] = useState();
    const [idSelectedTagihan, setIdSelectedTagihan] = useState();
    const [spesificDataTagihan, setSpesificDataTagihan] = useState();

    // Validator Form
    const form = useForm({
        initialValues: {
            no_tagihan: spesificDataTagihan
                ? spesificDataTagihan.no_tagihan
                : "",
            uang_pembayaran: "",
        },

        validate: {
            uang_pembayaran: isNotEmpty("Biaya Perawat Harus Di Isi"),
        },
    });

    // Convert Data
    // Conver Layanan
    const convertTagihan = (data) => {
        return data.map((item) => ({
            value: item.no_tagihan,
            label:
                (item.krj_poli_umum_lansia &&
                    `${item.no_tagihan} - ${item.krj_poli_umum_lansia.name}`) ||
                (item.krj_poli_k_i_a &&
                    `${item.no_tagihan} - ${item.krj_poli_k_i_a.name}`) ||
                (item.krj_poli_anak &&
                    `${item.no_tagihan} - ${item.krj_poli_anak.name}`) ||
                (item.krj_poli_gigi &&
                    `${item.no_tagihan} - ${item.krj_poli_gigi.name}`) ||
                "",
        }));
    };

    // Handle get Data Selected Patient
    const handleGetDataTagihan = () => {
        axios
            .get("/admin/get-data/get-data-tagihan")
            .then((response) => {
                if (response.data.message === "Empty Data") {
                    console.log("Empty Data");
                }
                setAllDataTagihan(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSpesificTagihan = async (id) => {
        try {
            const response = await axios.post(
                "/admin/get-data/get-data-tagihan",
                {
                    id: id,
                }
            );

            setSpesificDataTagihan(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDate = (date) => {
        const updatedAtString = date;

        // Mengambil hanya bagian tanggal (10 karakter pertama)
        const tanggal = updatedAtString.substring(0, 10);
        return tanggal;
    };

    // Handle Submit
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post("/admin/pembayaran", {
                no_tagihan: data,
            });

            console.log(response.data.message);


            if (response.data.message == "Success Pembayaran") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
                router.get("/admin/kasir");
            } else if (response.data.message == "Failed Pembayaran") {
                Swal.fire({
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                    icon: "error",
                });
            } else if (response.data.message == "Data Sudah Lunas") {
                Swal.fire({
                    title: "Tagihan Sudah Lunas",
                    text: "Tagihan Sudah Lunas",
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
    useEffect(() => {
        handleGetDataTagihan();
    }, []);
    useEffect(() => {
        if (idSelectedTagihan) {
            handleSpesificTagihan(idSelectedTagihan);
        }
    }, [idSelectedTagihan]);
    useEffect(() => {
        if (spesificDataTagihan) {
            form.setFieldValue(
                "no_tagihan",
                spesificDataTagihan.no_tagihan || ""
            );
        }
    }, [spesificDataTagihan]);

    // useEffect(() => {
    //     console.log(spesificDataTagihan);
    // }, [spesificDataTagihan]);

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
                {/* Find Tagihan  */}
                <div>
                    <div className="font-bold lg:text-xl py-1 text-center bg-gray-500 text-white">
                        FIND BILL
                    </div>

                    {/* Data */}
                    <div>
                        {/* Ruangan / Unit Asal */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center font-bold">
                                Nomor Tagihan
                            </div>
                            <div className="">
                                <Select
                                    placeholder="Nomor Tagihan"
                                    data={
                                        allDataTagihan
                                            ? convertTagihan(allDataTagihan)
                                            : ""
                                    }
                                    radius="md"
                                    searchable
                                    className="border border-b-violet-50"
                                    onChange={(selectedTagihan) =>
                                        setIdSelectedTagihan(selectedTagihan)
                                    }
                                />
                            </div>
                        </div>
                    </div>
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .name) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a.name) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak.name) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi.name) ||
                                              ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .jk) === "male"
                                                ? "Laki Laki"
                                                : "Perempuan" ||
                                                  (spesificDataTagihan.krj_poli_k_i_a &&
                                                      e.krj_poli_k_i_a.jk) ===
                                                      "male"
                                                ? "Laki Laki"
                                                : "Perempuan" ||
                                                  (spesificDataTagihan.krj_poli_anak &&
                                                      e.krj_poli_anak.jk) ===
                                                      "male"
                                                ? "Laki Laki"
                                                : "Perempuan" ||
                                                  (spesificDataTagihan.krj_poli_gigi &&
                                                      e.krj_poli_gigi.jk) ===
                                                      "male"
                                                ? "Laki Laki"
                                                : "Perempuan" || ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .birth) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a.birth) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak.birth) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi.birth) ||
                                              ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .bb) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a.bb) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak.bb) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi.bb) ||
                                              ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .tb) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a.tb) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak.tb) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi.tb) ||
                                              ""
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
                                        spesificDataTagihan
                                            ? spesificDataTagihan.krj_poli_umum_lansia
                                                ? "Poli Umum"
                                                : spesificDataTagihan.krj_poli_k_i_a
                                                ? "Poli Kesehatan Ibu dan Anak"
                                                : spesificDataTagihan.krj_poli_anak
                                                ? "Poli Anak"
                                                : spesificDataTagihan.krj_poli_gigi
                                                ? "Poli Gigi"
                                                : ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  getDate(
                                                      spesificDataTagihan
                                                          .krj_poli_umum_lansia
                                                          .updated_at
                                                  )) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  getDate(
                                                      spesificDataTagihan
                                                          .krj_poli_k_i_a
                                                          .updated_at
                                                  )) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  getDate(
                                                      spesificDataTagihan
                                                          .krj_poli_anak
                                                          .updated_at
                                                  )) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  getDate(
                                                      spesificDataTagihan
                                                          .krj_poli_gigi
                                                          .updated_at
                                                  )) ||
                                              ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .dokter.nama_dokter) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a.dokter
                                                      .nama_dokter) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak.dokter
                                                      .nama_dokter) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi.dokter
                                                      .nama_dokter) ||
                                              ""
                                            : ""
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
                                        spesificDataTagihan
                                            ? (spesificDataTagihan.krj_poli_umum_lansia &&
                                                  spesificDataTagihan
                                                      .krj_poli_umum_lansia
                                                      .penanggung_jawab) ||
                                              (spesificDataTagihan.krj_poli_k_i_a &&
                                                  spesificDataTagihan
                                                      .krj_poli_k_i_a
                                                      .penanggung_jawab) ||
                                              (spesificDataTagihan.krj_poli_anak &&
                                                  spesificDataTagihan
                                                      .krj_poli_anak
                                                      .penanggung_jawab) ||
                                              (spesificDataTagihan.krj_poli_gigi &&
                                                  spesificDataTagihan
                                                      .krj_poli_gigi
                                                      .penanggung_jawab) ||
                                              ""
                                            : ""
                                    }
                                    disabled
                                />
                            </div>
                        </Grid.Col>
                    </Grid>
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
                                        value={
                                            spesificDataTagihan
                                                ? spesificDataTagihan.biaya_dokter
                                                : ""
                                        }
                                        disabled
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
                                        value={
                                            spesificDataTagihan
                                                ? spesificDataTagihan.biaya_perawat
                                                : ""
                                        }
                                        disabled
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
                                        value={
                                            spesificDataTagihan
                                                ? spesificDataTagihan.biaya_resep
                                                : ""
                                        }
                                        disabled
                                    />
                                </div>
                            </div>

                            {/* Uang Pembayaran */}
                            <div className="flex flex-col gap-1 font-bold text-2xl">
                                <label htmlFor="">Pembayaran</label>
                                <div className="flex flex-row gap-3 items-center">
                                    <div>Rp. </div>
                                    <NumberInput
                                        placeholder="Pembayaran"
                                        thousandSeparator=","
                                        defaultValue={1_000_000}
                                        withAsterisk
                                        {...form.getInputProps(
                                            "uang_pembayaran"
                                        )}
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

export default PembayaranModal;

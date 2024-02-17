import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Grid } from "@mantine/core";

const DetailFarmasi = ({ currentUser, dataFarmasi }) => {
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Farmasi", href: "/admin/master-menu/farmasi" },
        { title: "Detail Resep", href: "/admin/detail/farmasi" },
    ];
    console.log(dataFarmasi);
    return (
        <LayoutAdmin
            title="Detail Resep Obat"
            titlePage="Detail Resep Obat"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div>
                <div className="bg-white rounded-xl shadow-xl text-center font-bold text-xl px-5 py-3">
                    DETAIL RUJUKAN RESEP
                </div>

                {/* Isi */}
                <div className="mt-5 bg-white rounded-xl px-5 py-5 mb-5 flex flex-col shadow-xl text-[0.9rem] ">
                    <Grid span={{ base: 12, md: 6 }} gutter={30}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            {/* ADMINISTRASI */}
                            <div className="flex flex-col ">
                                {/* Administrasi */}
                                <div className="bg-gray-200 font-bold text-base text-center py-1">
                                    ADMINISTRASI
                                </div>

                                {/* Nama */}
                                <div className="px-3 py-2 border">
                                    <div>Nama :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.krj_poli_umum_lansia
                                                .name) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.krj_poli_gigi
                                                    .name) ||
                                            (dataFarmasi.krj_poli_anak &&
                                                dataFarmasi.krj_poli_anak
                                                    .name) ||
                                            (dataFarmasi.krj_poli_k_i_a &&
                                                dataFarmasi.krj_poli_k_i_a
                                                    .name) ||
                                            dataFarmasi.asuransi_nama}
                                    </div>
                                </div>

                                {/* Jenis Kelamin */}
                                <div className="px-3 py-2 border">
                                    <div>Jenis Kelamin :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.krj_poli_umum_lansia
                                                .jk) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.krj_poli_gigi.jk) ||
                                            (dataFarmasi.krj_poli_anak &&
                                                dataFarmasi.krj_poli_anak.jk) ||
                                            (dataFarmasi.krj_poli_k_i_a &&
                                                dataFarmasi.krj_poli_k_i_a
                                                    .jk) ||
                                            dataFarmasi.asuransi_jk}
                                    </div>
                                </div>

                                {/* Berat Badan */}
                                <div className="px-3 py-2 border">
                                    <div>Berat Badan :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.krj_poli_umum_lansia
                                                .bb) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.krj_poli_gigi.bb) ||
                                            (dataFarmasi.krj_poli_anak &&
                                                dataFarmasi.krj_poli_anak.bb) ||
                                            (dataFarmasi.krj_poli_k_i_a &&
                                                dataFarmasi.krj_poli_k_i_a
                                                    .bb) ||
                                            dataFarmasi.asuransi_bb}
                                    </div>
                                </div>

                                {/* Dokter */}
                                <div className="px-3 py-2 border">
                                    <div>Dokter :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.krj_poli_umum_lansia
                                                .dokter.nama_dokter) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.krj_poli_gigi.dokter
                                                    .nama_dokter) ||
                                            (dataFarmasi.krj_poli_anak &&
                                                dataFarmasi.krj_poli_anak.dokter
                                                    .nama_dokter) ||
                                            (dataFarmasi.krj_poli_k_i_a &&
                                                dataFarmasi.krj_poli_k_i_a
                                                    .dokter.nama_dokter) ||
                                            dataFarmasi.asuransi_dokter}
                                    </div>
                                </div>

                                {/* Tanggal Resep */}
                                <div className="px-3 py-2 border">
                                    <div>Tanggal Resep :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tanggal_resep}
                                    </div>
                                </div>

                                {/* Unit Asal */}
                                <div className="px-3 py-2 border">
                                    <div>Ruangan / Unit Asal Resep :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.layanan.layanan) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.layanan.layanan) ||
                                            (dataFarmasi.krj_poli_anak &&
                                                dataFarmasi.layanan.layanan) ||
                                            (dataFarmasi.krj_poli_k_i_a &&
                                                dataFarmasi.layanan.layanan) ||
                                            dataFarmasi.asuransi_unit_asal}
                                    </div>
                                </div>
                            </div>

                            {/* FARMASITIK */}
                            <div className="flex flex-col mt-3">
                                {/* Administrasi */}
                                <div className="bg-gray-200 font-bold text-base text-center py-1">
                                    FARMASITIK
                                </div>

                                {/* Nama Obat */}
                                <div className="px-3 py-2 border">
                                    <div>Nama Obat :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.nama_obat}
                                    </div>
                                </div>

                                {/* Bentuk Sediaan */}
                                <div className="px-3 py-2 border">
                                    <div>Bentuk Sediaan :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.bentuk_sediaan}
                                    </div>
                                </div>

                                {/* Dosis Obat */}
                                <div className="px-3 py-2 border">
                                    <div>Dosis Obat :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.dosis_obat}
                                    </div>
                                </div>

                                {/* Jumlah Obat */}
                                <div className="px-3 py-2 border">
                                    <div>Jumlah Obat :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.jumlah_obat}
                                    </div>
                                </div>

                                {/* Aturan Pakai */}
                                <div className="px-3 py-2 border">
                                    <div>Aturan Pakai :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.aturan_pakai}
                                    </div>
                                </div>

                                {/* Stabilitas */}
                                <div className="px-3 py-2 border">
                                    <div>Stabilitas :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.stabilitas}
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>

                        {/* Col 2 */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <div className="flex flex-col ">
                                {/* KLINIS */}
                                <div className="bg-gray-200 font-bold text-base text-center py-1">
                                    KLINIS
                                </div>

                                {/* Tepat Obat */}
                                <div className="px-3 py-2 border">
                                    <div>Tepat Obat :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tepat_obat}
                                    </div>
                                </div>

                                {/* Tepat Indikasi */}
                                <div className="px-3 py-2 border">
                                    <div>Tepat Indikasi :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tepat_indikasi}
                                    </div>
                                </div>

                                {/* Tepat Dosis */}
                                <div className="px-3 py-2 border">
                                    <div>Tepat Dosis :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tepat_dosis}
                                    </div>
                                </div>

                                {/* Tepat Waktu Penggunaan */}
                                <div className="px-3 py-2 border">
                                    <div>Tepat Waktu Penggunaan :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tepat_waktu_penggunaan}
                                    </div>
                                </div>

                                {/* Tepat Rute */}
                                <div className="px-3 py-2 border">
                                    <div>Tepat Rute :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.tepat_rute}
                                    </div>
                                </div>

                                {/* Interaksi */}
                                <div className="px-3 py-2 border">
                                    <div>Interaksi :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.interaksi}
                                    </div>
                                </div>

                                {/* Duplikasi */}
                                <div className="px-3 py-2 border">
                                    <div>Duplikasi :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.duplikasi}
                                    </div>
                                </div>

                                {/* Alergi */}
                                <div className="px-3 py-2 border">
                                    <div>Alergi :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.alergi}
                                    </div>
                                </div>

                                {/* Kontra Indikasi */}
                                <div className="px-3 py-2 border">
                                    <div>Kontra Indikasi :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.kontra_indikasi}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-3">
                                {/* KLINIS */}
                                <div className="bg-gray-200 font-bold text-base text-center py-1">
                                    ADDITIONAL
                                </div>

                                {/* Telah Diberikan */}
                                <div className="px-3 py-2 border">
                                    <div>Telah Diberikan :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.telah_diberikan}
                                    </div>
                                </div>

                                {/* PIO / KIE */}
                                <div className="px-3 py-2 border">
                                    <div>PIO / KIE :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.pioKie}
                                    </div>
                                </div>

                                {/* Konseling */}
                                <div className="px-3 py-2 border">
                                    <div>Konseling :</div>
                                    <div className="font-bold">
                                        {dataFarmasi.konseling}
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DetailFarmasi;

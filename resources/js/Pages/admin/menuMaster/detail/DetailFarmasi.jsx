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
                    <Grid span={{ base: 12, md: 6 }} gutter={0}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
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
                                            dataFarmasi.asuransi_bb}
                                    </div>
                                </div>

                                {/* Dokter */}
                                <div className="px-3 py-2 border">
                                    <div>Dokter :</div>
                                    <div className="font-bold">
                                        {(dataFarmasi.krj_poli_umum_lansia &&
                                            dataFarmasi.krj_poli_umum_lansia
                                                .bb) ||
                                            (dataFarmasi.krj_poli_gigi &&
                                                dataFarmasi.krj_poli_gigi.bb) ||
                                            dataFarmasi.asuransi_bb}
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

import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Grid } from "@mantine/core";
import DetailFormLab from "@/Components/admin/detail/DetailFormLab";
const DetailLab = ({ currentUser, dataLab }) => {
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Laboratorium", href: "/admin/master-menu/laboratorium" },
        { title: "Detail Laboratorium", href: "/admin/detail/laboratorium" },
    ];

    console.log(dataLab);
    return (
        <LayoutAdmin
            title="Detail Laboratorium"
            titlePage="Detail Laboratorium"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            {/* Informasi Pasien */}
            <div className="w-full">
                <Grid span={{ base: 12, md: 6 }} gutter={10}>
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        className="mt-4 flex flex-col gap-3"
                    >
                        <div className="px-5 py-3 flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-300 ">
                            {/* Nama */}
                            <div className="grid grid-cols-3">
                                <div className=" ">Nama Pasien :</div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.name}
                                </div>
                            </div>
                            {/* Jenis Kelamin */}
                            <div className="grid grid-cols-3">
                                <div className="">Jenis Kelamin :</div>
                                <div className="lg:col-span-2 col-span-2 font-bold">
                                    {dataLab.jk === "male"
                                        ? "Laki-Laki"
                                        : dataLab.jk === "female"
                                        ? "Perempuan"
                                        : ""}
                                </div>
                            </div>
                            {/* TTL */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">TTL :</div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.ttl}
                                </div>
                            </div>
                            {/* Umur */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">Umur :</div>
                                <div className="lg:col-span-2 font-bold">
                                    <span>{dataLab.age}</span> Tahun
                                </div>
                            </div>
                            {/* Alamat */}
                            <div className="grid grid-cols-3">
                                <div className=" ">Alamat :</div>
                                <div className="lg:col-span-2 col-span-3 px-3 lg:px-0 font-bold">
                                    {dataLab.address}
                                </div>
                            </div>
                            {/* No Telepon */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">No Telepon :</div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.phone}
                                </div>
                            </div>
                            {/* No Kartu */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">No Kartu :</div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.card_number}
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        className="mt-4 flex flex-col gap-3"
                    >
                        <div className="px-5 py-3 flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-300 ">
                            {/* Tanggal Permintaan */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">
                                    Tanggal Permintaan :
                                </div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.request_date}
                                </div>
                            </div>
                            {/* Dokter / Petugas Pengirim */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">
                                    Dokter / Petugas Pengirim :
                                </div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.officer}
                                </div>
                            </div>
                            {/* Asal Poli */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">Asal Poli :</div>
                                <div className="lg:col-span-2 font-bold">
                                    {dataLab.layanan.layanan}
                                </div>
                            </div>
                            {/* Keterangan Klinis */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">
                                    Keterangan Klinis :
                                </div>
                                <div className="lg:col-span-2 col-span-3 px-3 lg:px-0 text-sm font-bold">
                                    {dataLab.clinical_desc}
                                </div>
                            </div>
                            {/* Paraf */}
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 ">Paraf :</div>
                                <div className="lg:col-span-2 font-bold">
                                    Garix
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            {/* Form */}
            <div className="mt-5 px-5 py-3 flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-300 ">
                {/* Judul */}
                <div className="text-center font-bold lg:text-xl border-b border-gray-500 pb-3">
                    FORMULIR PERMINTAAN PEMERIKSAAN LABORATORIUM
                </div>

                {/* Isi */}
                <div className="px-5">
                    <DetailFormLab dataLab={dataLab} />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DetailLab;

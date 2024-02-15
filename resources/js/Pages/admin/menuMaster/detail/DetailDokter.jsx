import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Avatar, Grid } from "@mantine/core";

// gambar
import avatarImage from "../../../../../../public/asset/icon/admin/avatar.png";

const DetailDokter = ({ currentUser, dataDokter }) => {
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Dokter", href: "/admin/master-menu/dokter" },
        { title: "Detail Dokter", href: "/admin/detail/dokter" },
    ];

    return (
        <LayoutAdmin
            title="Detail Dokter"
            titlePage="Detail Dokter"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            {/* Personal Info */}
            <div className="w-full px-5 py-3 bg-white rounded-xl shadow-xl border border-gray-300">
                <Grid span={{ base: 12, md: 6 }} gutter={0}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div
                            className={`px-3 flex flex-row gap-10 h-full items-center lg:border-r border-gray-500`}
                        >
                            {/* Avatar */}
                            <Avatar src={avatarImage} alt="it's me" size="xl" />

                            {/* profil */}
                            <div className="w-full ">
                                {/* Name */}
                                <div className="font-bold text-xl pb-1 mb-1 border-b border-black">
                                    {dataDokter.nama_dokter}
                                </div>
                                {/* id Staff */}
                                <div>{dataDokter.nip}</div>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div
                            className={`pb-5 lg:pb-0 lg:mt-0 mt-3 px-3 h-full flex flex-col gap-2 justify-center items-center`}
                        >
                            {/* phone */}
                            <div className="w-full grid grid-cols-3 grid-flow-row gap-10">
                                <div className="">Phone Number </div>

                                <div className="font-bold col-start-2">
                                    {dataDokter.noHp}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="w-full grid grid-cols-3 grid-flow-row gap-10 ">
                                <div className="">Email </div>

                                <div className="font-bold col-start-2">
                                    {dataDokter.email}
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            {/* Detail info */}
            <div className="mt-5 ">
                <Grid span={{ base: 12, md: 6 }} gutter={30}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="bg-white rounded-xl px-5 py-5 flex flex-col shadow-xl ">
                            {/* Tintle */}
                            <div className="text-gray-400 font-bold pb-2 border-b border-gray-400">
                                Personal Information
                            </div>

                            {/* body */}
                            <div className="mt-2 text-sm">
                                <Grid span={{ base: 12, md: 6 }} gutter={10}>
                                    <Grid.Col
                                        span={6}
                                        className="flex flex-col gap-5"
                                    >
                                        {/* Addrees */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Address
                                            </div>
                                            <div>{dataDokter.alamat}</div>
                                        </div>

                                        {/* Poli */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Poli
                                            </div>
                                            <div>
                                                {dataDokter.layanan.layanan}
                                            </div>
                                        </div>
                                    </Grid.Col>

                                    {/* Col 2 */}
                                    <Grid.Col
                                        span={6}
                                        className="flex flex-col gap-5"
                                    >
                                        {/* Spesialis */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Spesialis
                                            </div>
                                            <div>{dataDokter.spesialis}</div>
                                        </div>
                                    </Grid.Col>
                                </Grid>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </LayoutAdmin>
    );
};

export default DetailDokter;

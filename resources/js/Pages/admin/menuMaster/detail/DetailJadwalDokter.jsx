import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Avatar, Grid } from "@mantine/core";

import avatarImage from "../../../../../../public/asset/icon/admin/avatar.png";

const DetailJadwalDokter = ({ currentUser, dataJadwal }) => {
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Jadwal Dokter", href: "/admin/master-menu/jadwal-dokter" },
        { title: "Detail Jadwal", href: "/admin/detail/jadwal-dokter" },
    ];

    // useState
    const [jadwal, setJadwal] = useState([]);

    const handleJadwal = (dataJadwal) => {
        const jadwalTidakMidnight = Object.entries(dataJadwal).filter(
            ([_, waktu]) => waktu !== "00:00 - 00:00"
        );

        const hariData = jadwalTidakMidnight.filter(
            ([key, _]) =>
                key !== "dokter" &&
                key !== "created_at" &&
                key !== "updated_at" &&
                !key.startsWith("id_")
        );
        setJadwal(hariData);
    };

    useEffect(() => {
        handleJadwal(dataJadwal);
    }, [dataJadwal]);

    return (
        <LayoutAdmin
            title="Detail Admin"
            titlePage="Detail Admin"
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
                                    {dataJadwal.dokter.nama_dokter}
                                </div>
                                {/* NIP */}
                                <div>{dataJadwal.dokter.nip}</div>
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
                                    {dataJadwal.dokter.noHp}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="w-full grid grid-cols-3 grid-flow-row gap-10 ">
                                <div className="">Email </div>

                                <div className="font-bold col-start-2">
                                    {dataJadwal.dokter.email}
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            {/* Jadwal */}
            <div className="w-full px-5 py-5 mt-5 bg-white rounded-xl shadow-xl border border-gray-300">
                {/* Judul */}
                <div className="text-center text-[1.5rem] font-bold pb-2 border-b border-black">
                    Jadwal
                </div>

                {/* Isi */}
                <div className="w-full mt-5 flex flex-col justify-center items-center">
                    <table className="w-[80%] lg:w-[50%] shadow-xl">
                        <thead className="w-full text-center font-bold bg-[#31617B] text-white">
                            <tr>
                                <td className="border border-white">Hari</td>
                                <td className="border border-white">Jam</td>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {jadwal.map(([hari, waktu]) => (
                                <tr key={hari} className="bg-gray-200">
                                    <td className="py-4 font-bold border border-white">
                                        {hari.charAt(0).toUpperCase() +
                                            hari.slice(1)}
                                    </td>
                                    <td className="border border-white">
                                        {waktu}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DetailJadwalDokter;

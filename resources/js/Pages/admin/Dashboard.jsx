import React, { useEffect } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import CardData from "@/Components/admin/dashboardAdmin/CardData";
import { Link } from "@inertiajs/react";

const Dashboard = ({ currentUser, totalData }) => {
    const breadCrumbs = [{ title: "Home /", href: "/admin" }];

    const judulCard = [
        "RU. Umum dan Lansia",
        "RU. Anak",
        "RU. Gigi",
        "RU. Kesehatan Ibu dan Anak",
        "Laboratorium",
        "Farmasi",
    ];

    return (
        <>
            <LayoutAdmin
                title="Dashboard"
                titlePage="Dashboard"
                breadCrumbs={breadCrumbs}
                user={currentUser}
            >
                <div className="flex flex-col gap-10">
                    {/* Total Data */}
                    <div className="order-2 md:order-1 flex flex-col gap-3 ">
                        <div className="font-bold text-xl">Total Data :</div>

                        {/* Card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 place-items-center ">
                            <Link
                                href="/admin/master-menu/rawat-jalan-umum-lansia"
                                className="w-[90%]"
                            >
                                <CardData
                                    judul="RU. Umum dan Lansia"
                                    angka={totalData.totalUmumLansia}
                                    color1="#3fa559"
                                    color2="#037720"
                                />
                            </Link>
                            <Link
                                href="/admin/master-menu/rawat-jalan-anak"
                                className="w-[90%]"
                            >
                                <CardData
                                    judul="RU. Anak"
                                    angka={totalData.totalAnak}
                                    color1="#3dc5f1"
                                    color2="#077ea4"
                                />
                            </Link>
                            <Link
                                href="/admin/master-menu/poli-gigi"
                                className="w-[90%]"
                            >
                                {" "}
                                <CardData
                                    judul="RU. Gigi"
                                    angka={totalData.totalGigi}
                                    color1="#FFC67B"
                                    color2="#F98335"
                                />
                            </Link>
                            <Link
                                href="/admin/master-menu/rawat-jalan-kia"
                                className="w-[90%]"
                            >
                                <CardData
                                    judul="RU. Kesehatan Ibu dan Anak"
                                    angka={totalData.totalKIA}
                                    color1="#FC8097"
                                    color2="#E24177"
                                />
                            </Link>
                            <Link
                                href="/admin/master-menu/laboratorium"
                                className="w-[90%]"
                            >
                                <CardData
                                    judul="Laboratorium"
                                    angka={totalData.totalLaboratorium}
                                    color1="#afafaf"
                                    color2="#656565"
                                />
                            </Link>
                            <Link
                                href="/admin/master-menu/farmasi"
                                className="w-[90%]"
                            >
                                <CardData
                                    judul="Farmasi"
                                    angka={totalData.totalFarmasi}
                                    color1="#08e6e6"
                                    color2="#089191"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Ucapan */}
                    <div className="order-1 bg-[#275167] text-white px-5 md:px-10 py-2 md:text-xl text-center">
                        <marquee behavior="" direction="">
                            Welcome Back,{" "}
                            <span className="font-bold">
                                {currentUser.name} - {currentUser.id_staff}
                            </span>
                        </marquee>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
};

export default Dashboard;

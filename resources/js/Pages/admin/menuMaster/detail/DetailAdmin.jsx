import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Avatar, Grid, Breadcrumbs } from "@mantine/core";

// gambar
import avatarImage from "../../../../../../public/asset/icon/admin/avatar.png";

const DetailAdmin = ({ currentUser, dataAdmin }) => {
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Admins", href: "/admin/master-menu/admin" },
        { title: "Detail Admin", href: "/admin/detail/admin" },
    ];

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
                                    {dataAdmin.admin.name}
                                </div>
                                {/* id Staff */}
                                <div>{dataAdmin.admin.id_staff}</div>
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
                                    {dataAdmin.admin.phone}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="w-full grid grid-cols-3 grid-flow-row gap-10 ">
                                <div className="">Email </div>

                                <div className="font-bold col-start-2">
                                    {dataAdmin.admin.email}
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
                                        {/* Gender */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Gender
                                            </div>
                                            <div>
                                                {dataAdmin.admin.gender ===
                                                "male"
                                                    ? "Laki - Laki"
                                                    : dataAdmin.admin.gender ===
                                                      "female"
                                                    ? "Perempuan"
                                                    : "Tidak Diketahui"}
                                            </div>
                                        </div>

                                        {/* Birth of Date */}
                                        <div className="font-bold">
                                            <div className="text-gray-400">
                                                Birth of Date
                                            </div>
                                            <div>{dataAdmin.admin.birth}</div>
                                        </div>

                                        {/* Religion */}
                                        <div className="font-bold">
                                            <div className="text-gray-400">
                                                Religion
                                            </div>
                                            <div>
                                                {dataAdmin.admin.religion}
                                            </div>
                                        </div>

                                        {/* Birth of Date */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Province
                                            </div>
                                            <div>
                                                {dataAdmin.admin.province}
                                            </div>
                                        </div>
                                    </Grid.Col>

                                    <Grid.Col
                                        span={6}
                                        className="flex flex-col gap-5"
                                    >
                                        {/* city */}
                                        <div className="font-bold">
                                            <div className="text-gray-400">
                                                City
                                            </div>
                                            <div>{dataAdmin.admin.city}</div>
                                        </div>

                                        {/* Nationality */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Nationality
                                            </div>
                                            <div>
                                                {dataAdmin.admin.nationality}
                                            </div>
                                        </div>

                                        {/* Addrees */}
                                        <div className="font-bold ">
                                            <div className="text-gray-400">
                                                Address
                                            </div>
                                            <div>{dataAdmin.admin.address}</div>
                                        </div>
                                    </Grid.Col>
                                </Grid>
                            </div>
                        </div>
                    </Grid.Col>

                    {/* Col 2 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="bg-white rounded-xl px-5 py-5 flex flex-col shadow-xl">
                            {/* Tintle */}
                            <div className="text-gray-400 font-bold pb-2 border-b border-gray-400">
                                Account Information
                            </div>
                            {/* body */}
                            <div className="mt-4 flex flex-col gap-3 ">
                                {/* Username */}
                                <div className="w-full  grid grid-cols-3 grid-flow-row gap-10">
                                    <div className="">Id User </div>

                                    <div className="font-bold col-start-2 col-span-2">
                                        {dataAdmin.admin.id_admin}
                                    </div>
                                </div>
                                {/* Username */}
                                <div className="w-full grid grid-cols-3 grid-flow-row gap-10">
                                    <div className="">Username </div>

                                    <div className="font-bold col-start-2">
                                        {dataAdmin.username}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </LayoutAdmin>
    );
};

export default DetailAdmin;

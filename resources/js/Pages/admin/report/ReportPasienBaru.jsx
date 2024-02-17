import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddAdminModal from "@/Components/admin/modal/AddAdminModal";
import TableAdmins from "@/Components/admin/table/TableAdmins";
import { router } from "@inertiajs/react";
import TableReportPasienBaru from "@/Components/admin/table/report/TableReportPasienBaru";

const ReportPasienBaru = ({ currentUser, dataPasiens }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const breadCrumbs = [
        { title: "Home ", href: "/admin" },
        { title: "Report Pasien Baru", href: "/admin/report/pasien-baru" },
    ];

    return (
        <>
            <LayoutAdmin
                title="Report Pasien Baru"
                titlePage="Report Pasien Baru"
                breadCrumbs={breadCrumbs}
                user={currentUser}
            >
                <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                    {/* mendambah admin baru */}
                    <div className=" font-bold text-2xl text-center">
                        {" "}
                        Data Pendaftaran Pasien
                    </div>

                    {/* Data Admins */}
                    <div className="w-full border border-gray-300 rounded-xl">
                        <TableReportPasienBaru dataPasiens={dataPasiens} />
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
};

export default ReportPasienBaru;

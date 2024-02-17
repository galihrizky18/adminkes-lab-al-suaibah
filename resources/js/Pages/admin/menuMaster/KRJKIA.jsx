import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import TableUmumLansia from "@/Components/admin/table/TableUmumLansia";
import ChartPoliUmumLansia from "@/Components/admin/chart/ChartPoliUmumLansia";
import AddPoliKIA from "@/Components/admin/modal/AddPoliKIA";
import TableKIA from "@/Components/admin/table/TableKIA";

const KRJKIA = ({ currentUser, dataKIA, dataDoker, dataPerBulan }) => {
    const [opened, { open, close }] = useDisclosure(false);
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        {
            title: "KRJ Poli KIA",
            href: "/admin/master-menu/rawat-jalan-kia",
        },
    ];

    return (
        <LayoutAdmin
            title="Poli Kesehatan Ibu dan Anak "
            titlePage="DATA POLI KESEHATAN IBU DAN ANAK"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div className="flex flex-col gap-5">
                {/* Head Chart */}
                <div className="w-full"></div>
                {/* Table */}
                <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                    {/* mendambah admin baru */}
                    <div>
                        {/* modal */}
                        <Modal
                            opened={opened}
                            onClose={close}
                            title="Tambah Kartu Rawat Jalan Kesehatan Ibu dan Anak"
                            size="80%"
                        >
                            <AddPoliKIA dataDoker={dataDoker} />
                        </Modal>
                        {/* BUtton */}
                        <div>
                            <button
                                className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                                onClick={open}
                            >
                                Tambah Kartu Rawat Jalan
                            </button>
                        </div>
                    </div>

                    {/* Data Admins */}
                    <div className="w-full border border-gray-300 rounded-xl">
                        <TableKIA dataKIA={dataKIA} dataDoker={dataDoker} />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default KRJKIA;

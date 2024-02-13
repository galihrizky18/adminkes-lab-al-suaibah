import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddPoliUmumLansiaModal from "@/Components/admin/modal/AddPoliUmumLansiaModal";
import TableUmumLansia from "@/Components/admin/table/TableUmumLansia";
import ChartPoliUmumLansia from "@/Components/admin/chart/ChartPoliUmumLansia";

const KRJUmumLansia = ({
    currentUser,
    dataUmumLansia,
    dataDoker,
    dataPerBulan,
}) => {
    const [opened, { open, close }] = useDisclosure(false);
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        {
            title: "KRJ Poli Umum dan Lansia",
            href: "/admin/master-menu/rawat-jalan-umum-lansia",
        },
    ];

    console.log(dataPerBulan);
    return (
        <LayoutAdmin
            title="Poli Umum dPan Lansia"
            titlePage="DATA POLI UMUM DAN LANSIA"
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
                            title="Tambah Kartu Rawat Jalan Poli Umum dan Lansia"
                            size="80%"
                        >
                            <AddPoliUmumLansiaModal dataDoker={dataDoker} />
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
                        <TableUmumLansia
                            dataUmumLansia={dataUmumLansia}
                            dataDoker={dataDoker}
                        />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default KRJUmumLansia;

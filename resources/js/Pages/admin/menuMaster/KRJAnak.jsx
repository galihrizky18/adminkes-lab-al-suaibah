import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddPoliAnak from "@/Components/admin/modal/AddPoliAnak";
import TableAnak from "@/Components/admin/table/TableAnak";

const KRJAnak = ({ currentUser, dataAnak, dataDoker, dataPerBulan }) => {
    const [opened, { open, close }] = useDisclosure(false);
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        {
            title: "KRJ Poli Anak",
            href: "/admin/master-menu/rawat-jalan-anak",
        },
    ];

    return (
        <LayoutAdmin
            title="Poli Anak "
            titlePage="DATA POLI ANAK"
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
                            title="Tambah Kartu Rawat Jalan Poli Anak"
                            size="80%"
                        >
                            <AddPoliAnak dataDoker={dataDoker} />
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
                        <TableAnak dataAnak={dataAnak} dataDoker={dataDoker} />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default KRJAnak;

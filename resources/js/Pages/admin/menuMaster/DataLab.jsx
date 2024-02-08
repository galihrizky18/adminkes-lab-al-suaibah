import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddLabModal from "@/Components/admin/modal/AddLabModal";
import TableLaboratorium from "@/Components/admin/table/TableLaboratorium";

const DataLab = ({ currentUser, dataDoker, dataLab, dataPoli }) => {
    const [opened, { open, close }] = useDisclosure(false);
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Laboratorium", href: "/admin/master-menu/laboratorium" },
    ];

    return (
        <LayoutAdmin
            title="Laboratorium"
            titlePage="DATA LABORATORIUM"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                {/* mendambah admin baru */}
                <div>
                    {/* modal */}
                    <Modal
                        opened={opened}
                        onClose={close}
                        title="Formulir Permintaan Pemeriksaan Laboratorium"
                        size="90%"
                    >
                        <AddLabModal />
                    </Modal>
                    {/* BUtton */}
                    <div>
                        <button
                            className="w-48 text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                            onClick={open}
                        >
                            Formulir Permintaan Pemeriksaan Laboratorium
                        </button>
                    </div>
                </div>

                {/* Data Admins */}
                <div className="w-full border border-gray-300 rounded-xl">
                    <TableLaboratorium dataLab={dataLab} dataPoli={dataPoli} />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataLab;

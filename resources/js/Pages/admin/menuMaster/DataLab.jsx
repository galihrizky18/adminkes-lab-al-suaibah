import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddLabModal from "@/Components/admin/modal/AddLabModal";

const DataLab = ({ currentUser, dataGigi, dataDoker }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <LayoutAdmin
            title="Laboratorium"
            titlePage="DATA LABORATORIUM"
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
                    {/* <TablePoliGigi dataGigi={dataGigi} dataDoker={dataDoker} /> */}
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataLab;

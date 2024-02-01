import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddKRJPoliGigi from "@/Components/admin/modal/AddKRJPoliGigi";
import TablePoliGigi from "@/Components/admin/table/TablePoliGigi";

const DataGigi = ({ currentUser, dataGigi, dataDoker }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <LayoutAdmin
            title="Poli Gigi"
            titlePage="DATA POLI GIGI"
            user={currentUser}
        >
            <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                {/* mendambah admin baru */}
                <div>
                    {/* modal */}
                    <Modal
                        opened={opened}
                        onClose={close}
                        title="Tambah Kartu Rawat Jalan Poli Gigi"
                        size="80%"
                    >
                        <AddKRJPoliGigi dataDoker={dataDoker} />
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
                    <TablePoliGigi dataGigi={dataGigi} dataDoker={dataDoker} />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataGigi;

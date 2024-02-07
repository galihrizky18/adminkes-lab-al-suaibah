import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddAdminModal from "@/Components/admin/modal/AddAdminModal";
import TableAdmins from "@/Components/admin/table/TableAdmins";
import { router } from "@inertiajs/react";

const DataAdmin = ({ currentUser, dataAdmins }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [isSuccessSave, setIsSuccessSave] = useState(false);

    useEffect(() => {
        if (isSuccessSave) {
            close();
            router.get("/admin/master-menu/admin");
        }
    }, [isSuccessSave]);
    return (
        <LayoutAdmin
            title="Admin Data"
            titlePage="DATA ADMIN"
            user={currentUser}
        >
            <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                {/* mendambah admin baru */}
                <div>
                    {/* modal */}
                    <Modal
                        opened={opened}
                        onClose={close}
                        title="Tambah Admin"
                        size="90%"
                    >
                        <AddAdminModal setIsSuccessSave={setIsSuccessSave} />
                    </Modal>
                    {/* BUtton */}
                    <div>
                        <button
                            className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                            onClick={open}
                        >
                            Tambah Admin
                        </button>
                    </div>
                </div>

                {/* Data Admins */}
                <div className="w-full border border-gray-300 rounded-xl">
                    <TableAdmins dataAdmins={dataAdmins} />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataAdmin;

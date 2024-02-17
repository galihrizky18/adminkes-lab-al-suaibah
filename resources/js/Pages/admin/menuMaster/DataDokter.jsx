import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { router } from "@inertiajs/react";
import AddDokterModal from "@/Components/admin/modal/AddDokterModal";
import TableDokters from "@/Components/admin/table/TableDokters";

const DataDokter = ({ currentUser, dataLayanan, dataDokters }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [isSuccessSave, setIsSuccessSave] = useState(false);

    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Dokter", href: "/admin/master-menu/dokter" },
    ];

    useEffect(() => {
        if (isSuccessSave) {
            close();
            router.get("/admin/master-menu/admin");
        }
    }, [isSuccessSave]);
    return (
        <LayoutAdmin
            title="Dokter Data"
            titlePage="DATA DOKTER"
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
                        title="Tambah Dokter"
                        size="md"
                    >
                        <AddDokterModal dataLayanan={dataLayanan} />
                    </Modal>
                    {/* BUtton */}
                    <div>
                        <button
                            className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                            onClick={open}
                        >
                            Tambah Dokter
                        </button>
                    </div>
                </div>

                {/* Data Admins */}
                <div className="w-full border border-gray-300 rounded-xl">
                    <TableDokters
                        dataDokters={dataDokters}
                        dataLayanan={dataLayanan}
                    />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataDokter;

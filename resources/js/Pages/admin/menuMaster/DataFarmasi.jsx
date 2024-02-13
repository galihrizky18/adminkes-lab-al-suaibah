import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const DataFarmasi = ({ currentUser }) => {
    const [opened, { open, close }] = useDisclosure(false);
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Farmasi", href: "/admin/master-menu/farmasi" },
    ];

    return (
        <LayoutAdmin
            title="Data Farmasi"
            titlePage="Data Farmasi"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div className="pb-10">
                {/* Judul */}
                <div className="bg-white rounded-xl shadow-xl text-center font-bold text-xl px-5 py-3">
                    RUJUKAN RESEP
                </div>

                {/* Isi */}

                <div className="mt-5 bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                    {/* mendambah admin baru */}
                    <div>
                        {/* modal */}
                        <Modal
                            opened={opened}
                            onClose={close}
                            title="Tambah Resep"
                            size="90%"
                        >
                            {/* <AddAdminModal /> */}
                        </Modal>
                        {/* BUtton */}
                        <div>
                            <button
                                className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                                onClick={open}
                            >
                                Tambah Resep ( Asuransi )
                            </button>
                        </div>
                    </div>

                    {/* Data Admins */}
                    <div className="w-full border border-gray-300 rounded-xl">
                        {/* <TableAdmins dataAdmins={dataAdmins} /> */}
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataFarmasi;

import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddPoliUmumLansiaModal from "@/Components/admin/modal/AddPoliUmumLansiaModal";
import TableUmumLansia from "@/Components/admin/table/TableUmumLansia";

const KRJUmumLansia = ({ currentUser, dataUmumLansia, dataDoker }) => {
    const [opened, { open, close }] = useDisclosure(false);

    // useEffect(() => {
    //     console.log(dataUmumLansia);
    // }, []);
    return (
        <LayoutAdmin
            title="Poli Umum dan Lansia"
            titlePage="DATA POLI UMUM DAN LANSIA"
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
                    <TableUmumLansia dataUmumLansia={dataUmumLansia} />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default KRJUmumLansia;

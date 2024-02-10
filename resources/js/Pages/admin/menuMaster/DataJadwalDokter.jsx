import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddJadwalDokter from "@/Components/admin/modal/AddJadwalDokter";
import TableJadwalDokter from "@/Components/admin/table/TableJadwalDokter";

const DataJadwalDokter = ({
    currentUser,
    dataSpesialis,
    dataDokters,
    dataJadwalDokter,
}) => {
    const [opened, { open, close }] = useDisclosure(false);

    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Jadwal Dokter", href: "/admin/master-menu/jadwal-dokter" },
    ];

    return (
        <LayoutAdmin
            title="Jadwal Dokter"
            titlePage="JADWAL DOKTER"
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
                        title="Tambah Jadwal Dokter"
                        size="70%"
                    >
                        <AddJadwalDokter
                            dataSpesialis={dataSpesialis}
                            dataDokters={dataDokters}
                        />
                    </Modal>
                    {/* BUtton */}
                    <div>
                        <button
                            className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                            onClick={open}
                        >
                            Tambah Jadwal Dokter
                        </button>
                    </div>
                </div>

                {/* Data Admins */}
                <div className="w-full border border-gray-300 rounded-xl">
                    <TableJadwalDokter
                        dataSpesialis={dataSpesialis}
                        dataDokters={dataDokters}
                        dataJadwalDokter={dataJadwalDokter}
                    />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataJadwalDokter;

import React, { useEffect, useState } from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import CardData from "@/Components/admin/dashboardAdmin/CardData";
import { Link } from "@inertiajs/react";
import { Modal } from "@mantine/core";
import AddTagihanModal from "@/Components/admin/modal/kasir/AddTagihanModal";
import TableTagihan from "@/Components/admin/table/kasir/TableTagihan";
import PembayaranModal from "@/Components/admin/modal/kasir/PembayaranModal";

const AdminKasir = ({ currentUser, dataLayanan, dataTagihan }) => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const breadCrumbs = [
        { title: "Home ", href: "/admin" },
        { title: "Kasir", href: "/admin/kasir" },
    ];

    return (
        <LayoutAdmin
            title="Kasir"
            titlePage="Kasir"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div className="flex flex-col gap-3">
                {/* Judul */}
                <div className="bg-white rounded-xl shadow-xl text-center font-bold text-xl px-5 py-3">
                    HALAMAN KASIR
                </div>

                <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 ">
                    <div className="flex flex-row gap-5">
                        {/* Buat Tagihan */}
                        <div>
                            {/* modal */}
                            <Modal
                                opened={modal1}
                                onClose={() => setModal1(false)}
                                title="Buat Tagihan"
                                size="90%"
                            >
                                <AddTagihanModal dataLayanan={dataLayanan} />
                            </Modal>
                            {/* BUtton */}
                            <div>
                                <button
                                    className="text-sm bg-[#50A1C7] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#3f85a5]"
                                    onClick={() => setModal1(!modal1)}
                                >
                                    Buat Tagihan
                                </button>
                            </div>
                        </div>

                        {/* Pembayaran */}
                        <div>
                            {/* modal */}
                            <Modal
                                opened={modal2}
                                onClose={() => setModal2(false)}
                                title="Pembayaran"
                                size="90%"
                            >
                                <PembayaranModal
                                    dataLayanan={dataLayanan}
                                    dataTagihan={dataTagihan}
                                />
                            </Modal>
                            {/* BUtton */}
                            <div>
                                <button
                                    className="text-sm bg-[#2fac56] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#278645]"
                                    onClick={() => setModal2(!modal2)}
                                >
                                    Pembayaran
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Data Admins */}
                    <div className="w-full border border-gray-300 rounded-xl">
                        <TableTagihan dataTagihan={dataTagihan} />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default AdminKasir;

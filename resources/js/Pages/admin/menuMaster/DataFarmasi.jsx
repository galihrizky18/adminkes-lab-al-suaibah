import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React, { useState } from "react";
import { Modal } from "@mantine/core";
import AddFarmasiUmumLansia from "@/Components/admin/modal/farmasi/AddFarmasiUmumLansia";
import TableFarmasi from "@/Components/admin/table/TableFarmasi";
import AddFarmasiUmumLansiaAsuransi from "@/Components/admin/modal/farmasi/AddFarmasiUmumLansiaAsuransi";

const DataFarmasi = ({ currentUser, dataLayanan, dataFarmasi }) => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

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
                    {/* Modal */}
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                        {/* Modal Asuransi */}
                        <div>
                            <Modal
                                opened={modal1}
                                onClose={() => setModal1(false)}
                                title="Tambah Rujukan Resep ( Asuransi )"
                                size="90%"
                            >
                                <AddFarmasiUmumLansiaAsuransi
                                    dataLayanan={dataLayanan}
                                />
                            </Modal>
                            {/* Button untuk membuka Modal 1 */}
                            <div>
                                <button
                                    className="text-sm bg-[#438bb3] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#336a88]"
                                    onClick={() => setModal1(!modal1)}
                                >
                                    Tambah Resep{" "}
                                    <span className="font-bold">
                                        ( Asuransi )
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Modal Non Asuransi */}
                        <div>
                            <Modal
                                opened={modal2}
                                onClose={() => setModal2(false)}
                                title="Tambah Rujukan Resep ( Non Asuransi )"
                                size="90%"
                            >
                                <AddFarmasiUmumLansia
                                    dataLayanan={dataLayanan}
                                />
                            </Modal>
                            {/* Button untuk membuka Modal 2 */}
                            <div>
                                <button
                                    className="text-sm bg-[#FC8E1B] text-white font-bold px-3 py-2 rounded-lg hover:bg-[#cf6b00]"
                                    onClick={() => setModal2(!modal2)}
                                >
                                    Tambah Resep{" "}
                                    <span className="font-bold">
                                        ( Non Asuransi )
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Data Admins */}
                    <div className="w-full border border-gray-300 rounded-xl">
                        <TableFarmasi dataFarmasi={dataFarmasi} />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DataFarmasi;

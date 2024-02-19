import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEdit, IconEye } from "@tabler/icons-react";
import EditAdminModal from "../modal/EditAdminModal";

const TableAdmins = ({ dataFarmasi }) => {
    const [originalData, setOriginalData] = useState(dataFarmasi);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataFarmasi
    const convertData = (data) => {
        return data.map((e) => ({
            id_pemeriksaan: e.id_pemeriksaan,
            name:
                (e.krj_poli_umum_lansia && e.krj_poli_umum_lansia.name) ||
                (e.krj_poli_k_i_a && e.krj_poli_k_i_a.name) ||
                (e.krj_poli_anak && e.krj_poli_anak.name) ||
                (e.krj_poli_gigi && e.krj_poli_gigi.name) ||
                e.asuransi_nama,
            birth:
                (e.krj_poli_umum_lansia && e.krj_poli_umum_lansia.birth) ||
                (e.krj_poli_k_i_a && e.krj_poli_k_i_a.birth) ||
                (e.krj_poli_anak && e.krj_poli_anak.birth) ||
                (e.krj_poli_gigi && e.krj_poli_gigi.birth) ||
                e.asuransi_umur,
            tipe_farmasi: e.tipe_farmasi,
            id_layanan:
                e.id_layanan === "asuransi" ? "Asuransi" : e.layanan.layanan,
            tanggal_resep: e.tanggal_resep,
            status_resep: e.status_resep,
            action: (
                <div
                    className="grid gap-1 py-2"
                    style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
                >
                    {/* View Button */}
                    <Button
                        leftSection={<IconEye width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="blue"
                        radius="sm"
                        onClick={() => {
                            const data = {
                                id_farmasi: e.id_farmasi,
                            };
                            router.post("/admin/detail/farmasi", data);
                        }}
                    >
                        View
                    </Button>

                    {/* Delete Button */}
                    <Button
                        leftSection={<IconTrash width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="red"
                        radius="sm"
                        onClick={() => confirmDelete(e.id_farmasi)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        }));
    };

    // mengatur kolom table
    const columns = [
        {
            name: "ID Pemeriksaan",
            selector: (row) => <div className="">{row.id_pemeriksaan}</div>,
            sortable: true,
            width: "250px",
        },
        {
            name: "Nama",
            selector: (row) => (
                <div className="overflow-hidden">
                    <div className="whitespace-normal font-bold">
                        {row.name}
                    </div>
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: <div className="text-center">Tanggal Lahir</div>,
            selector: (row) => (
                <div className="overflow-hidden">
                    <div className="whitespace-normal">{row.birth}</div>
                </div>
            ),
            sortable: true,
        },
        {
            name: "Tipe",
            selector: (row) => row.tipe_farmasi,
            sortable: true,
        },
        {
            name: "Layanan",
            selector: (row) => row.id_layanan,
            sortable: true,
        },
        {
            name: "Tanggal Resep",
            selector: (row) => row.tanggal_resep,
            sortable: true,
        },
        {
            name: <div className="text-center">Status Resep</div>,
            selector: (row) => (
                <div className="overflow-hidden">
                    <div className="whitespace-normal font-bold">
                        {row.status_resep}
                    </div>
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: "Action",
            selector: (row) => row.action,
            sortable: true,
        },
    ];

    // mengatur style table
    const customStyles = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "1rem",
            },
        },
        rows: {
            style: {
                fontSize: "1rem",
            },
        },
        cells: {
            style: {
                wordBreak: "break-word",
            },
            draggingStyle: {},
        },
    };

    // Filtering
    const handleFilter = (event) => {
        const filterData = originalData.filter((d) => {
            const id_farmasi = d.id_farmasi
                .toLowerCase()
                .includes(event.toLowerCase());

            const tipe_farmasi = d.tipe_farmasi
                .toLowerCase()
                .includes(event.toLowerCase());

            const status_resep = d.status_resep
                .toLowerCase()
                .includes(event.toLowerCase());

            const tanggal_resep = d.tanggal_resep
                .toLowerCase()
                .includes(event.toLowerCase());

            const cekName =
                (d.krj_poli_umum_lansia &&
                    d.krj_poli_umum_lansia.name
                        .toLowerCase()
                        .includes(event.toLowerCase())) ||
                (d.krj_poli_k_i_a &&
                    d.krj_poli_k_i_a.name
                        .toLowerCase()
                        .includes(event.toLowerCase())) ||
                (d.krj_poli_anak &&
                    d.krj_poli_anak.name
                        .toLowerCase()
                        .includes(event.toLowerCase())) ||
                (d.krj_poli_gigi &&
                    d.krj_poli_gigi.name
                        .toLowerCase()
                        .includes(event.toLowerCase())) ||
                d.asuransi_nama.toLowerCase().includes(event.toLowerCase());

            return (
                cekName ||
                id_farmasi ||
                tipe_farmasi ||
                status_resep ||
                tanggal_resep
            );
        });

        setDataFilter(convertData(filterData));
    };

    // Handle Delete
    const confirmDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Yakin Ingin di Hapus?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Handle Delete
                handleDelete(id);
            }
        });
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.post("/admin/delete-data/farmasi", {
                id: id,
            });

            console.log(response.data.message);
            if (response.data.message === "Success Delete Data") {
                Swal.fire({
                    title: "Success Delete Data",
                    text: "Data Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/farmasi");
            } else if (response.data.message === "FFailed Delete Data") {
                Swal.fire({
                    title: "Failed Delete!",
                    text: "Data Gagal Di Hapus!",
                    icon: "error",
                });
            } else if (response.data.message === "Failed Requst Database") {
                Swal.fire({
                    title: "Failed to Connect Database!",
                    text: "Gagal Terhubung ke Database!",
                    icon: "error",
                });
            } else if (response.data.message === "Data not found") {
                Swal.fire({
                    title: "Data Not Found!",
                    text: "Data Tidak Ditemukan",
                    icon: "error",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setOriginalData(dataFarmasi);
        setDataFilter(convertData(dataFarmasi));
    }, [dataFarmasi]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* Edit Modal*/}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Admin"
                size="90%"
            >
                <EditAdminModal data={sendDataEdit} />
            </Modal>

            {/* Filter */}
            <div className="flex justify-end">
                <div className=" w-[30%] ">
                    <TextInput
                        placeholder="Input placeholder"
                        value={filterText}
                        onChange={(e) => {
                            setFilterText(e.currentTarget.value);
                            handleFilter(e.currentTarget.value);
                        }}
                    />
                </div>
            </div>

            <DataTable
                columns={columns}
                data={dataFilter}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="800px"
                customStyles={customStyles}
            />
        </div>
    );
};

export default TableAdmins;

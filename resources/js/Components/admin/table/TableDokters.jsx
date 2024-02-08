import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEdit } from "@tabler/icons-react";
import EditDokterModal from "../modal/EditDokterModal";

const TableDokters = ({ dataDokters, dataLayanan }) => {
    const [originalData, setOriginalData] = useState(dataDokters);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataDokters
    const convertData = (data) => {
        return data.map((e) => ({
            nip_dokter: e.nip,
            layanan: e.layanan.layanan,
            nama: e.nama_dokter,
            spesialis: e.spesialis,
            email: e.email,
            noHp: e.noHp,
            alamat: e.alamat,
            action: (
                <div
                    className="grid gap-1 py-2"
                    style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
                >
                    <Button
                        leftSection={<IconTrash width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="red"
                        radius="sm"
                        onClick={() => confirmDelete(e.id_dokter)}
                    >
                        Delete
                    </Button>

                    <Button
                        leftSection={<IconEdit width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="rgba(184, 169, 11, 1"
                        radius="sm"
                        onClick={() => {
                            const data = {
                                id_dokter: e.id_dokter,
                                layanan: e.id_layanan,
                                nama: e.nama_dokter,
                                spesialis: e.spesialis,
                                email: e.email,
                                noHp: e.noHp,
                                alamat: e.alamat,
                            };
                            setSendDataEdit(data);
                            open();
                        }}
                    >
                        Edit
                    </Button>
                </div>
            ),
        }));
    };

    // mengatur kolom table
    const columns = [
        {
            name: "NIP Dokter",
            selector: (row) => row.nip_dokter,
            sortable: true,
        },
        {
            name: "Layanan",
            selector: (row) => row.layanan,
            sortable: true,
            width: "150px",
        },
        {
            name: "Nama",
            selector: (row) => row.nama,
            sortable: true,
            width: "150px",
        },
        {
            name: "Spesialis",
            selector: (row) => row.spesialis,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "No HP",
            selector: (row) => row.noHp,
            sortable: true,
        },
        {
            name: "Alamat",
            selector: (row) => row.alamat,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
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
                fontSize: ".9rem",
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
            const cekIdUser = d.id_dokter
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekName = d.nama_dokter
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekEmail = d.email
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekSpesialis = d.spesialis
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekNoHp = d.noHp.toLowerCase().includes(event.toLowerCase());

            return cekName || cekSpesialis || cekIdUser || cekEmail || cekNoHp;
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
            const response = await axios.post("/admin/delete-data/dokter", {
                id: id,
            });

            if (response.data.message === "Success Delete Dokter") {
                Swal.fire({
                    title: "Success Delete!",
                    text: "Dokter Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/dokter");
            } else if (response.data.message === "Failed Delete Dokter") {
                Swal.fire({
                    title: "Failed Delete!",
                    text: "Data Gagal Di Hapus!",
                    icon: "error",
                });
            } else if (response.data.message === "FFailed Request Database") {
                Swal.fire({
                    title: "Failed to Connect Database!",
                    text: "Gagal Terhubung ke Database!",
                    icon: "error",
                });
            }
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setOriginalData(dataDokters);
        setDataFilter(convertData(dataDokters));
    }, [dataDokters]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Dokter"
                size="md"
            >
                <EditDokterModal
                    data={sendDataEdit}
                    dataLayanan={dataLayanan}
                />
            </Modal>
            {/* BUtton */}

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
                fixedHeaderScrollHeight="500px"
                customStyles={customStyles}
            />
        </div>
    );
};

export default TableDokters;

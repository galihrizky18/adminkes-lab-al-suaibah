import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import EditJadwalDokter from "../modal/EditJadwalDokter";

// icon
import { IconTrash, IconEdit } from "@tabler/icons-react";

const TableJadwalDokter = ({ dataJadwalDokter }) => {
    const [originalData, setOriginalData] = useState(dataJadwalDokter);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataJadwalDokter
    const convertData = (data) => {
        return data.map((e) => ({
            nip_dokter: e.dokter.nip,
            spesialis: e.dokter.spesialis,
            nama: e.dokter.nama_dokter,
            action: (
                <div
                    className="grid gap-1 py-2"
                    style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
                >
                    {/* View Button */}
                    <Button
                        leftSection={<IconTrash width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="blue"
                        radius="sm"
                        onClick={() => {
                            const data = {
                                id_jadwal: e.id_jadwal_dokter,
                            };
                            router.post("/admin/detail/jadwal-dokter", data);
                        }}
                    >
                        View
                    </Button>

                    {/* Edit Button */}
                    <Button
                        leftSection={<IconEdit width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="rgba(184, 169, 11, 1"
                        radius="sm"
                        onClick={() => {
                            const data = {
                                jadwal: e,
                            };
                            setSendDataEdit(data);
                            open();
                        }}
                    >
                        Edit
                    </Button>

                    {/* Delete Button */}
                    <Button
                        leftSection={<IconTrash width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="red"
                        radius="sm"
                        onClick={() => confirmDelete(e.id_jadwal_dokter)}
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
            name: "NIP Dokter",
            selector: (row) => row.nip_dokter,
            sortable: true,
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
            const cekNip = d.dokter.nip
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekDokter = d.dokter.nama_dokter
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekSpesialis = d.dokter.spesialis
                .toLowerCase()
                .includes(event.toLowerCase());
            return cekDokter || cekSpesialis || cekNip;
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
                handleDelete(id);
            }
        });
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.post(
                "/admin/delete-data/jadwal-dokter",
                {
                    id: id,
                }
            );

            if (response.data.message === "Success Delete Data") {
                Swal.fire({
                    title: "Success Delete!",
                    text: "Jadwal Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/jadwal-dokter");
            } else if (response.data.message === "Failed Delete Data") {
                Swal.fire({
                    title: "Failed Delete!",
                    text: "Jadwal Gagal Di Hapus!",
                    icon: "error",
                });
            } else if (response.data.message === "Failed Request Database") {
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
        setOriginalData(dataJadwalDokter);
        setDataFilter(convertData(dataJadwalDokter));
    }, [dataJadwalDokter]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Dokter"
                size="lg"
            >
                <EditJadwalDokter data={sendDataEdit} />
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

export default TableJadwalDokter;

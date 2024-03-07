import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEdit } from "@tabler/icons-react";
import EditAdminModal from "../modal/EditAdminModal";

const TableAdmins = ({ dataAdmins }) => {
    const [originalData, setOriginalData] = useState(dataAdmins);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataAdmins
    const convertData = (data) => {};

    // mengatur kolom table
    const columns = [
        {
            name: "Id User",
            selector: (row) => row.id_user,
            sortable: true,
        },
        {
            name: "Username",
            selector: (row) => row.username,
            sortable: true,
            width: "150px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
            width: "150px",
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
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
            const cekIdUser = d.second_identifyer
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekName = d.name.toLowerCase().includes(event.toLowerCase());
            const cekEmail = d.email
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekUsername = d.username
                .toLowerCase()
                .includes(event.toLowerCase());

            return cekName || cekUsername || cekIdUser || cekEmail;
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
            const response = await axios.post("/admin/delete-data/admin", {
                id: id,
            });

            console.log(response.data.message);
            if (response.data.message === "Success Delete Admin") {
                Swal.fire({
                    title: "Success Delete Admin",
                    text: "Data Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/admin");
            } else if (response.data.message === "Failed Delete Admin") {
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
            } else if (response.data.message === "Super Admin") {
                Swal.fire({
                    title: "This Account is Super Admin!",
                    text: "Tidak Bisa Hapus Akun Super Admin!",
                    icon: "error",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setOriginalData(dataAdmins);
        setDataFilter(convertData(dataAdmins));
    }, [dataAdmins]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Admin"
                size="90%"
            >
                <EditAdminModal data={sendDataEdit} />
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
                fixedHeaderScrollHeight="300px"
                customStyles={customStyles}
            />
        </div>
    );
};

export default TableAdmins;

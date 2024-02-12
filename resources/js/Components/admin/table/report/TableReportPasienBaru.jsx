import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEdit } from "@tabler/icons-react";

const TableReportPasienBaru = ({ dataPasiens }) => {
    const [originalData, setOriginalData] = useState(dataPasiens);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataPasiens
    const convertData = (data) => {
        return data.map((e) => ({
            no_rekam_medik: <div>{e.no_rekam_medik}</div>,
            nama_pasien: (
                <div className="text-center overflow-wrap-normal">
                    {e.patient.name}
                </div>
            ),
            jenis_kelamin: (
                <div>
                    {e.patient.gender === "male"
                        ? "Laki-Laki"
                        : e.patient.gender === "female"
                        ? "Perempuan"
                        : "Lainnya"}
                </div>
            ),
            jadwal_kunjungan: <div>{e.jadwal}</div>,
            no_telepon: (
                <div className="text-center">123456789{e.no_telepon}</div>
            ),
            email: (
                <div className="text-center overflow-wrap-normal">
                    {e.email}
                </div>
            ),
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
                                id_reg: e.id_registration,
                            };
                            router.post(
                                "/admin/report/detail/pasien-baru",
                                data
                            );
                        }}
                    >
                        View
                    </Button>

                    {/* Edit Button */}
                    {/* <Button
                        leftSection={<IconEdit width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="rgba(184, 169, 11, 1"
                        radius="sm"
                        onClick={() => {
                            const data = {
                                data_patient: e,
                            };
                            setSendDataEdit(data);
                            open();
                        }}
                    >
                        Edit
                    </Button> */}

                    {/* Delete Button */}
                    <Button
                        leftSection={<IconTrash width={20} />}
                        variant="filled"
                        width="auto"
                        size="xs"
                        color="red"
                        radius="sm"
                        onClick={() => confirmDelete(e.id_registration)}
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
            name: <div className="text-center">No Rekam Medik</div>,
            selector: (row) => row.no_rekam_medik,
            sortable: true,
            width: "220px",
        },
        {
            name: <div className="text-center">Nama Pasien</div>,
            selector: (row) => row.nama_pasien,
            sortable: true,
            width: "180px",
        },
        {
            name: <div className="text-center">Jenis Kelamin</div>,
            selector: (row) => row.jenis_kelamin,
            sortable: true,
        },
        {
            name: <div className="text-center">Jadwal Kunjungan</div>,
            selector: (row) => row.jadwal_kunjungan,
            sortable: true,
            // width: "150px",
        },
        {
            name: <div className="text-center">No Telepon</div>,
            selector: (row) => row.no_telepon,
            sortable: true,
            width: "180px",
        },
        {
            name: <div className="text-center">Email</div>,
            selector: (row) => row.email,
            sortable: true,
            width: "220px",
        },
        {
            name: <div className="text-center">Action</div>,
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
            const response = await axios.post(
                "/admin/report/delete-pasienBaru/deletePasienBaru",
                {
                    id: id,
                }
            );

            console.log(response.data.message);
            if (response.data.message === "Success Delete Data") {
                Swal.fire({
                    title: "Success Delete Admin",
                    text: "Data Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/report/pasien-baru");
            } else if (response.data.message === "Data not found") {
                Swal.fire({
                    title: "Data Not Found!",
                    text: "Data Tidak Ditemukan!",
                    icon: "error",
                });
            } else if (response.data.message === "Failed Delete Data") {
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
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setOriginalData(dataPasiens);
        setDataFilter(convertData(dataPasiens));
    }, [dataPasiens]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Admin"
                size="90%"
            >
                {/* <EditAdminModal data={sendDataEdit} /> */}
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

export default TableReportPasienBaru;

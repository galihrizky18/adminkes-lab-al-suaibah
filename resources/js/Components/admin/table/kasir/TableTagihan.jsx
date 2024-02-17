import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEye } from "@tabler/icons-react";
// import EditAdminModal from "../modal/EditAdminModal";

const TableTagihan = ({ dataTagihan }) => {
    const [originalData, setOriginalData] = useState(dataTagihan);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataTagihan
    const convertData = (data) => {
        return data.map((e) => ({
            no_tagihan: e.no_tagihan,
            id_pemeriksaan: e.id_pemeriksaan,
            name:
                (e.krj_poli_umum_lansia && e.krj_poli_umum_lansia.name) ||
                (e.krj_poli_k_i_a && e.krj_poli_k_i_a.name) ||
                (e.krj_poli_anak && e.krj_poli_anak.name) ||
                (e.krj_poli_gigi && e.krj_poli_gigi.name) ||
                "",
            birth:
                (e.krj_poli_umum_lansia && e.krj_poli_umum_lansia.birth) ||
                (e.krj_poli_k_i_a && e.krj_poli_k_i_a.birth) ||
                (e.krj_poli_anak && e.krj_poli_anak.birth) ||
                (e.krj_poli_gigi && e.krj_poli_gigi.birth) ||
                "",
            id_layanan: e.krj_poli_umum_lansia
                ? "Poli Umum"
                : e.krj_poli_k_i_a
                ? "Poli Kesehatan Ibu dan Anak"
                : e.krj_poli_anak
                ? "Poli Anak"
                : e.krj_poli_gigi
                ? "Poli Gigi"
                : "",
            tanggal_tagihan: handleDate(e.updated_at),
            status_tagihan: e.status_tagihan,
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
                                no_tagihan: e.no_tagihan,
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
                        onClick={() => confirmDelete(e.no_tagihan)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        }));
    };

    // Handle convet Updated_at
    const handleDate = (date) => {
        const updatedAtDate = new Date(date);

        const tanggal = updatedAtDate.toISOString().slice(0, 10);
        return tanggal;
    };

    // mengatur kolom table
    const columns = [
        {
            name: "Nomor Tagihan",
            selector: (row) => <label className="">{row.no_tagihan}</label>,
            sortable: true,
            width: "250px",
        },
        {
            name: "ID Pemeriksaan",
            selector: (row) => <label className="">{row.id_pemeriksaan}</label>,
            sortable: true,
            width: "250px",
        },
        {
            name: "Nama",
            selector: (row) => (
                <label className="overflow-hidden">
                    <div className="whitespace-normal font-bold">
                        {row.name}
                    </div>
                </label>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: <label className="text-center">Tanggal Lahir</label>,
            selector: (row) => row.birth,
            sortable: true,
        },
        {
            name: "Layanan",
            selector: (row) => row.id_layanan,
            sortable: true,
        },
        {
            name: "Tanggal Tagihan",
            selector: (row) => row.tanggal_tagihan,
            sortable: true,
        },
        {
            name: <label className="text-center">Status Tagihan</label>,
            selector: (row) => (
                <label className="overflow-hidden">
                    <div className="whitespace-normal font-bold">
                        {row.status_tagihan}
                    </div>
                </label>
            ),
            sortable: true,
            width: "150px",
        },
        // {
        //     name: "Action",
        //     selector: (row) => row.action,
        //     sortable: true,
        // },
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
            const no_tagihan = d.no_tagihan
                .toLowerCase()
                .includes(event.toLowerCase());

            const status_tagihan = d.status_tagihan
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
                        .includes(event.toLowerCase()));

            return cekName || no_tagihan || status_tagihan;
        });

        console.log(filterData);
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
        setOriginalData(dataTagihan);
        setDataFilter(convertData(dataTagihan));
    }, [dataTagihan]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* Edit Modal*/}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Admin"
                size="90%"
            >
                {/* <EditAdminModal data={sendDataEdit} /> */}
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

export default TableTagihan;

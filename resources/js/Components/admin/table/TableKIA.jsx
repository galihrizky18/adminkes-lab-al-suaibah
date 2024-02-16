import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TextInput, Button, Modal, InputWrapper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import EditKIA from "../modal/EditKIA";

// icon
import { IconTrash, IconEdit, IconEye } from "@tabler/icons-react";

const TableKIA = ({ dataKIA, dataDoker }) => {
    const [originalData, setOriginalData] = useState(dataKIA);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataKIA
    const convertData = (data) => {
        return data.map((e) => ({
            id_krj_poli_KIA: e.id_krj_poli_KIA,
            id_dokter: e.dokter.nama_dokter,
            penanggung_jawab: e.penanggung_jawab,
            name: e.name,
            birth: e.birth,
            bb: e.bb,
            tb: e.tb,
            td: e.td,
            rr: e.rr,
            n: e.n,
            anamnesis: e.anamnesis,
            pemeriksaan_fisik: e.pemeriksaan_fisik,
            pemeriksaan_penunjang: e.pemeriksaan_penunjang,
            diagnosis: e.diagnosis,
            terapi: e.terapi,
            rujukan: e.rujukan,
            createDate: dateCreate(e.created_at),

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
                                id_poli: e.id_krj_poli_KIA,
                            };
                            router.post("/admin/detail/rawat-jalan-kia", data);
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
                                id_krj_poli_KIA: e.id_krj_poli_KIA,
                                id_dokter: e.dokter.id_dokter,
                                name: e.name,
                                birth: e.birth,
                                bb: e.bb,
                                tb: e.tb,
                                td: splitTdSistolik(e.td),
                                rr: e.rr,
                                n: e.n,
                                anamnesis: e.anamnesis,
                                pemeriksaan_fisik: e.pemeriksaan_fisik,
                                pemeriksaan_penunjang: e.pemeriksaan_penunjang,
                                diagnosis: e.diagnosis,
                                terapi: e.terapi,
                                rujukan: e.rujukan,
                                createDate: dateCreate(e.created_at),
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
                        onClick={() => confirmDelete(e.id_krj_poli_KIA)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        }));
    };
    // split Tekanan Darah
    const splitTdSistolik = (originalTD) => {
        const splitTD = originalTD.split("/");

        return {
            tdSistolik: splitTD[0] || "",
            tdDiastolik: splitTD[1] || "",
        };
    };

    // Take Created Date
    const dateCreate = (data) => {
        // String tanggal
        const dateString = data;

        // Membuat objek Date dari string
        const dateObject = new Date(dateString);

        // Mendapatkan tahun, bulan, dan tanggal
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Ingat, bulan dimulai dari 0 (0 - Januari, 11 - Desember)
        const day = dateObject.getDate();

        return `${year}-${month}-${day}`;
    };

    // mengatur kolom table
    const columns = [
        {
            name: "Penanggung Jawab",
            selector: (row) => row.penanggung_jawab,
            sortable: true,
            width: "220px",
            wrap: true,
        },
        {
            name: "Dokter",
            selector: (row) => row.id_dokter,
            sortable: true,
            width: "200px",
        },
        {
            name: "Nama Pasien",
            selector: (row) => <div className="font-bold">{row.name}</div>,
            sortable: true,
            width: "200px",
        },
        {
            name: "Tanggal Lahir",
            selector: (row) => row.birth,
            sortable: true,
            width: "200px",
        },
        {
            name: "Tanggal Dibuat",
            selector: (row) => row.createDate,
            sortable: true,
            width: "200px",
        },
        {
            name: "Action",
            selector: (row) => row.action,
            sortable: true,
            width: "150px",
        },
    ];

    // mengatur style table
    const customStyles = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "1rem",
                wordWrap: "break-word",
                maxHeight: "4rem",
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
            const cekId = d.id_krj_poli_KIA
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekName = d.name.toLowerCase().includes(event.toLowerCase());
            const cekPenanggungJawab = d.penanggung_jawab
                .toLowerCase()
                .includes(event.toLowerCase());

            return cekName || cekId || cekPenanggungJawab;
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
            const response = await axios.post("/admin/delete-data/kia", {
                id: id,
            });
            if (response.data.message === "Success Delete Data") {
                Swal.fire({
                    title: "Success Delete!",
                    text: "Data Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/rawat-jalan-kia");
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
        setOriginalData(dataKIA);
        setDataFilter(convertData(dataKIA));
        // console.log(dataKIA);
    }, [dataKIA]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="EDIT KARTU RAWAT JAAN KESEHATAN IBU DAN ANAK"
                size="80%"
            >
                <EditKIA baseData={sendDataEdit} dataDoker={dataDoker} />
            </Modal>

            {/* Filter */}
            <div className="flex justify-end ">
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

export default TableKIA;

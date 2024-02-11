import React, { useEffect, useState } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import { TextInput, Button, Modal, InputWrapper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

// icon
import { IconTrash, IconEdit } from "@tabler/icons-react";
import EditPoliGigi from "../modal/EditPoliGigi";
import EditLabModal from "../modal/EditLabModal";

const TableLaboratorium = ({ dataLab, dataPoli }) => {
    const [originalData, setOriginalData] = useState(dataLab);
    const [dataFilter, setDataFilter] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sendDataEdit, setSendDataEdit] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    // Fungsi untuk mengonversi dataGigi
    const convertData = (data) => {
        return data.map((e) => ({
            id_laboratorium: e.id_laboratorium,
            name: e.name,
            jk: e.jk,
            ttl: e.ttl,
            age: e.age,
            address: e.address,
            phone: e.phone,
            card_number: e.card_number,
            request_date: e.request_date,
            officer: e.officer,
            poli: handleLayanan(e.id_layanan),
            clinical_desc: e.clinical_desc,
            responsible: e.responsible,
            hematologi: e.hematologi,
            serologis: e.serologis,
            urinalisa: e.urinalisa,
            mikrobiologi: e.mikrobiologi,
            faeces: e.faeces,
            faal_hati: e.faal_hati,
            faal_ginjal: e.faal_ginjal,
            faal_jantung: e.faal_jantung,
            metabolisme_karbo: e.metabolisme_karbo,
            profil_lipid: e.profil_lipid,
            pemeriksaan_lainnya: e.pemeriksaan_lainnya,
            createDate: dateCreate(e.created_at),

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
                                id_lab: e.id_laboratorium,
                            };
                            router.post("/admin/detail/laboratorium", data);
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
                                id_laboratorium: e.id_laboratorium,
                                name: e.name,
                                jk: e.jk,
                                ttl: e.ttl,
                                age: e.age,
                                address: e.address,
                                phone: e.phone,
                                card_number: e.card_number,
                                request_date: e.request_date,
                                officer: e.officer,
                                poli: handleLayanan(e.id_layanan),
                                clinical_desc: e.clinical_desc,
                                responsible: e.responsible,
                                hematologi: e.hematologi,
                                serologis: e.serologis,
                                urinalisa: e.urinalisa,
                                mikrobiologi: e.mikrobiologi,
                                faeces: e.faeces,
                                faal_hati: e.faal_hati,
                                faal_ginjal: e.faal_ginjal,
                                faal_jantung: e.faal_jantung,
                                metabolisme_karbo: e.metabolisme_karbo,
                                profil_lipid: e.profil_lipid,
                                pemeriksaan_lainnya: e.pemeriksaan_lainnya,
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
                        onClick={() => confirmDelete(e.id_laboratorium)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        }));
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

    const handleLayanan = (id) => {
        return dataPoli.filter((item) => item.id_layanan === id);
    };

    // mengatur kolom table
    const columns = [
        {
            name: <div className="text-center">Penanggung Jawab</div>,
            selector: (row) => row.responsible,
            sortable: true,
            grow: "1.5",
            wrap: true,
        },
        {
            name: <div className="text-center">Nama Pasien</div>,
            selector: (row) => row.name,
            sortable: true,
            wrap: true,
            grow: "1.5",
        },
        {
            name: <div className="text-center">Jenis Kelamin</div>,
            selector: (row) => row.jk,
            sortable: true,
            wrap: true,

            grow: "1",
        },
        {
            name: <div className="text-center">Umur</div>,
            selector: (row) => row.age,
            sortable: true,
            wrap: true,
            grow: ".1",
        },
        {
            name: <div className="text-center">Tanggal Permintaan</div>,
            selector: (row) => row.request_date,
            sortable: true,
            wrap: true,
            grow: "1.5",
        },
        {
            name: <div className="text-center">Tanggal Dibuat</div>,
            selector: (row) => row.createDate,
            sortable: true,
            grow: "1",
        },
        {
            name: <div className="text-center">Action</div>,
            selector: (row) => row.action,
            sortable: true,
            grow: "1.5",
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
                display: "flex",
                justifyContent: "center",
                Alignment: "center",
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
            const cekId = d.id_laboratorium
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekName = d.name.toLowerCase().includes(event.toLowerCase());
            const cekPhone = d.phone
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekCardNumber = d.card_number
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekOfficer = d.officer
                .toLowerCase()
                .includes(event.toLowerCase());
            const cekResponsible = d.responsible
                .toLowerCase()
                .includes(event.toLowerCase());

            return (
                cekName ||
                cekId ||
                cekPhone ||
                cekCardNumber ||
                cekOfficer ||
                cekResponsible
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
                handleDelete(id);
            }
        });
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.post("/admin/delete-data/lab", {
                id: id,
            });

            console.log(response.data.message);
            if (response.data.message === "Success Delete Data") {
                Swal.fire({
                    title: "Success Delete!",
                    text: "Data Berhasil Di Hapus!",
                    icon: "success",
                });
                router.get("/admin/master-menu/laboratorium");
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
        setOriginalData(dataLab);
        setDataFilter(convertData(dataLab));
    }, [dataLab]);

    return (
        <div className="w-full flex flex-col gap-3 p-3">
            {/* modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="EDIT DATA LABORATORIUM"
                size="80%"
            >
                <EditLabModal baseData={sendDataEdit} />
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

export default TableLaboratorium;

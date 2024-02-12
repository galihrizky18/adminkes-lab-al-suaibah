import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Grid } from "@mantine/core";

const DetailDataPasienBaru = ({ currentUser, dataPasienBaru }) => {
    const breadCrumbs = [
        { title: "Home ", href: "/admin" },
        { title: "Report Pasien Baru", href: "/admin/report/pasien-baru" },
        {
            title: "Detail Data Pasien Baru",
            href: "/admin/report/detail/pasien-baru",
        },
    ];
    // console.log(dataPasienBaru);

    const handleConvertTime = (time) => {
        const [tanggal, jamWithMillis] = time.split("T");
        const [jam] = jamWithMillis.split(".");
        return { tanggal, jam };
    };

    console.log(dataPasienBaru);

    return (
        <LayoutAdmin
            title="Detail Pasien Baru"
            titlePage="Detail Pasien Baru"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            <div className="w-full flex flex-col gap-5 ">
                {/* Detail Form */}
                <div className="px-5 py-3 flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 bg-white rounded-xl shadow-xl border border-gray-300">
                    <div className="py-2 px-3 border border-gray-400 rounded-lg">
                        Jam :{" "}
                        <span className="font-bold">
                            {handleConvertTime(dataPasienBaru.created_at).jam}
                        </span>
                    </div>
                    <div className="py-2 px-3 border border-gray-400 rounded-lg">
                        Pendaftaran Pada Tanggal :{" "}
                        <span className="font-bold">
                            {
                                handleConvertTime(dataPasienBaru.created_at)
                                    .tanggal
                            }
                        </span>
                    </div>
                </div>

                {/* Patient Information */}
                <div className="px-5 py-3 bg-white rounded-xl shadow-xl border border-gray-300">
                    {/* Titlet  */}
                    <div className="text-center font-bold text-xl pb-3 border-b border-gray-300">
                        DATA PASIEN
                    </div>
                </div>

                {/* Col 2 */}
                <Grid span={{ base: 12, md: 6 }} gutter={30}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="flex flex-col gap-3 bg-white rounded-xl px-5 py-5 shadow-xl ">
                            {/* nama */}
                            <div className="grid grid-cols-3">
                                <div>Nama </div>

                                <div className="col-span-2 font-bold">
                                    : <span>{dataPasienBaru.patient.name}</span>
                                </div>
                            </div>

                            {/* Jenis Kelamin */}
                            <div className="grid grid-cols-3">
                                <div>Jenis Kelamin </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.patient.gender ===
                                        "male"
                                            ? "Laki-Laki"
                                            : dataPasienBaru.patient.gender ===
                                              "female"
                                            ? "Perempuan"
                                            : "Tidak Diketahui"}
                                    </span>
                                </div>
                            </div>

                            {/* TTL */}
                            <div className="grid grid-cols-3">
                                <div>Tempat / Tanggal Lahir </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.patient.birth_place},{" "}
                                        {dataPasienBaru.patient.birth}
                                    </span>
                                </div>
                            </div>

                            {/* Aga,a */}
                            <div className="grid grid-cols-3">
                                <div>Agama </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {" "}
                                        {dataPasienBaru.patient.religion
                                            .charAt(0)
                                            .toUpperCase() +
                                            dataPasienBaru.patient.religion.slice(
                                                1
                                            )}
                                    </span>
                                </div>
                            </div>

                            {/* Pendidikan */}
                            <div className="grid grid-cols-3">
                                <div>Pendidikan : </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.patient.education
                                            .charAt(0)
                                            .toUpperCase() +
                                            dataPasienBaru.patient.education.slice(
                                                1
                                            )}
                                    </span>
                                </div>
                            </div>

                            {/* Pekerjaan */}
                            <div className="grid grid-cols-3">
                                <div>Pekerjaan </div>

                                <div className="col-span-2 font-bold">
                                    : <span>{dataPasienBaru.patient.job}</span>
                                </div>
                            </div>

                            {/* Alamat */}
                            <div className="grid grid-cols-3">
                                <div>Alamat </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.patient.address}
                                    </span>
                                </div>
                            </div>

                            {/* Status Perkawinan */}
                            <div className="grid grid-cols-3">
                                <div>Status Perkawinan </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.patient.marriage
                                            .charAt(0)
                                            .toUpperCase() +
                                            dataPasienBaru.patient.marriage.slice(
                                                1
                                            )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Grid.Col>

                    {/* Col 2 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="bg-white rounded-xl px-5 py-5 flex flex-col gap-3 shadow-xl ">
                            {/* Asal Poli */}
                            <div className="grid grid-cols-3">
                                <div>Asal Poli </div>

                                <div className="col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.layanan.layanan}
                                    </span>
                                </div>
                            </div>

                            {/* Dokter */}
                            <div className="grid grid-cols-3">
                                <div>Dokter </div>

                                <div className="lg:col-span-2 font-bold">
                                    :{" "}
                                    <span>
                                        {dataPasienBaru.dokters.nama_dokter}
                                    </span>
                                </div>
                            </div>

                            {/* JAdwal */}
                            <div className="grid grid-cols-3">
                                <div>Jadwal </div>

                                <div className="lg:col-span-2 font-bold">
                                    : <span> {dataPasienBaru.jadwal}</span>
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </LayoutAdmin>
    );
};

export default DetailDataPasienBaru;

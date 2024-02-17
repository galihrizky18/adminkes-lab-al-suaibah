import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import { Grid } from "@mantine/core";

const DetailKIA = ({ currentUser, dataPoliKIA }) => {
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        {
            title: "KRJ Poli KIA",
            href: "/admin/master-menu/rawat-jalan-kia",
        },
        {
            title: "Detail Poli Kesehatan Ibu dan Anak",
            href: "/admin/detail/rawat-jalan-kia",
        },
    ];

    // Hadnle Created Date
    const dateCreate = (data) => {
        const dateString = data;
        const dateObject = new Date(dateString);

        // Mendapatkan tahun, bulan, dan tanggal
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Ingat, bulan dimulai dari 0 (0 - Januari, 11 - Desember)
        const day = dateObject.getDate();

        return `${day} - ${month} - ${year}`;
    };

    // Handle Jam in Created Date
    const hourCreateDate = (data) => {
        let date = new Date(data);

        // Mengambil jam dan menit dari objek Date
        let jam = date.getHours().toString().padStart(2, "0");
        let menit = date.getMinutes().toString().padStart(2, "0");

        return `${jam} : ${menit}`;
    };

    return (
        <LayoutAdmin
            title="Detail Poli Kesehatan Ibu dan Anak"
            titlePage="Detail Poli Kesehatan Ibu dan Anak"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            {/* Detail KRJ Umum */}
            <div className="bg-white rounded-xl px-5 py-5 mb-5 flex flex-col shadow-xl text-[0.9rem]">
                <Grid span={{ base: 12, md: 6 }} gutter={0}>
                    {/* Col 1 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {/* Tangagl Kuncujngan */}
                        <div className="px-3 py-1 grid grid-cols-5 border ">
                            <div className="col-span-2">Tanggal Kunjungan</div>

                            <div className="col-span-2 ">
                                :{" "}
                                <span className="font-bold">
                                    {dateCreate(dataPoliKIA.created_at)}
                                </span>
                            </div>
                        </div>

                        {/* Pukul*/}
                        <div className="px-3 py-1 grid grid-cols-5 border">
                            <div className="col-span-2">Pukul</div>

                            <div className="col-span-2 ">
                                :{" "}
                                <span className="font-bold">
                                    {hourCreateDate(dataPoliKIA.created_at)}
                                </span>
                            </div>
                        </div>

                        {/* ASUHAN KEPERAWATAN */}
                        <div className="bg-gray-200 font-bold text-base text-center py-1">
                            ASUHAN KEPERAWATAN
                        </div>

                        {/* Objektif */}
                        <div className="border">
                            {/* Judul */}
                            <div className="py-1  text-center border font-bold">
                                Objektif (O)
                            </div>

                            <Grid span={{ base: 12, md: 6 }} gutter={0}>
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    {/* BB */}
                                    <div className="px-3 py-1 grid grid-cols-5 border ">
                                        <div className="col-span-2">BB</div>

                                        <div className="col-span-2 ">
                                            :{" "}
                                            <span className="font-bold">
                                                {dataPoliKIA.bb}
                                            </span>
                                        </div>
                                        <div> Kg</div>
                                    </div>
                                    {/* TD */}
                                    <div className="px-3 py-1 grid grid-cols-5 border ">
                                        <div className="col-span-2">TD</div>

                                        <div className="col-span-2 ">
                                            :{" "}
                                            <span className="font-bold">
                                                {dataPoliKIA.td}
                                            </span>
                                        </div>
                                    </div>
                                    {/* RR */}
                                    <div className="px-3 py-1 grid grid-cols-5 border ">
                                        <div className="col-span-2">RR</div>

                                        <div className="col-span-2 ">
                                            :{" "}
                                            <span className="font-bold">
                                                {dataPoliKIA.rr}
                                            </span>
                                        </div>
                                    </div>
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    {/* TB */}
                                    <div className="px-3 py-1 grid grid-cols-5 border ">
                                        <div className="col-span-2">TB</div>

                                        <div className="col-span-2 ">
                                            :{" "}
                                            <span className="font-bold">
                                                {dataPoliKIA.tb}
                                            </span>
                                        </div>
                                    </div>
                                    {/* N */}
                                    <div className="px-3 py-1 grid grid-cols-5 border ">
                                        <div className="col-span-2">N</div>

                                        <div className="col-span-2 ">
                                            :{" "}
                                            <span className="font-bold">
                                                {dataPoliKIA.n}
                                            </span>
                                        </div>
                                    </div>
                                </Grid.Col>
                            </Grid>
                        </div>

                        {/* Dokter Pemeriksa*/}
                        <div className="px-3 py-1 mt-3 grid grid-cols-5 border">
                            <div className="col-span-2">Dokter Pemeriksa</div>

                            <div className="col-span-3 ">
                                :{" "}
                                <span className="font-bold">
                                    {dataPoliKIA.dokter.nama_dokter} - (
                                    {dataPoliKIA.dokter.spesialis})
                                </span>
                            </div>
                        </div>

                        {/* Penanggung JAwab*/}
                        <div className="px-3 py-1 mt-3 grid grid-cols-5 border">
                            <div className="col-span-2">
                                Petugas Penanggung Jawab
                            </div>

                            <div className="col-span-2 ">
                                :{" "}
                                <span className="font-bold">
                                    {dataPoliKIA.penanggung_jawab}
                                </span>
                            </div>
                        </div>
                    </Grid.Col>

                    {/* Col 2 */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {/* Nama */}
                        <div className="px-3 py-1 grid grid-cols-5 border ">
                            <div className="col-span-2">Nama</div>

                            <div className="col-span-2 ">
                                :{" "}
                                <span className="font-bold">
                                    {dataPoliKIA.name}
                                </span>
                            </div>
                        </div>

                        {/* TTL*/}
                        <div className="px-3 py-1 grid grid-cols-5 border">
                            <div className="col-span-2">Tanggal Lahir</div>

                            <div className="col-span-2 ">
                                :{" "}
                                <span className="font-bold">
                                    {dataPoliKIA.birth}
                                </span>
                            </div>
                        </div>

                        {/* ASUHAN KEPERAWATAN */}
                        <div className="bg-gray-200 font-bold text-base text-center py-1">
                            ASUHAN MEDIS
                        </div>
                        <div className="flex flex-col gap-3">
                            {/* Anamnesis */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Anamnesis (S) :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.anamnesis}
                                </div>
                            </div>

                            {/* Pemeriksaan Fisik */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Pemeriksan Fisik (O) :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.pemeriksaan_fisik}
                                </div>
                            </div>

                            {/* Pemeriksaan Penunjang */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Pemeriksaan Penunjang :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.pemeriksaan_penunjang}
                                </div>
                            </div>

                            {/* Diagnosis  */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Diagnosis (A) :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.diagnosis}
                                </div>
                            </div>

                            {/* Terapi  */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Terapi (P) :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.terapi}
                                </div>
                            </div>

                            {/* Rencana Pengobatan Lanjutan / Rujukan   */}
                            <div className="px-3 py-1 border">
                                <div className=" font-semibold pb-2">
                                    Rencana Pengobatan Lanjutan / Rujukan :
                                </div>
                                <div className="min-h-[6rem] max-h-[6rem] overflow-y-auto">
                                    {dataPoliKIA.rujukan}
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </LayoutAdmin>
    );
};

export default DetailKIA;

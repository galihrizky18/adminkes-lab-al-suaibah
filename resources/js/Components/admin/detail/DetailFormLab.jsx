import React from "react";
import {
    dataHematologi,
    dataSerologis,
    dataUrinalisa,
    dataMikrobiologi,
    dataFaeces,
    dataFaalHati,
    dataFaalGinjal,
    dataFaalJantung,
    dataMetabolismeKarbo,
    dataProfilLipid,
} from "@/lib/ArrayData";
import { Grid, Textarea } from "@mantine/core";

const DetailFormLab = ({ dataLab }) => {
    return (
        <div>
            <Grid gutter="xl">
                {/* Col 1 */}
                <Grid.Col
                    className="mt-4 flex flex-col gap-5"
                    span={{ base: 12, md: 6 }}
                >
                    {/* HEMATOLOGI */}
                    <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            HEMATOLOGI
                        </label>

                        <div
                            className="w-full h-full grid gap-3"
                            style={{
                                gridTemplateColumns: "repeat(2, 1fr)",
                            }}
                        >
                            {dataHematologi.map((e) => (
                                <div
                                    key={e.value}
                                    className="flex flex-row gap-3"
                                >
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="radioGroup"
                                        disabled
                                        checked={dataLab.hematologi === e.value}
                                    />
                                    <label htmlFor="radio1">{e.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SEROLOGIS */}
                    <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            SEROLOGIS
                        </label>

                        <div
                            className="w-full h-full grid gap-3"
                            style={{
                                gridTemplateColumns: "repeat(3, 1fr)",
                            }}
                        >
                            {dataSerologis.map((e) => (
                                <div
                                    key={e.value}
                                    className="flex flex-row gap-3"
                                >
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="SEROLOGIS"
                                        disabled
                                        checked={dataLab.serologis === e.value}
                                    />
                                    <label htmlFor="radio1">{e.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* URINALISA */}
                    <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            URINALISA
                        </label>
                        <div
                            className="w-full h-full grid gap-3"
                            style={{
                                gridTemplateColumns: "repeat(3, 1fr)",
                            }}
                        >
                            {dataUrinalisa.map((e) => (
                                <div
                                    key={e.value}
                                    className="flex flex-row gap-3"
                                >
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="URINALISA"
                                        disabled
                                        checked={dataLab.urinalisa === e.value}
                                    />
                                    <label htmlFor="radio1">{e.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MIKROBIOLOGI */}
                    <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            MIKROBIOLOGI
                        </label>

                        <div
                            className="w-full h-full grid gap-3"
                            style={{
                                gridTemplateColumns: "repeat(1, 1fr)",
                            }}
                        >
                            {dataMikrobiologi.map((e) => (
                                <div
                                    key={e.value}
                                    className="flex flex-row gap-3"
                                >
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="MIKROBIOLOGI"
                                        disabled
                                        checked={
                                            dataLab.mikrobiologi === e.value
                                        }
                                    />
                                    <label htmlFor="radio1">{e.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAECES */}
                    <div className="flex flex-col gap-2 border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            FAECES
                        </label>

                        <div
                            className="w-full h-full grid gap-3"
                            style={{
                                gridTemplateColumns: "repeat(1, 1fr)",
                            }}
                        >
                            {dataFaeces.map((e) => (
                                <div
                                    key={e.value}
                                    className="flex flex-row gap-3"
                                >
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="FAECES"
                                        disabled
                                        checked={dataLab.faeces === e.value}
                                    />
                                    <label htmlFor="radio1">{e.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pemeriksaan Lainnya */}
                    <div className="flex flex-col border border-gray-300 px-3 py-2 shadow-lg">
                        <label className="text-lg mb-2 border-b border-gray-300 pb-1 text-center font-bold">
                            PEMERIKSAAN LAINNYA
                        </label>
                        <Textarea
                            placeholder="Pemeriksaan Lainnya"
                            withAsterisk
                            value={dataLab.pemeriksaan_lainnya}
                            disabled
                            autosize
                            minRows={5}
                            maxRows={5}
                            size="md"
                        />
                        <span className="text-sm ml-3 text-blue-700">
                            isi " - " jika tidak ada
                        </span>
                    </div>
                </Grid.Col>

                {/* Col 2 */}
                <Grid.Col
                    className="mt-4 flex flex-col gap-3"
                    span={{ base: 12, md: 6 }}
                >
                    <div className="py-3 flex flex-col gap-3 border border-gray-300">
                        {/* Title */}
                        <div className="flex justify-center items-center h-10 text-xl font-bold border-b border-gray-300">
                            KIMIA DARAH
                        </div>

                        {/* Isi */}
                        <div className="px-4 flex flex-col gap-5">
                            {/* Faal Hati */}
                            <div className="flex flex-col gap-3">
                                <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                    A. FAAL HATI
                                </div>
                                <div className="px-5">
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataFaalHati.map((e) => (
                                            <div
                                                key={e.value}
                                                className="flex flex-row gap-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id="radio1"
                                                    name="faal_hati"
                                                    disabled
                                                    checked={
                                                        dataLab.faal_hati ===
                                                        e.value
                                                    }
                                                />
                                                <label htmlFor="radio1">
                                                    {e.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Faal Ginjal */}
                            <div className="flex flex-col gap-3">
                                <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                    B. FAAL GINJAL
                                </div>
                                <div className="px-5">
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(2, 1fr)",
                                        }}
                                    >
                                        {dataFaalGinjal.map((e) => (
                                            <div
                                                key={e.value}
                                                className="flex flex-row gap-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id="radio1"
                                                    name="faal_ginjal"
                                                    disabled
                                                    checked={
                                                        dataLab.faal_ginjal ===
                                                        e.value
                                                    }
                                                />
                                                <label htmlFor="radio1">
                                                    {e.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Faal Jantung */}
                            <div className="flex flex-col gap-3">
                                <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                    C. FAAL JANTUNG
                                </div>
                                <div className="px-5">
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataFaalJantung.map((e) => (
                                            <div
                                                key={e.value}
                                                className="flex flex-row gap-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id="radio1"
                                                    name="faal_jantung"
                                                    disabled
                                                    checked={
                                                        dataLab.faal_jantung ===
                                                        e.value
                                                    }
                                                />
                                                <label htmlFor="radio1">
                                                    {e.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Fungsi Metabolisme Karbohidrat */}
                            <div className="flex flex-col gap-3">
                                <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                    D. FUNGSI METABOLISME KARBOHIDRAT
                                </div>
                                <div className="px-5">
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataMetabolismeKarbo.map((e) => (
                                            <div
                                                key={e.value}
                                                className="flex flex-row gap-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id="radio1"
                                                    name="metabolisme_karbo"
                                                    disabled
                                                    checked={
                                                        dataLab.metabolisme_karbo ===
                                                        e.value
                                                    }
                                                />
                                                <label htmlFor="radio1">
                                                    {e.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Profil Lipid */}
                            <div className="flex flex-col gap-3">
                                <div className="font-bold text-lg pb-2 border-b border-gray-300">
                                    E. PROFIL LIPID
                                </div>
                                <div className="px-5">
                                    <div
                                        className="w-full h-full grid gap-3"
                                        style={{
                                            gridTemplateColumns:
                                                "repeat(1, 1fr)",
                                        }}
                                    >
                                        {dataProfilLipid.map((e) => (
                                            <div
                                                key={e.value}
                                                className="flex flex-row gap-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id="radio1"
                                                    name="profil_lipid"
                                                    disabled
                                                    checked={
                                                        dataLab.profil_lipid ===
                                                        e.value
                                                    }
                                                />
                                                <label htmlFor="radio1">
                                                    {e.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default DetailFormLab;

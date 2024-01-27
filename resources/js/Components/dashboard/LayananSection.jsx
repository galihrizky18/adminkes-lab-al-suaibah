import React from "react";
import { Link } from "@inertiajs/react";
import CardLayanan from "./CardLayanan";

import IconPendaftaran from "../../../../public/asset/icon/icon-regsiter.svg";
import IconPoliUmum from "../../../../public/asset/icon/icon-poli-umum.svg";
import IconPoliAnak from "../../../../public/asset/icon/icon-poli-anak.svg";
import IconPoliGigi from "../../../../public/asset/icon/icon-poli-gigi.svg";
import IconApotek from "../../../../public/asset/icon/icon-apotek.svg";
import IconLabor from "../../../../public/asset/icon/icon-labor.svg";
import IconKia from "../../../../public/asset/icon/icon-kia.svg";

const LayananSection = () => {
    const layanan = [
        {
            key: "pendaftaran",
            label: "PENDAFTARAN ONLINE",
            img: IconPendaftaran,
            url: "pendaftaran",
        },
        {
            key: "poli-umum",
            label: "RU. UMUM & Lansia",
            img: IconPoliUmum,
            url: "poli-umum",
        },
        {
            key: "poli-anak",
            label: "RU. ANAK",
            img: IconPoliAnak,
            url: "poli-anak",
        },
        {
            key: "poli-gigi",
            label: "RU. GIGI",
            img: IconPoliGigi,
            url: "poli-gigi",
        },
        { key: "apotek", label: "APOTEK", img: IconApotek, url: "apotek" },
        {
            key: "labor",
            label: "LABORATORIUM",
            img: IconLabor,
            url: "laboratorium",
        },
        { key: "kia", label: "RU. KIA", img: IconKia, url: "kia" },
    ];

    return (
        <div className=" rounded-xl flex flex-col items-center px-3 py-2 shadow-lg">
            <div className="title w-full text-center pb-3 font-montserrat text-3xl sm:text-3xl font-bold text-[#27863f] border-b border-gray-300">
                Layanan Kami
            </div>
            <div className="item mt-5 mb-7 grid grid-cols-2 sm:grid-cols-7 gap-4">
                {layanan.map((data, i) => (
                    <Link
                        key={i}
                        href={`/${data.url}`}
                        className="bg-[#278645] sm:w-24 flex-wrap py-3 rounded-xl shadow-lg text-center hover:scale-110 transition-all duration-200"
                    >
                        <CardLayanan img={data.img} title={data.label} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LayananSection;

import React from "react";
import { Link } from "@inertiajs/react";

const DropdownLayanan = () => {
    const menu = [
        { key: "Pendaftaran", label: "Pendaftaran", url: "pendaftaran" },
        { key: "Poli Umum", label: "Poli Umum", url: "poli-umum" },
        { key: "Poli Anak", label: "Poli Anak", url: "poli-anak" },
        { key: "Poli Gigi", label: "Poli Gigi", url: "poli-gigi" },
        { key: "Apotek", label: "Apotek", url: "apotek" },
        { key: "Laboratorium", label: "Laboratorium", url: "laboratorium" },
        { key: "KIA", label: "KIA", url: "kia" },
    ];

    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end h-full">
            <div
                tabIndex={0}
                role="button"
                className="h-full flex flex-row items-center hover:text-[#278645] hover:scale-110 transition-all"
            >
                Layanan
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32 shadow-xl gap-2"
            >
                {menu.map((data, i) => (
                    <Link
                        key={i}
                        href={`/${data.url}`}
                        className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-[#019A27] hover:font-bold "
                    >
                        <li>{data.label}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default DropdownLayanan;

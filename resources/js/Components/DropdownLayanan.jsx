import React from "react";
import { Link } from "@inertiajs/react";

const DropdownLayanan = () => {
    const menu = [
        { key: "Pendaftaran", label: "Pendaftaran" },
        { key: "Poli Umum", label: "Poli Umum" },
        { key: "Poli Anak", label: "Poli Anak" },
        { key: "Poli Gigi", label: "Poli Gigi" },
        { key: "Apotek", label: "Apotek" },
        { key: "Laboratorium", label: "Laboratorium" },
        { key: "KIA", label: "KIA" },
    ];

    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end h-full">
            <div
                tabIndex={0}
                role="button"
                className="h-full flex flex-row items-center"
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

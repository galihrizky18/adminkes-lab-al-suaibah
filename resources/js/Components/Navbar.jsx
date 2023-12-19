import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

import Logo1 from "../../../public/asset/logo/al-suaibah.png";
import Logo2 from "../../../public/asset/logo/adminkes.png";

import DropdownLayanan from "./DropdownLayanan";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-center sm:justify-between px-5 py-2 sm:px-9 sm:py-3 items-center bg-white shadow-lg ">
            <div className="flex flex-row justify-between items-center gap-4 sm:gap-3">
                <DropdownMenu />

                <img src={Logo1} alt="" className="w-14 sm:w-20" />
                <img
                    src={Logo2}
                    alt=""
                    className="w-14 sm:w-20 hidden sm:block"
                />

                <div className="title flex flex-col text-center sm:text-left">
                    <span className="text-base sm:text-2xl leading-4 font-bold font-open text-[#237c3a]">
                        STIKES AL-SU'AIBAH PALEMBANG
                    </span>
                    <span className="font-bold text-xs sm:text-base font-open text-[#237c3a]">
                        {" "}
                        LABORATORIUM PRODI S1 ADMINISTRASI KESEHATAN
                    </span>
                </div>
                <img src={Logo2} alt="" className="sm:hidden w-14 sm:w-20" />
            </div>
            <div className="hidden sm:flex flex-row gap-10 items-center font-roboto">
                <div className="text-base ">
                    <ul className="flex flex-row gap-7 h-[80px]  ">
                        <li className="flex flex-row items-center ">Berada</li>
                        <li className="flex flex-row items-center ">Profil</li>
                        <li className="flex flex-row items-center ">
                            <DropdownLayanan />
                        </li>
                    </ul>
                </div>
                <div className="user">
                    <Link href="/tes">
                        <div className="login px-3 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white">
                            Login
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

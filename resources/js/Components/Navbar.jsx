import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

import Logo1 from "../../../public/asset/logo/al-suaibah.png";
import Logo2 from "../../../public/asset/logo/adminkes.png";

import DropdownLayanan from "./dashboard/DropdownLayanan";
import DropdownMenu from "./dashboard/DropdownMenu";

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-center sm:justify-between px-5 py-2 sm:px-9 sm:py-3 items-center bg-white shadow-lg ">
            <div className="flex flex-row justify-between items-center gap-4 sm:gap-3">
                <DropdownMenu />

                {/* Logo */}
                <Link href="/">
                    <div className="flex flex-row gap-3">
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
                        <img
                            src={Logo2}
                            alt=""
                            className="sm:hidden w-14 sm:w-20"
                        />
                    </div>
                </Link>
            </div>

            <div className="hidden sm:flex flex-row gap-10 items-center font-roboto">
                <div className="text-base ">
                    <ul className="flex flex-row gap-7 h-[80px]  ">
                        <Link
                            href="/"
                            className="flex flex-row items-center hover:text-[#278645] hover:scale-110 transition-all"
                        >
                            Beranda
                        </Link>
                        <Link className="flex flex-row items-center hover:text-[#278645] hover:scale-110 transition-all">
                            Profil
                        </Link>
                        <li className="flex flex-row items-center ">
                            <DropdownLayanan />
                        </li>
                    </ul>
                </div>
                {/* <div className="user">
                    <Link href="/login">
                        <div className="login px-3 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:scale-110 transition-all text-white">
                            Login
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;

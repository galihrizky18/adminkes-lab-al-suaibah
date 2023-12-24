import React, { useState } from "react";
import {
    MantineProvider,
    Button,
    Group,
    Text,
    Collapse,
    Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@inertiajs/react";

import BuergerIcon from "../../../../public/asset/burger-menu.svg";
import ArrowLeft from "../../../../public/asset/arrow-left.svg";
import ArrowBottom from "../../../../public/asset/arrow-bottom.svg";

const DropdownMenu = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [buka, setBuka] = useState(false);
    const [burgerOpened, setBurgerOpened] = useState(false);

    const menu = [
        { key: "Pendaftaran", label: "Pendaftaran", url: "pendaftaran" },
        { key: "Poli Umum", label: "Poli Umum", url: "#" },
        { key: "Poli Anak", label: "Poli Anak", url: "#" },
        { key: "Apotek", label: "Apotek", url: "#" },
        { key: "Laboratorium", label: "Laboratorium", url: "#" },
        { key: "Poli Gigi", label: "Poli Gigi", url: "#" },
        { key: "KIA", label: "KIA", url: "#" },
    ];

    return (
        <MantineProvider>
            <div className="sm:hidden ">
                <div
                    className="icon"
                    onClick={() => setBurgerOpened(!burgerOpened)}
                >
                    <img src={BuergerIcon} alt="" width={50} />
                </div>

                {/* Menu */}
                <div
                    className={`menu ${
                        burgerOpened ? "" : "hidden"
                    } absolute px-3 py-3 left-0 top-[5rem] text-lg flex flex-col  bg-white shadow-xl`}
                >
                    <div className="item px-3 py-1 rounded-lg hover:bg-[#019A27] hover:text-white">
                        Beranda
                    </div>
                    <div className="item px-3 py-1 rounded-lg hover:bg-[#019A27] hover:text-white">
                        Profile
                    </div>

                    <div className="item w-44 ">
                        <Box maw={400} mx="auto">
                            <div
                                onClick={() => {
                                    toggle(), setBuka(!buka);
                                }}
                                className={`"rounded-lg px-3 py-1 flex tems-center justify-between rounded-lg ${
                                    buka ? "bg-[#019A27] text-white" : ""
                                } hover:bg-[#019A27] hover:text-white mb-3`}
                            >
                                <div className="title">Layanan </div>
                                <span>
                                    <img
                                        src={buka ? ArrowBottom : ArrowLeft}
                                        alt=""
                                        width={25}
                                    />
                                </span>
                            </div>

                            <Collapse in={opened} className="ml-7">
                                {menu.map((data, i) => (
                                    <Link key={i} href={`/${data.url}`}>
                                        <li className="mb-3 rounded-lg px-3 py-1  hover:bg-[#019A27] hover:text-white">
                                            {data.label}
                                        </li>
                                    </Link>
                                ))}
                            </Collapse>
                        </Box>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default DropdownMenu;

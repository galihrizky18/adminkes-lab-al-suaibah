import React, { useEffect, useState } from "react";
import Logo1 from "../../../../public/asset/logo/adminkes.png";
import CardSideBarAdmin from "./sidebar/CardSideBarAdmin";
import Logout from "./Logout";
import CollapseSideBarAdmin from "./sidebar/CollapseSideBarAdmin";
import { Burger, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Icon
import IconUser from "../../../../public/asset/icon/admin/icon-user.svg";
import IconUserSolid from "../../../../public/asset/icon/admin/icon-user-solid.svg";
import IconDashboard from "../../../../public/asset/icon/admin/icon-dashboard.svg";
import IconDashboardSolid from "../../../../public/asset/icon/admin/icon-dashboard-solid.svg";
import IconMenuMaster from "../../../../public/asset/icon/admin/icon-menu-master.svg";
import IconMenuMasterSolid from "../../../../public/asset/icon/admin/icon-menu-master-solid.svg";
import IconBooks from "../../../../public/asset/icon/admin/icon-books.svg";
import IconBooksSolid from "../../../../public/asset/icon/admin/icon-books-solid.svg";
import iconMoney from "../../../../public/asset/icon/admin/icon-money.svg";

// Icon
import { IconReportMoney } from "@tabler/icons-react";

const SideBarAdmin = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const [opened, { toggle }] = useDisclosure();

    return (
        <div className="flex flex-row lg:w-[20%] h-full fixed z-20 ">
            <div
                className={`${
                    sideOpen ? "" : "hidden"
                }  lg:flex flex-col w-full h-full  bg-gradient-to-r from-[#346681] to-[#1E4356] text-white transition duration-500 `}
            >
                {/* body */}
                <div className=" p-5 flex flex-col ">
                    {/* logo */}
                    <div className="logo flex flex-col items-center justify-center gap-2 font-bold text-2xl pb-3 border-b-2 border-white">
                        <img src={Logo1} alt="" width={50} />
                        <div className="titel">ADMIN</div>
                    </div>

                    {/* body */}
                    <ScrollArea h={420} type="never">
                        <div className="mt-3 flex flex-col gap-3">
                            <CardSideBarAdmin
                                img={IconDashboard}
                                imgHover={IconDashboardSolid}
                                title={"Dashboard"}
                                href={"/admin"}
                            />

                            {/* Menu Kasir */}
                            <CardSideBarAdmin
                                img={iconMoney}
                                imgHover={iconMoney}
                                title={"Kasir"}
                                href={"/admin/kasir"}
                            />

                            {/* Detail Admin */}
                            {/* <CardSideBarAdmin
                                img={IconBooks}
                                imgHover={IconBooksSolid}
                                title={"Detail Admin"}
                                href={"/admin/detail/admin"}
                            /> */}

                            {/* Menu Master */}
                            <CollapseSideBarAdmin
                                img={IconMenuMasterSolid}
                                imgHover={IconMenuMasterSolid}
                                title={"Menu Master"}
                            >
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Data Admin"}
                                    href={"/admin/master-menu/admin"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Data Dokter"}
                                    href={"/admin/master-menu/dokter"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Jadwal Dokter"}
                                    href={"/admin/master-menu/jadwal-dokter"}
                                />
                            </CollapseSideBarAdmin>

                            {/* Menu Input */}
                            <CollapseSideBarAdmin
                                img={IconBooks}
                                imgHover={IconBooksSolid}
                                title={"Menu Input"}
                            >
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Kartu Rawat Jalan Umum & Lansia"}
                                    href={
                                        "/admin/master-menu/rawat-jalan-umum-lansia"
                                    }
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Kartu Rawat Jalan Gigi"}
                                    href={"/admin/master-menu/poli-gigi"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Kartu Rawat Jalan KIA"}
                                    href={"/admin/master-menu/rawat-jalan-kia"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Kartu Rawat Jalan Anak"}
                                    href={"/admin/master-menu/rawat-jalan-anak"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Data Laboratorium"}
                                    href={"/admin/master-menu/laboratorium"}
                                />
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Data Farmasi"}
                                    href={"/admin/master-menu/farmasi"}
                                />
                            </CollapseSideBarAdmin>

                            {/* Menu REport */}
                            <CollapseSideBarAdmin
                                img={IconUser}
                                imgHover={IconUserSolid}
                                title={"Report"}
                            >
                                <CardSideBarAdmin
                                    img={IconBooks}
                                    imgHover={IconBooksSolid}
                                    title={"Pasien Baru"}
                                    href={"/admin/report/pasien-baru"}
                                />
                            </CollapseSideBarAdmin>
                        </div>
                    </ScrollArea>
                </div>

                {/* logout */}
                <div className=" lg:mb-5">
                    <Logout />
                </div>
            </div>

            {/* burger Icon */}
            <div>
                <div
                    className={`lg:hidden ${
                        sideOpen ? "bg-[#33647E] shadow-xl" : ""
                    }  mt-6 ml-1 py-1 rounded-lg px-2 `}
                >
                    <Burger
                        color={sideOpen ? "white" : "black"}
                        opened={opened}
                        onClick={() => {
                            toggle();
                            setSideOpen(!sideOpen);
                        }}
                        aria-label="Toggle navigation"
                    />
                </div>
            </div>
        </div>
    );
};

export default SideBarAdmin;

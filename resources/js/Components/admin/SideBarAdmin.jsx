import React, { useEffect, useState } from "react";
import Logo1 from "../../../../public/asset/logo/adminkes.png";
import CardSideBarAdmin from "./sidebar/CardSideBarAdmin";
import Logout from "./Logout";
import CollapseSideBarAdmin from "./sidebar/CollapseSideBarAdmin";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Icon
import IconUser from "../../../../public/asset/icon/admin/icon-user.svg";
import IconUserSolid from "../../../../public/asset/icon/admin/icon-user-solid.svg";
import IconDashboard from "../../../../public/asset/icon/admin/icon-dashboard.svg";
import IconDashboardSolid from "../../../../public/asset/icon/admin/icon-dashboard-solid.svg";
import IconPeople from "../../../../public/asset/icon/admin/icon-people.png";
import IconPeoples from "../../../../public/asset/icon/admin/icon-group-people.png";
import IconMenuMaster from "../../../../public/asset/icon/admin/icon-menu-master.svg";
import IconMenuMasterSolid from "../../../../public/asset/icon/admin/icon-menu-master-solid.svg";

const SideBarAdmin = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const [opened, { toggle }] = useDisclosure();

    return (
        <div className="flex flex-row lg:w-[20%] h-full fixed z-20 ">
            <div
                className={`${
                    sideOpen ? "" : "hidden"
                }  lg:flex flex-col w-full h-full bg-gradient-to-r from-[#346681] to-[#1E4356] text-white transition duration-500`}
            >
                {/* body */}
                <div className=" p-5 ">
                    {/* logo */}
                    <div className="logo flex flex-col items-center justify-center gap-2 font-bold text-2xl pb-3 border-b-2 border-white">
                        <img src={Logo1} alt="" width={50} />
                        <div className="titel">ADMIN</div>
                    </div>

                    {/* body */}
                    <div className="mt-3 flex flex-col gap-3">
                        <CardSideBarAdmin
                            img={IconDashboard}
                            imgHover={IconDashboardSolid}
                            title={"Dashboard"}
                            href={"/admin"}
                        />

                        <CollapseSideBarAdmin
                            img={IconMenuMaster}
                            imgHover={IconMenuMasterSolid}
                            title={"Menu Master"}
                        >
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Admin"}
                                href={"/admin/master-menu/admin"}
                            />
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Umum & Lansia"}
                                href={"/admin/master-menu/poli-umum-lansia"}
                            />
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Gigi"}
                                href={"/admin/master-menu/poli-gigi"}
                            />
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Laboratorium"}
                                href={"/admin/master-menu/laboratorium"}
                            />
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Farmasi"}
                                href={"/admin/master-menu/farmasi"}
                            />
                        </CollapseSideBarAdmin>

                        <CollapseSideBarAdmin
                            img={IconUser}
                            imgHover={IconUserSolid}
                            title={"Patient"}
                        >
                            <CardSideBarAdmin
                                img={IconPeople}
                                imgHover={IconPeoples}
                                title={"Data Patient"}
                                href={"/admin/patient"}
                            />
                        </CollapseSideBarAdmin>
                        <CollapseSideBarAdmin
                            img={IconUser}
                            imgHover={IconUserSolid}
                            title={"Report"}
                        />
                        <CollapseSideBarAdmin
                            img={IconUser}
                            imgHover={IconUserSolid}
                            title={"Pembayaran"}
                        />
                    </div>
                </div>

                {/* logout */}
                <div className=" mt-7 ">
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

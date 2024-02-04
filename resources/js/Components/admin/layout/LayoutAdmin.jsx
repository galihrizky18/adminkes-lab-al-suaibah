import React from "react";
import { Head } from "@inertiajs/react";
import SideBarAdmin from "@/Components/admin/SideBarAdmin";
import InfoUser from "@/Components/admin/InfoUser";
import { MantineProvider } from "@mantine/core";
import { useEffect } from "react";

const LayoutAdmin = (props) => {
    const { children, title, titlePage, user } = props;

    return (
        <MantineProvider>
            <div className="w-full h-full font-montserrat">
                <Head title={`${title} | Admin `} />

                <div className="h-full w-full grid ">
                    {/* Side Bar */}
                    <SideBarAdmin />

                    {/* Body */}
                    <div className="lg:ml-[20%] ">
                        {/* User Info */}
                        <InfoUser titlePage={titlePage} user={user} />

                        {/* isi  */}
                        <div className="mt-[90px] py-2 px-5">{children}</div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default LayoutAdmin;

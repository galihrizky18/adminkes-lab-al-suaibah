import React from "react";
import { Head } from "@inertiajs/react";
import SideBarAdmin from "@/Components/admin/SideBarAdmin";
import InfoUser from "@/Components/admin/InfoUser";
import { MantineProvider, Breadcrumbs } from "@mantine/core";
import { Link } from "@inertiajs/react";

const LayoutAdmin = (props) => {
    const { children, title, titlePage, breadCrumbs, user } = props;

    // BreadCrumbs
    const currentPath = window.location.pathname;

    // BreadCrumbs
    const items = breadCrumbs.map((item, index) => (
        <Link
            key={index}
            href={item.href}
            className={` ${
                currentPath === item.href ? "font-bold" : "font-medium"
            }`}
        >
            {item.title}
        </Link>
    ));

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
                        <div className="mt-[90px]  py-2 px-5 overflow-x-auto">
                            {/* BreadCrumbs */}
                            <div className="w-full h-full px-5 py-3 mb-3 text-sm bg-white rounded-xl shadow-xl border border-gray-300">
                                <Breadcrumbs>{items}</Breadcrumbs>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default LayoutAdmin;

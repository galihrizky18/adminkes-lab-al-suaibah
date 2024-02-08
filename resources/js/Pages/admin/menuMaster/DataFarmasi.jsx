import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";

const DataFarmasi = ({ currentUser }) => {
    // BreadCrumbs
    const breadCrumbs = [
        { title: "Home", href: "/admin" },
        { title: "Data Farmasi", href: "/admin/master-menu/farmasi" },
    ];

    return (
        <LayoutAdmin
            title="Data Farmasi"
            titlePage="Data Farmasi"
            breadCrumbs={breadCrumbs}
            user={currentUser}
        >
            Ini Paga Farmasi
        </LayoutAdmin>
    );
};

export default DataFarmasi;

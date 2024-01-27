import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";

const DataFarmasi = ({ currentUser }) => {
    return (
        <LayoutAdmin
            title="Data Farmasi"
            titlePage="Data Farmasi"
            user={currentUser}
        >
            Ini Paga Farmasi
        </LayoutAdmin>
    );
};

export default DataFarmasi;

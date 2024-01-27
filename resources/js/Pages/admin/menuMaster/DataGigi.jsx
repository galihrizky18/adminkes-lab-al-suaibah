import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";

const DataGigi = ({ currentUser }) => {
    return (
        <LayoutAdmin
            title="Data Umum & Lansia"
            titlePage="Data Umum & Lansia"
            user={currentUser}
        >
            <h1>Inii Paga Data Poli GIGI</h1>
        </LayoutAdmin>
    );
};

export default DataGigi;

import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";

const DataUmumLansia = ({ currentUser }) => {
    return (
        <LayoutAdmin
            title="Data Umum & Lansia"
            titlePage="Data Umum & Lansia"
            user={currentUser}
        >
            <h1>Ini Page Data Umum dan Lansia</h1>
        </LayoutAdmin>
    );
};

export default DataUmumLansia;

import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";

const DataLab = ({ currentUser }) => {
    return (
        <LayoutAdmin
            title="Data Laboratorium"
            titlePage="Data Laboratorium"
            user={currentUser}
        >
            <h1>Ini Page Data Lab</h1>
        </LayoutAdmin>
    );
};

export default DataLab;

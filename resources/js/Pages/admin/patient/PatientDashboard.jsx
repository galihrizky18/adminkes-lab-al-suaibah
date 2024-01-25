import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";
import React from "react";

const PatientDashboard = () => {
    return (
        <LayoutAdmin title="Patient" titlePage="Patient">
            <div className="w-full px-5 py-3 bg-white rounded-xl shadow-xl border border-gray-300">
                Ini Halaman Patient
            </div>
        </LayoutAdmin>
    );
};

export default PatientDashboard;

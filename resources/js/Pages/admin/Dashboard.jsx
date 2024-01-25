import React from "react";
import LayoutAdmin from "@/Components/admin/layout/LayoutAdmin";

const Dashboard = ({ currentUser }) => {
    return (
        <LayoutAdmin title="Dashboard" titlePage="Dashboard" user={currentUser}>
            <div className="w-full px-5 py-3 h-[1000px] bg-white rounded-xl shadow-xl border border-gray-300">
                Ini Halaman Dashboard Admin
            </div>
        </LayoutAdmin>
    );
};

export default Dashboard;

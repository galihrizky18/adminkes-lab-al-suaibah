import React from "react";
import { Head } from "@inertiajs/react";
import SideBarAdmin from "@/Components/admin/SideBarAdmin";

const Dashboard = () => {
    return (
        <div className="w-full h-full font-montserrat">
            <Head title="Dashboard | Admin" />

            <div className="h-full w-full flex flex-row ">
                <SideBarAdmin />
                <div className="w-full border border-black">Sisi Kanan</div>
            </div>
        </div>
    );
};

export default Dashboard;

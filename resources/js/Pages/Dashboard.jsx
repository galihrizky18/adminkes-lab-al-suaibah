import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Dashboard = () => {
    return (
        <div className="h-screen">
            <Head title="Dashboard" />
            {/* Navbar */}
            <Navbar />

            <h1>Ini Dahboard</h1>
        </div>
    );
};

export default Dashboard;

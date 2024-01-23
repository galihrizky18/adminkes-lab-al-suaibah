import React from "react";
import { router } from "@inertiajs/react";

const Logout = () => {
    const handleLogout = () => {
        router.get("/admin/logout");
    };
    return (
        <div className=" w-full h-[40px] flex items-center ">
            <button
                onClick={handleLogout}
                className="w-full h-full bg-[#3286b1] font-bold hover:bg-[#50a1c7] "
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;

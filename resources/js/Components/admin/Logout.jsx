import React from "react";
import { router } from "@inertiajs/react";

const Logout = () => {
    const handleLogout = () => {
        router.get("/admin/logout");
    };
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;

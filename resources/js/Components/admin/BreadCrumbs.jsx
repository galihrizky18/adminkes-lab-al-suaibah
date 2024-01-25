import React from "react";
import { Link } from "@inertiajs/react";

const BreadCrumbs = () => {
    const history = [
        {
            title: "Dashboard",
            href: "#",
        },
        {
            title: "Admin",
            href: "#",
        },
    ];

    return (
        <div className="bg-white shadow-xl mb-5 h-14 rounded-xl px-5 py-3">
            <h1>
                {history.map((e, i) => (
                    <span key={i}>
                        <Link href={e.href}> {e.title} </Link>{" "}
                        {i !== history.length - 1 && "/"}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default BreadCrumbs;

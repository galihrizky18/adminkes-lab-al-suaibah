import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const CardSideBarAdmin = ({ img, imgHover, title, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [sameUrl, setSameUrl] = useState(false);

    const cekLocation = (url) => {
        const urlLocation = window.location.pathname;

        if (url === urlLocation) {
            setSameUrl(true);
        }
    };

    useEffect(() => {
        cekLocation(href);
    }, []);
    return (
        <Link
            href={href}
            className={`rounded-lg w-full h-full px-3 py-2 flex flex-row gap-3 text-sm items-center cursor-pointer text-white hover:font-bold ${
                sameUrl ? `font-bold` : ``
            }`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Icon */}
            <div>
                <img
                    src={isHovered || sameUrl ? imgHover : img}
                    alt=""
                    width={20}
                />
            </div>

            <div className="flex flex-row w-full justify-between items-center ">
                {/* Title */}
                <div>{title}</div>
            </div>
        </Link>
    );
};

export default CardSideBarAdmin;

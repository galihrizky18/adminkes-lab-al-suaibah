import React from "react";
import IconUser from "../../../../../public/asset/icon/admin/icon-user.svg";

const CardSideBarAdmin = ({ img, title }) => {
    return (
        <div className="rounded-lg px-3 py-2 flex flex-row gap-3 items-center hover:scale-105 shadow-lg cursor-pointer bg-gradient-to-r from-[#5295b9] to-[#1d5977] text-white">
            {/* Icon */}
            <div>
                <img src={img} alt="" width={25} />
            </div>

            {/* Title */}
            <div>{title}</div>
        </div>
    );
};

export default CardSideBarAdmin;

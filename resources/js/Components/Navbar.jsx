import React from "react";
import Logo1 from "../../../public/asset/logo/al-suaibah.png";
import Logo2 from "../../../public/asset/logo/adminkes.png";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between px-9 py-3 items-center bg-white shadow-lg">
            <div className="logo flex flex-row items-center">
                <img src={Logo1} alt="" className="w-32 " />
                <img src={Logo2} alt="" className="w-[6.5rem]  " />
            </div>
            <div className="col2 flex flex-row gap-10 font-roboto">
                <div className="menu text-base">
                    <ul className="flex flex-row gap-5">
                        <li>Berada</li>
                        <li>Profil</li>
                        <li>Pelayanan</li>
                    </ul>
                </div>
                <div className="user">P</div>
            </div>
        </div>
    );
};

export default Navbar;

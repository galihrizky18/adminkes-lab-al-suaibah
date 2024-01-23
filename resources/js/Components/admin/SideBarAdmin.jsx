import React from "react";
import Logo1 from "../../../../public/asset/logo/adminkes.png";
import IconUser from "../../../../public/asset/icon/admin/icon-user.svg";
import CardSideBarAdmin from "./sidebar/CardSideBarAdmin";
import Logout from "./Logout";

const SideBarAdmin = () => {
    return (
        <div className="w-[25%] h-[1000px] bg-gradient-to-r from-[#346681] to-[#1E4356] text-white ">
            {/* body */}
            <div className=" p-5 ">
                {/* logo */}
                <div className="logo flex flex-col items-center justify-center gap-2 font-bold text-2xl pb-3 border-b-2 border-white">
                    <img src={Logo1} alt="" width={50} />
                    <div className="titel">ADMIN</div>
                </div>

                {/* body */}
                <div className="mt-3 flex flex-col gap-3">
                    <CardSideBarAdmin img={IconUser} title={"User"} />
                    <CardSideBarAdmin img={IconUser} title={"Patient"} />
                    <CardSideBarAdmin img={IconUser} title={"Report"} />
                    <CardSideBarAdmin img={IconUser} title={"Pusing"} />
                </div>
            </div>

            {/* logout */}
            <div className=" mt-7 ">
                <Logout />
            </div>
        </div>
    );
};

export default SideBarAdmin;

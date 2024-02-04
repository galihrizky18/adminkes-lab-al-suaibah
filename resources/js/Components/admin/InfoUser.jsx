import React, { useEffect, useState } from "react";
import { Avatar, Menu } from "@mantine/core";

import IconUser from "../../../../public/asset/icon/admin/icon-user.svg";

const InfoUser = ({ titlePage, user }) => {
    const [intial, setInitial] = useState("");

    const makeIntialUser = () => {
        const nameUser = user.name;
        const splitName = nameUser.split(" ");
        const takeFirstLetter = splitName.map((word) =>
            word.charAt(0).toUpperCase()
        );
        setInitial(takeFirstLetter.join(""));
    };

    useEffect(() => {
        makeIntialUser();
        console.log(user);
    }, []);

    return (
        <div className="py-5 px-7 fixed z-10 w-full lg:w-[80%] flex flex-row bg-white justify-between items-center shadow-lg border border-gray-400">
            {/* Title */}
            <div className="font-bold text-xl w-full text-center lg:text-left">
                {titlePage}
            </div>
            {/* User */}
            <div className="">
                <Menu
                    // trigger="click-hover"
                    openDelay={100}
                    closeDelay={200}
                    offset={5}
                >
                    <Menu.Target>
                        <Avatar
                            color="cyan"
                            radius="xl"
                            size="md"
                            className="cursor-pointer"
                        >
                            {intial}
                        </Avatar>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <div className="px-3 py-2 bg-[#33647F] text-xs rounded-lg text-white border border-black">
                            {/* User Profile */}
                            <div className="w-full">
                                {/* title */}
                                <div className="pb-1 text-center border-b border-white text-gray-300">
                                    Profile
                                </div>
                            </div>

                            {/* body */}
                            <div className="mt-2 flex flex-row items-center text-sm">
                                <img src={IconUser} alt="" width={13} />
                                <span className="ml-2">{user.name}</span>
                            </div>
                        </div>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>
    );
};

export default InfoUser;

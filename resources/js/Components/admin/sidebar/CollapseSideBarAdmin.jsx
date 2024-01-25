import React, { useEffect, useState } from "react";
import { Group, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import IconArrowLeft from "../../../../../public/asset/icon/admin/icon-arrow-left.svg";
import IconArrowDown from "../../../../../public/asset/icon/admin/icon-arrow-down.svg";

const CollapseSideBarAdmin = (props) => {
    // props
    const { children, img, imgHover, title, href } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Box
            className={`rounded-xl hover:bg-[#1a516d] text-sm  ${
                isOpen ? `bg-[#1a516d]` : ``
            }`}
        >
            <Group
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                onClick={() => {
                    setIsOpen(!isOpen);
                    toggle();
                }}
            >
                {/* icon */}
                <div
                    className={`rounded-lg w-full h-full px-3 py-2 flex flex-row gap-3 items-center cursor-pointer text-white hover:font-bold ${
                        isOpen ? `font-bold` : ``
                    }`}
                >
                    {/* Icon */}
                    <div>
                        <img
                            src={isHovered || isOpen ? imgHover : img}
                            alt=""
                            width={20}
                        />
                    </div>

                    <div className="flex flex-row w-full justify-between items-center">
                        {/* Title */}
                        <div>{title}</div>

                        {/* arrow */}
                        <div className="">
                            <img
                                src={isOpen ? IconArrowDown : IconArrowLeft}
                                alt=""
                                width={25}
                            />
                        </div>
                    </div>
                </div>
            </Group>

            {/* Isi Collapse */}
            <Collapse in={opened}>
                <div className="ml-7 my-3 ">{children}</div>
            </Collapse>
        </Box>
    );
};

export default CollapseSideBarAdmin;

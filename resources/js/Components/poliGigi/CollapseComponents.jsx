import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";


const CollapseComponents = ({ title }) => {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <Box maw={1000} mx="auto" className="w-full ">
            <Group mb={5}>
                <div
                    onClick={toggle}
                    className="w-full flex flex-row select-none  items-center cursor-pointer border-b border-gray-400 pb-2"
                >
                    <div className="arrow">
                        {opened ? (
                            <img src={ArrowDown} alt="" width={30} />
                        ) : (
                            <img src={ArrowRight} alt="" width={30} />
                        )}
                    </div>
                    
                    <div
                        className={`${
                            opened ? " text-lg text-[#237939] font-bold" : ""
                        } select-none hover:text-lg hover:text-[#237939] hover:font-bold transition-all`}
                    >
                        {title}
                    </div>
                </div>
            </Group>

            <Collapse in={opened} className="px-10 ">
                <Text className="select-none ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                    minus ex corporis labore harum doloribus distinctio sint
                    consequuntur nulla accusantium, doloremque veniam itaque
                    necessitatibus! Vel facere magni suscipit delectus
                    voluptates ea. Molestiae animi velit asperiores ipsum,
                    error, tempora dicta quas iusto distinctio nulla recusandae,
                    perferendis natus sint nostrum? Numquam, rerum!
                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents;


import React from "react";
import {
    MantineProvider,
    Button,
    Group,
    Text,
    Collapse,
    Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Tes = () => {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <MantineProvider>
            <Box maw={400} mx="auto">
                <Group justify="center" mb={5}>
                    <Button onClick={toggle}>Toggle content</Button>
                </Group>

                <Collapse in={opened}>
                    <Text>asdsaddddddddddd</Text>
                </Collapse>
            </Box>
        </MantineProvider>
    );
};

export default Tes;

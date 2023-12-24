import React from "react";
import { useState } from "react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import RegistrationSec from "./RegistrationSec";

const Steppers = () => {
    // Stepper
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className="h-full w-[80%] rounded-xl shadow-xl bg-white ">
            <MantineProvider>
                <div className="flex h-full px-5 py-3 flex-col justify-between">
                    <Stepper
                        size="md"
                        active={active}
                        onStepClick={setActive}
                        allowNextStepsSelect={false}
                    >
                        {/* Registration */}
                        <Stepper.Step
                            label="Registration "
                            description="Data Pasien"
                        >
                            <RegistrationSec />
                        </Stepper.Step>

                        {/* Clinic Registration */}
                        <Stepper.Step
                            label="Clinic Registration"
                            description="Pendaftaran Poli"
                        >
                            Step 2 content: Verify email
                        </Stepper.Step>
                        <Stepper.Step
                            label="Final step"
                            description="Get full access"
                        >
                            Step 3 content: Get full access
                        </Stepper.Step>

                        <Stepper.Completed>
                            Completed, click back button to get to previous step
                        </Stepper.Completed>
                    </Stepper>

                    <Group justify="center" mt="xl">
                        <Button variant="default" onClick={prevStep}>
                            Back
                        </Button>
                        <Button onClick={nextStep}>Next step</Button>
                    </Group>
                </div>
            </MantineProvider>
        </div>
    );
};

export default Steppers;
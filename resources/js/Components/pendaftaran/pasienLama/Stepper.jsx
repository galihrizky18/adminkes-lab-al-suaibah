import React from "react";
import { useState } from "react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import SearchPatient from "./SearchPatient";
import DetailPatient from "./DetailPatient";

const Steppers = ({ setNoRM, setNamaPasien, setTanggalLahir, dataPatient }) => {
    // Stepper
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className="h-full text-sm sm:text-base sm:w-[80%] rounded-xl shadow-xl bg-white ">
            <MantineProvider>
                <div className="flex h-full px-5 py-3 flex-col justify-between">
                    <Stepper
                        active={active}
                        onStepClick={setActive}
                        allowNextStepsSelect={false}
                    >
                        <Stepper.Step
                            label="Search Patient Data "
                            description="Temukan Data Pasien"
                        >
                            <SearchPatient
                                setNoRM={setNoRM}
                                dataPetient={dataPatient}
                                setNamaPasien={setNamaPasien}
                                setTanggalLahir={setTanggalLahir}
                            />
                        </Stepper.Step>

                        <Stepper.Step
                            label="Detail Patient"
                            description="Detail Data Pasien"
                        >
                            <DetailPatient />
                        </Stepper.Step>

                        <Stepper.Step
                            label="Download "
                            description="Unduh Data"
                        >
                            Ini Tommbol Download
                        </Stepper.Step>

                        <Stepper.Completed>Terima Kasih</Stepper.Completed>
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

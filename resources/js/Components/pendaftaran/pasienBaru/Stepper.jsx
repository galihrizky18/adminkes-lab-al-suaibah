import React from "react";
import { useState } from "react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import RegistrationSec from "./RegistrationSec";
import ClinicRegisSec from "./ClinicRegisSec";
import ReviewStep from "./ReviewStep";
import ComplateTask from "./ComplateTask";

const Steppers = ({
    setRadioKelaminValue,
    setTextNikValue,
    setTextNamaValue,
    setSearchValueProv,
    setSearchValueCity,
    setTanggalLahirValue,
    setAlamatValue,
    setPoliValue,
    setdateJadwalKunjunganValue,
    setNoHpValue,
    setEmailValue,
    dataPendaftar,
}) => {
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
                            <RegistrationSec
                                setRadioKelaminValue={setRadioKelaminValue}
                                setTextNikValue={setTextNikValue}
                                setTextNamaValue={setTextNamaValue}
                                setSearchValueProv={setSearchValueProv}
                                setSearchValueCity={setSearchValueCity}
                                setTanggalLahirValue={setTanggalLahirValue}
                                setAlamatValue={setAlamatValue}
                                dataPendaftar={dataPendaftar}
                            />
                        </Stepper.Step>

                        {/* Clinic Registration */}
                        <Stepper.Step
                            label="Clinic Registration"
                            description="Pendaftaran Poli"
                        >
                            <ClinicRegisSec
                                setPoliValue={setPoliValue}
                                setdateJadwalKunjunganValue={
                                    setdateJadwalKunjunganValue
                                }
                                setNoHpValue={setNoHpValue}
                                setEmailValue={setEmailValue}
                                dataPendaftar={dataPendaftar}
                            />
                        </Stepper.Step>
                        <Stepper.Step
                            label="Review"
                            description="Cek Data Form"
                        >
                            <ReviewStep dataPendaftar={dataPendaftar} />
                        </Stepper.Step>

                        <Stepper.Completed>
                            <ComplateTask />
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

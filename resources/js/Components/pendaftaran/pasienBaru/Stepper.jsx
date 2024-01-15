import React, { useEffect } from "react";
import { useState } from "react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import RegistrationSec from "./RegistrationSec";
import ClinicRegisSec from "./ClinicRegisSec";
import ReviewStep from "./ReviewStep";
import ComplateTask from "./ComplateTask";
import axios from "axios";

const Steppers = ({
    setRadioKelaminValue,
    setTextNikValue,
    setTextNamaValue,
    setSearchValueProv,
    setSearchValueCity,
    setTanggalLahirValue,
    setAlamatValue,

    setPoliValue,
    setDokterValue,
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

    // Get Data Patient
    const getData = (name) => {
        return dataPendaftar
            ? dataPendaftar.find((e) => e.name === name).value
            : null;
    };

    // Is Step 2 Complete?
    const isStep2Complete = () => {
        if (active < 1) {
            return true;
        }
        return (
            getData("poli") !== "" &&
            getData("dokter") !== "" &&
            getData("jadwalKunjungan") !== "" &&
            getData("noHp") !== "" &&
            getData("email") !== ""
        );
    };

    // Function Upload to Database
    const uploadToDatabase = async () => {
        try {
            const response = await axios.post("/pendaftaran/pasien-baru", {
                dataPendaftar: dataPendaftar,
            });

            console.log(response.data); // Handle respons dari backend
        } catch (error) {
            console.error("Gagal mengirim data ke server:", error);
        }
    };

    // Upload Triger
    useEffect(() => {
        if (active === 3) {
            uploadToDatabase();
        }
    }, [active]);

    return (
        <div className="h-full text-sm sm:text-base sm:w-[80%] rounded-xl shadow-xl bg-white ">
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
                                setDokterValue={setDokterValue}
                                dataPendaftar={dataPendaftar}
                            />
                        </Stepper.Step>

                        {/* Review Step */}
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
                        <Button
                            onClick={nextStep}
                            // disabled={!isStep2Complete()}
                        >
                            Next step
                        </Button>
                    </Group>
                </div>
            </MantineProvider>
        </div>
    );
};

export default Steppers;

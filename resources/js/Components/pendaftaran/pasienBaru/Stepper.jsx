import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import RegistrationSec from "./RegistrationSec";
import ClinicRegisSec from "./ClinicRegisSec";
import ReviewStep from "./ReviewStep";
import ComplateTask from "./ComplateTask";
import axios from "axios";
import Swal from "sweetalert2";

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
    dataDokter,
    dataLayanan,
}) => {
    // Stepper
    const [active, setActive] = useState(0);
    const nextStep = () => {
        if (active === 3) {
            router.get("/pendaftaran");
        } else {
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    };
    const prevStep = () => {
        if (active === 0) {
            router.get("/pendaftaran");
        } else {
            setActive((current) => (current > 0 ? current - 1 : current));
        }
    };

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
            getData("id_layanan") !== "" &&
            getData("id_dokter") !== "" &&
            getData("jadwal") !== "" &&
            getData("no_telepon") !== "" &&
            getData("email") !== ""
        );
    };

    // Function Upload to Database
    const uploadToDatabase = async () => {
        try {
            const response = await axios.post("/pendaftaran/pasien-baru", {
                dataPendaftar: dataPendaftar,
            });

            if (response.data && response.data.message === "Success") {
                Swal.fire({
                    title: "Save Data!",
                    text: "Data Berhasil Disimpan!",
                    icon: "success",
                });
            } else if (response.data && response.data.message === "Failed") {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Gagal Menyimpan Data!",
                });
            } else if (response.data && response.data.message === "Found") {
                Swal.fire({
                    icon: "error",
                    title: "Pasien Sudah Terdaftar",
                    text: "Pasien Sudah Terdaftar dan Antrian Berlangsung!",
                });
                setActive(0);
            }
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
                                dataDokter={dataDokter}
                                dataLayanan={dataLayanan}
                            />
                        </Stepper.Step>

                        {/* Review Step */}
                        <Stepper.Step
                            label="Review"
                            description="Cek Data Form"
                        >
                            <ReviewStep
                                dataPendaftar={dataPendaftar}
                                dataDokter={dataDokter}
                            />
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
                            disabled={!isStep2Complete()}
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

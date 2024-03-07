import React, { useEffect } from "react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { MantineProvider, Stepper, Button, Group } from "@mantine/core";
import SearchPatient from "./SearchPatient";
import DetailPatient from "./DetailPatient";
import axios from "axios";
import Swal from "sweetalert2";

const Steppers = ({ setNoRM, setNamaPasien, setTanggalLahir, dataPatient }) => {
    // useState
    const [patientFromDB, setPatientFromDB] = useState("");
    

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

    const getDataFromDatabase = async () => {
        try {
            const response = await axios.post(
                "/pendaftaran/pasien-lama/search",
                { dataPatient }
            );

            if (response.data.message === "Not Found") {
                setActive(0);
                Swal.fire({
                    icon: "error",
                    title: "Pasien Tidak Ditemukan",
                    text: "Pasien Belum Terdaftar!",
                });
            } else {
                setPatientFromDB(response.data.message);
                Swal.fire({
                    icon: "success",
                    title: "Pasien Ditemukan",
                    text: "Pasien Terdaftar!",
                });
            }
        } catch (e) {
            console.log("Error Fetching : ", e);
        }
    };

    const downloadPDF = async (idReg) => {
        try {
            if(idReg){
                await axios.get(`/pdf-pasien-baru/${idReg}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        active === 1 && getDataFromDatabase();
    }, [active]);

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
                                setNamaPasien={setNamaPasien}
                                setTanggalLahir={setTanggalLahir}
                                dataPatient={dataPatient}
                            />
                        </Stepper.Step>

                        <Stepper.Step
                            label="Detail Patient"
                            description="Detail Data Pasien"
                        >
                            <DetailPatient patientFromDB={patientFromDB} />
                        </Stepper.Step>

                        <Stepper.Step
                            label="Download "
                            description="Unduh Data"
                        >
                            <div className="flex flex-row justify-center items-center gap-5">
                                <h1>
                                    Download Bukti Pendaftaran : 
                                </h1>
                                <button onClick={()=>downloadPDF(patientFromDB[0].id_registration)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download</button>
                            </div>

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

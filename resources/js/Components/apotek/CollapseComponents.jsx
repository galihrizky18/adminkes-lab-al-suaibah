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

            <Collapse in={opened} className="px-10">
                <Text className="select-none text-justify">
                    <h2 className="font-bold text-lg">
                        Obat merupakan zat yang digunakan untuk pencegahan,
                        penyembuhan, pemulihan, peningkatan kesehatan hingga
                        kontrasepsi untuk manusia. Penggunaan obat yang
                        berlebihan dan disalahgunakan akan menimbulkan efek yang
                        merugikan. Namun saat ini justru banyak obat yang
                        disalahgunakan. Penyalahgunaan obat sendiri adalah suatu
                        tindakan penggunaan obat yang berlebihan ataupun adiktif
                        yang bertujuan untuk kondisi non medis dan menciptakan
                        efek ‘menyenangkan’ pada otak.
                    </h2>

                    <div className="font-bold text-lg mt-5">
                        Obat-Obat Tertentu yang Sering Disalahgunakan
                    </div>
                    <div>
                        <p>
                            Menurut Peraturan Badan POM Nomor 10 Tahun 2019
                            Tentang Pedoman Pengelolaan Obat-Obat Tertentu Yang
                            Sering Disalahgunakan, obat-obatan yang sering
                            disalahgunakan terdiri dari 6 jenis, diantaranya :
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            1. Tramadol
                        </h2>
                        <p>
                            Tramadol merupakan obat penghilang rasa sakit
                            (analgesik) golongan opioid yang biasa diresepkan
                            sebagai terapi analgesik pada nyeri neuropati (nyeri
                            syaraf) ataupun terapi adjuvant (tambahan) pada
                            nyeri kronis, biasanya digunakan untuk mengurangi
                            rasa sakit setelah operasi. Obat ini bekerja pada
                            reseptor serotonin dan mengikat reseptor opioid di
                            otak sehingga menimbulkan rasa kantuk dan gembira
                            serta menyebabkan ketergantungan.
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            2. Triheksifenidil
                        </h2>
                        <p>
                            Triheksifenidil merupakan obat anti parkinson, obat
                            yang digunakan untuk membantu mengendalikan gerakan
                            otot tubuh, serta obat yang digunakan untuk gejala
                            sindrom eksrapiramidal. Cara kerja obat ini dapat
                            mempengaruhi kerja organ-organ dan kelenjar yang
                            berhubungan dengan sistem saraf parasimpatis
                            sehingga dapat menimbulkan efek samping pada psikis
                            penggunanya seperti halusinasi, paranoid, dan
                            delusi.
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            3. Klorpromazin
                        </h2>
                        <p>
                            Klorpromazin Obat ini merupakan antipsikotik yang
                            digunakan untuk mengobati gangguan kejiwaan seperti
                            skizofrenia. Cara kerjanya adalah dengan menghambat
                            reseptor dopamin pada sistem dopaminergik mesolimbik
                            serta menghambat pelepasan hormon dari hipotalamus
                            dan hipofisis. Penyalahgunaan obat ini disebabkan
                            karena adanya efek sedasi yang berasal dari ikatan
                            dengan reseptor histamin.
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            4. Amitriptilin
                        </h2>
                        <p>
                            Amitriptilin Obat ini merupakan antidepresan
                            trisiklik yang digunakan untuk mengobati masalah
                            kejiwaan seperti perubahan suasana hati secara
                            drastis dan depresi. Juga dapat digunakan untuk
                            mengobati penyakit syaraf. Obat ini bekerja dengan
                            cara memengaruhi keseimbangan zat kimia alami
                            (neurotransmiter seperti serotonin) pada otak yang
                            biasanya tidak seimbang pada seseorang yang
                            menderita depresi. Efek samping mengantuk atau
                            sedasi merupakan efek yang diinginkan dari
                            penyalahgunaan obat ini.
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            5. Haloperidol
                        </h2>
                        <p>
                            Haloperidol Obat ini memiliki cara kerja yang mirip
                            dengan Klorpromazin yaitu merupakan obat
                            antipsikotik yang bekerja pada reseptor dopamin
                            sehingga mengurangi gejala psikologis seperti
                            halusinasi dan delusi. Haloperidol sering
                            disalahgunakan bersama dengan Triheksilfenidil untuk
                            mendapat efek calm down dari saraf pusat.
                        </p>
                        <h2 className="font-bold text-blue-500 mt-5">
                            6. Dekstrometorfan
                        </h2>
                        <p>
                            Dekstrometorfan Obat ini merupakan satu-satunya obat
                            tertentu yang termasuk golongan obat bebas terbatas
                            yang sering disalahgunakan karena pembeliannya tidak
                            memerlukan resep dokter. Tujuan penggunaannya adalah
                            sebagai obat batuk. Namun karena dapat menimbulkan
                            efek sedasi menyebabkan obat ini kerap
                            disalahgunakan karena harganya yang cukup murah.
                        </p>
                    </div>
                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents;

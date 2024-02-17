import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents5  = ({ title}) => {
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
                <Text className="select-none text-justify">
                    <p>Kamu pasti sering menerima petunjuk ketika membeli obat di apotek, “Obatnya diminum setelah makan, ya” atau “Obat ini diminum ketika perut kosong, sebelum makan”. Ya! Ini adalah salah satu bentuk aturan pakai obat yang harus disampaikan Apoteker ketika pelanggan membeli obat.</p>
                    <p style={{  marginTop: '20px' }}>Aturan minum obat atau aturan pakai merupakan hal yang perlu diperhatikan karena mempengaruhi kebehasilan terapi/pengobatan. Aturan ini berupa petunjuk penggunaan yang memberikan informasi cara pemakaian obat, seperti diminum berapa kali sehari dan kapan diminumnya. Nah, salah satu bentuk aturan pakai obat adalah diminum setelah makan, sebelum makan, atau di saat makan. Lalu, apa ya perbedaannya? Bagaimana cara memakainya yang benar? Yuk simak penjelasannya !</p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Kaitan Obat dan Makanan</p>
                    <p>Obat dan makanan mempunyai keterkaitan karena bisa membentuk interaksi, yang disebut dengan interaksi obat. Interaksi obat adalah situasi dimana ada senyawa atau zat lain yang bisa mempengaruhi kerja dan efek obat. Ada beberapa jenisnya yaitu interaksi antar obat (drug-drug interaction), interaksi obat dengan herbal (drug-herb interaction), dan interaksi obat dengan makanan (drug-food interaction). Obat dan makanan bisa membentuk interaksi karena sama-sama masuk dalam sistem pencernaan.</p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Aturan Pakai : Obat Diminum Sebelum Makan</p>
                    <p style={{ fontWeight: 'bold',color: 'blue', fontSize: '24px', marginTop: '20px' , fontSize: '16px'}}>Contoh obat yang sebaiknya diminum setelah makan</p>
                    <p>Maksud dari obat diminum sebelum makan adalah konsumsi obat dilakukaan saat lambung kosong, yaitu 2-3 jam setelah makan atau 30-60 menit sebelum makan. </p>
                    <p style={{  marginTop: '20px' }}>Beberapa alasan sehingga obat diminum sebelum makan diantaranya seperti: Eritromisin, Paracetamol, dan Amoxicillin. </p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Aturan Pakai : Obat Diminum Setelah Makan</p>
                    <p style={{ fontWeight: 'bold',color: 'blue', fontSize: '24px', marginTop: '20px' , fontSize: '16px'}}>Contoh obat yang sebaiknya diminum setelah makan</p>
                    <p>Maksud dari obat diminum sebelum makan adalah konsumsi obat dilakukaan saat lambung kosong, yaitu 2-3 jam setelah makan atau 30-60 menit sebelum makan. </p>
                    <p style={{  marginTop: '20px' }}>Beberapa alasan sehingga obat diminum sebelum makan diantaranya seperti: aspirin,asetosal, obat jenis NSAID (diklofenak, ibuprofen), obat steroid (prednisolon dan deksametason). </p>



                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents5;

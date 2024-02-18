import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents2  = ({ title}) => {
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
                <Text className="select-none text-justify ">
                <div style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>
                        <h2>Perbedaan Obat Paten dan Obat Generik</h2>
                        </div>

                        <h2 style={{ fontWeight: 'bold' , color: 'blue', marginTop: '20px', fontSize: '19px' }}>Obat Paten</h2>
                            <p> Obat paten merupakan obat yang diproduksi pertama kali (obat baru) dan dipasarkan oleh perusahaan farmasi yang telah memiliki hak paten terhadap produksi obat tersebut. Bisa diartikan bahwa perusahaan farmasi ini mempunyai hak penuh untuk mematenkan zat aktif yang mereka temukan dengan nama (brand tertentu) dan memiliki hak eksklusif untuk memasarkan produk secara monopoli dengan harga yang mereka tentukan.

                                <p style={{  marginTop: '20px' }}></p>Menyadari proses pengembangan obat yang lama dengan biaya besar, maka sudah seyogyanya perusahaan farmasi tersebut mendapatkan hak paten, dimana perusahaan lain tidak bisa memproduksi dan memasarkan obat yang sama.
                                    berdasarkan UU Paten Nomor 13 tahun 2016, hak paten diberikan selama 20 tahun semenjak tanggal penerimaan. Nah, karena seperti apa yang sudah dijelaskan bahwa obat baru ini ditemukan berdasarkan penelitian, berbagai rangkaian pengujian serta harus memenuhi peraturan yang berlaku. Ini tentu membutuhkan biaya yang tidak sedikit, maka dari itu harga dari obat tersebut pun cenderung akan lebih mahal.</p>
                        
                        <h2 style={{ fontWeight: 'bold' , color: 'blue', marginTop: '20px', fontSize: '19px' }}>Obat Generik</h2>
                            <p>Obat generik adalah obat dengan zat aktif  yang masa patennya sudah habis. Atau dapat diartikan ketika hak paten obat suatu perusahaan telah habis, maka jenis obat tersebut dapat diproduksi oleh hampir seluruh perusahaanfarmasi yang ada tanpa harus membayar invensi. Perlu diketahui terlebih dahulu, bahwa obat generik ini terdiri atas 2 jenis yaitu obat generik berlogo dan obat generik bermerk.</p>
                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents2;

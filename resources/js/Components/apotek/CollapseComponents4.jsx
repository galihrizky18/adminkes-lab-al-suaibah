import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents4  = ({ title}) => {
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
                    <p>Saat pelanggan membeli obat di apotek, sudah seharusnya Apoteker dan Asisten Apoteker menyampaikan informasi terkait obat yang tepat dan relavan. Hal ini sesuai dengan standar pelayanan kefarmasian di apotek Permenkes Nomor 73 Tahun 2016. Namun, adakalanya informasi tersebut tidak tersampaikan karena berbagai alasan seperti tidak biasa, apotek terlalu sibuk, dan lainnya. Padahal, sebagai seorang Apoteker ataupun Tenaga Teknis Kefarmasian yang bekerja di Apotek, memberikan informasi ataupun edukasi kepada pelanggan yang datang membeli obat tentu menjadi suatu hal yang wajib. Jangan sampai pelanggan membeli di apotek tanpa informasi yang jelas sehingga obat yang digunakan menjadi tidak berkhasiat secara optimal atau bahkan tidak berefek.</p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Informasi kegunaan obat</p>
                    <p style={{  marginTop: '20px' }}>Kegunaan atau indikasi obat berisi informasi fungsi atau tujuan penggunaan obat. Gejala apa saja atau penyakit apa saja yang bisa diatasi dengan penggunaan obat tersebut. Sampaikan informasi terkait kegunaan obat kepada pasien/pelanggan, misalnya “Ini obat antinyerinya, Bu. Ini untuk mual muntahnya, Bu. Ini obat untuk diare ya Bu.”</p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Informasi aturan pakai dan cara pakai obat</p>
                    <p style={{  marginTop: '20px' }}>Aturan pakai adalah petunjuk penggunaan yang memberikan informasi cara pemakaian obat, seperti diminum berapa kali sehari, diminum setelah/sebelum/saat makan. Menurut FDA (Food and Drug Administration) pelabelan aturan pakai obat harus diberikan secara ringkas, rinci, dan mudah dipahami.
                                                        Cara pakai obat adalah cara menggunakan obat. Untuk obat-obat dengan penggunaan tertentu perlu dijelaskan agar pasien tidak salah dalam menggunakan obat, misalnya cara menggunakan obat tetes mata, tablet sublingual, suppositoria, inhaler, dan lain-lain.</p>
                    <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Informasi efek samping obat</p>
                    <p style={{  marginTop: '20px' }}>Hampir semua jenis obat baik obat resep, non resep, suplemen, dan obat herbal mempunyai efek samping. Efek samping adalah efek yang mungkin muncul yang bukan merupakan efek utama (efek yang diharapkan) dari penggunaan obat dalam dosis lazimnya. Ini bisa muncul setelah penggunaan obat ataupun setelah penggunaan jangka panjang, bisa bersifat ringan hingga serius.
                                                        Efek samping ini penting diinformasikan kepada pelanggan untuk mengetahui reaksi-reaksi yang akan terjadi setelah meminum obat, sehingga pasien dapat menghindari penggunaan obat dalam kondisi tertentu. Misalnya obat-obat dengan efek samping mengantuk dianjurkan untuk tidak diminum saat akan membawa kendaraan. Namun, perlu diinformasikan juga bila terjadi efek samping yang terus menerus bahkan setelah pemakaian obat dihentikan ataupun efek lainnya yang semakin parah agar pelanggan segera berkonsultasi dengan Dokter/Apoteker.</p>


                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents4;

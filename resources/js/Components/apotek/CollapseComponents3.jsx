import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents3 = ({ title }) => {
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
                    <p>
                        Pelayanan telefarmasi merupakan kegiatan pelayanan
                        penyediaan perawatan kefarmasian melalui penggunaan
                        teknologi telekomunikasi dan informasi kepada pasien
                        dari jarak jauh. Konsepnya adalah pelayanan obat dengan
                        menggunakan sistem teknologi, sehingga mempermudah
                        pasien mendapatkan obat yang bermutu dan aman dengan
                        tetap memprioritaskan keamanan pasien.
                    </p>
                    <p className="mt-4">
                        Telefarmasi semakin digencarkan sejak pandemi Covid-19,
                        begitu juga dengan telemedicine seperti pelayanan medis
                        jarak jauh (konsultasi dokter secara online, kunjungan
                        virtual). Telefarmasi dilaksanakan oleh Apoteker dengan
                        mengacu pada standar pelayanan kefarmasian di
                        masing-masing fasilitas pelayanan kefarmasian.
                    </p>
                    <p className="font-bold text-xl mt-5">
                        Telefarmasi dalam rangka telemedisin
                    </p>
                    <p className="mt-4">
                        Telefarmasi merupakan bagian dari telemedisin dan
                        telehealth. Berikut framework hubungannya:
                    </p>
                    <img
                        src="https://i0.wp.com/blog.apotekdigital.com/wp-content/uploads/2023/06/Screenshot-2023-06-20-10.13.02-AM.png?resize=768%2C365&ssl=1"
                        alt=""
                        className="mt-4"
                    />
                    <p className="mt-4">
                        Sesuai dengan Surat Edaran HK.02.01/Menkes/303/2020,
                        telemedisin semakin digencarkan sejak pandemi Covid-19.
                        Salah satu penerapannya adalah penggunaan resep
                        elektronik. Penulisan resep elektronik dapat dilakukan
                        secara tertutup (melalui aplikasi dari dokter ke
                        fasyanfar) atau terbuka (pemberian e-resep secara
                        langsung kepada pasien dengan kode identifikasi). Dalam
                        hal ini, apoteker di apotek berperan dalam melakukan
                        praktik kefarmasian sesuai standar, contohnya pengkajian
                        resep, dispensing, dan penyiapan obat sesuai dengan
                        resep dokter.
                    </p>
                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents3;

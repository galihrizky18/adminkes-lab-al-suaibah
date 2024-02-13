import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents1  = ({ title}) => {
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
                <h2></h2>
                Obat ilegal adalah obat yang tidak memiliki izin edar (tidak terdaftar di BPOM), termasuk juga obat palsu sehingga tidak terjamin keamanan, mutu, khasiat hingga membahayakan. Obat ilegal tidak boleh digunakan oleh masyarakat, hingga harus dicegah penyebarannya karena dapat membahayakan penggunanya.
                Setelah melewati masa pandemi yang berawal pada tahun 2019 yang mengharuskan masyarakat untuk mengurangi penularan Covid-19. Salah satunya dengan mengurangi mobilitas dan kegiatan di luar termasuk pada saat berbelanja. Proses jual beli secara online semakin diminati karena dapat dilakukan melalui ponsel termasuk pembelian obat-obatan. Menurut Badan Pusat Statistik, pada saat pandemi terdapat 20% pengeluaran rumah tangga dialokasikan untuk kebutuhan kesehatan. Hal ini menyebabkan tingginya permintaan obat sehingga dapat membuka celah terjadinya distribusi obat ilegal di masyarakat. Disinilah peran Apoteker dan Tenaga Teknis Kefarmasian sebagai tenaga kesehatan untuk mencegah penyebaran obat ilegal di masyarakat.
                <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Peraturan Terkait Penjualan dan Pembelian Secara Online</p>
                <p style={{  marginTop: '20px' }}>Badan Pengawas Obat dan Makanan (BPOM RI) mengeluarkan peraturan PerKa BPOM Nomor 8 Tahun 2020 tentang Pengawasan Obat dan Makanan yang Diedarkan Secara Daring. Objek dari peraturan ini meliputi obat, obat tradisional, suplemen kesehatan, kosmetik, dan pangan olahan. Peraturan ini mengatur siapa saja yang berhak melakukan penjualan obat dan makanan secara online dan daftar obat dan makanan yang boleh maupun dilarang untuk dijual secara online.</p>
                <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}>Edukasi yang Harus Diberikan Apoteker kepada Masyarakat</p>
                <p style={{  marginTop: '20px' }}>Peredaran obat secara online membuka kesempatan bagi peredaran obat ilegal. Baik obat palsu yang tidak memiliki izin edar sehingga tidak terjamin mutu, khasiat dan keamanannya. Oleh karena itu diperlukan peran Apoteker dan TTK untuk turut serta mencegah peredaran dan penggunaan obat ilegal, salah satunya melalui edukasi kepada masyarakat.</p>

                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents1;

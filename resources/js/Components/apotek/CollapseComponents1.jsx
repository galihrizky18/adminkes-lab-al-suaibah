import React from "react";
import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ArrowRight from "../../../../public/asset/arrow-right.svg";
import ArrowDown from "../../../../public/asset/arrow-bottom.svg";

const CollapseComponents1 = ({ title }) => {
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
                    <div>
                        <p>
                            Obat ilegal adalah obat yang tidak memiliki izin
                            edar (tidak terdaftar di BPOM), termasuk juga obat
                            palsu sehingga tidak terjamin keamanan, mutu,
                            khasiat hingga membahayakan. Obat ilegal tidak boleh
                            digunakan oleh masyarakat, hingga harus dicegah
                            penyebarannya karena dapat membahayakan penggunanya.
                            Setelah melewati masa pandemi yang berawal pada
                            tahun 2019 yang mengharuskan masyarakat untuk
                            mengurangi penularan Covid-19. Salah satunya dengan
                            mengurangi mobilitas dan kegiatan di luar termasuk
                            pada saat berbelanja. Proses jual beli secara online
                            semakin diminati karena dapat dilakukan melalui
                            ponsel termasuk pembelian obat-obatan. Menurut Badan
                            Pusat Statistik, pada saat pandemi terdapat 20%
                            pengeluaran rumah tangga dialokasikan untuk
                            kebutuhan kesehatan. Hal ini menyebabkan tingginya
                            permintaan obat sehingga dapat membuka celah
                            terjadinya distribusi obat ilegal di masyarakat.
                            Disinilah peran Apoteker dan Tenaga Teknis
                            Kefarmasian sebagai tenaga kesehatan untuk mencegah
                            penyebaran obat ilegal di masyarakat.
                        </p>
                    </div>
                    <div className="font-bold text-lg mt-5">
                        Peraturan Terkait Penjualan dan Pembelian Secara Online
                    </div>
                    <p className="mt-5">
                        Badan Pengawas Obat dan Makanan (BPOM RI) mengeluarkan
                        peraturan PerKa BPOM Nomor 8 Tahun 2020 tentang
                        Pengawasan Obat dan Makanan yang Diedarkan Secara
                        Daring. Objek dari peraturan ini meliputi obat, obat
                        tradisional, suplemen kesehatan, kosmetik, dan pangan
                        olahan. Peraturan ini mengatur siapa saja yang berhak
                        melakukan penjualan obat dan makanan secara online dan
                        daftar obat dan makanan yang boleh maupun dilarang untuk
                        dijual secara online.
                    </p>
                    <div className="font-bold text-lg mt-5">
                        Edukasi yang Harus Diberikan Apoteker kepada Masyarakat
                    </div>
                    <p className="mt-5">
                        Peredaran obat secara online membuka kesempatan bagi
                        peredaran obat ilegal. Baik obat palsu yang tidak
                        memiliki izin edar sehingga tidak terjamin mutu, khasiat
                        dan keamanannya. Oleh karena itu diperlukan peran
                        Apoteker dan TTK untuk turut serta mencegah peredaran
                        dan penggunaan obat ilegal, salah satunya melalui
                        edukasi kepada masyarakat.
                    </p>
                    <div className="font-bold text-lg mt-5">
                        Sarankan pelanggan untuk selalu melakukan pengecekan
                        legalitas obat melalui Cek BPOM
                    </div>
                    <p className="mt-5">
                        Perlu diketahui salah satu syarat penjualan obat secara
                        online ini adalah harus memberikan informasi produk
                        secara detail terkait izin edar, komposisi, kegunaan,
                        dan dosis obat pada setiap produknya. Jika tidak ada
                        informasi yang jelas, lebih baik cari yang lain. Bisa
                        jadi itu adalah penjual ilegal!
                    </p>
                    <p className="mt-5">
                        Maka dari itu, pengecekan legalitas obat ini penting
                        dilakukan saat pelanggan akan membeli secara online
                        ataupun saat menerima obat untuk memastikan bahwa produk
                        yang diberikan memiliki izin edar dari BPOM sehingga
                        dipastikan sudah teruji aman, bermutu dan berkhasiat
                        serta telah memenuhi seluruh persyaratan dan peraturan
                        perundang-undangan yang berlaku. Selanjutnya, berikan
                        penjelasan kepada pelanggan mengenai laman website resmi
                        untuk pengecekannya hanya di{" "}
                        <span className="text-blue-500">
                            " https://cekbpom.pom.go.id/ "
                        </span>
                        .
                    </p>
                </Text>
            </Collapse>
        </Box>
    );
};

export default CollapseComponents1;

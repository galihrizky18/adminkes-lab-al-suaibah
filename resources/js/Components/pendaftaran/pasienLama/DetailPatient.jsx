import React, { useEffect } from "react";

const DetailPatient = ({ patientFromDB }) => {
    return (
        <div className="mt-3 px-3 ">
            <div className="title text-center pb-3 text-xl border-b border-gray-300">
                DETAIL PASIEN
            </div>
            <div className="mt-3">
                <div className="flex flex-col gap-2">
                    {/* Nama Pasien*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Nama Pasien
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.patient?.name}
                        </div>
                    </div>

                    {/* Tanggal Lahir*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Tanggal Lahir
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.patient?.birth}
                        </div>
                    </div>

                    {/* Provinsi*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Provinsi
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.patient?.province}
                        </div>
                    </div>

                    {/* Kota*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Kota
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.patient?.city}
                        </div>
                    </div>

                    {/* Poli*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Layanan
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.layanan?.layanan}
                        </div>
                    </div>

                    {/* Dokter Terpilih*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Dokter
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.dokters?.nama_dokter}
                        </div>
                    </div>

                    {/* Jadwal Kunjungan*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Jadwal Kunjungan
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            {patientFromDB[0]?.jadwal}
                        </div>
                    </div>

                    {/* Nomor Telepon*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Nomor Telepon
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold ">
                            0{patientFromDB[0]?.no_telepon}
                        </div>
                    </div>

                    {/* Email*/}
                    <div className="item h-8 flex flex-row">
                        <div className="title w-[50%] flex items-center">
                            Email
                        </div>
                        <div className="w-full rounded-lg h-8 flex items-center flex-wrap line-clamp-2 px-3 font-bold">
                            {patientFromDB[0]?.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPatient;

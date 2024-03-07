import React,{useEffect, useState} from "react";
import DataTable from 'react-data-table-component';


const JadwalDokter = ({jadwalDokter}) => {

    const [data, setData] =useState();

    const convertData = (data) => {
        return data.map((e) => ({
            dokter: e.dokter.nama_dokter,
            spesialis: e.dokter.spesialis,
            senin: e.senin === "00:00 - 00:00"?"-":e.senin,
            selasa: e.selasa=== "00:00 - 00:00"?"-":e.selasa,
            rabu: e.rabu === "00:00 - 00:00"?"-":e.rabu,
            kamis: e.kamis === "00:00 - 00:00"?"-":e.kamis,
            jumat: e.jumat === "00:00 - 00:00"?"-":e.jumat,
            sabtu: e.sabtu === "00:00 - 00:00"?"-":e.sabtu,
            
        }));
    };

    // mengatur kolom table
    const columns = [{
        name: "Dokter",
        selector: (row) => row.dokter,
        sortable: true,
        width: "180px",
    },
    {
        name: "Spesialis",
        selector: (row) => row.spesialis,
        sortable: true,
        width: "130px",
    },
    {
        name: "Senin",
        selector: (row) => row.senin,
    
        width: "130px",
    },
    {
        name: "Selasa",
        selector: (row) => row.selasa,
     
        width: "130px",
    },
    {
        name: "Rabu",
        selector: (row) => row.rabu,

        width: "130px",
    },
    {
        name: "Kamis",
        selector: (row) => row.kamis,

        width: "130px",
    },
    {
        name: "Jumat",
        selector: (row) => row.jumat,

        width: "130px",
    },
    {
        name: "Sabtu ",
        selector: (row) => row.sabtu,

        width: "130px",
    }];

    // mengatur style table
    const customStyles = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "1rem",
            },
        },
        rows: {
            style: {
                fontSize: ".9rem",
            },
        },
        cells: {
            style: {
                wordBreak: "break-word",
            },
            draggingStyle: {},
        },
    };

    useEffect(()=>{
    
        setData(convertData(jadwalDokter));
    },[jadwalDokter]);
    
    return (
        <div className=" rounded-xl flex flex-col items-center px-3 py-8 shadow-lg bg-white">
            <div className="title w-full text-center pb-3 font-montserrat text-3xl sm:text-3xl font-bold text-[#27863f] border-b border-gray-300">
                Jadwal Dokter
            </div>
            <div>
            <DataTable
                columns={columns}
                data={data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="500px"
                customStyles={customStyles}
            />
            </div>
        </div>
    );
};

export default JadwalDokter;

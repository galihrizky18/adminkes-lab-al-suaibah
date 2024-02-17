import React, { useState } from "react";
import { AreaChart } from "@mantine/charts";

const ChartPoliUmumLansia = ({ dataPoliUmumLansia }) => {
    const handleConverData = (data) => {
        // Mengubah objek menjadi array pasangan kunci-nilai
        const dataArray = Object.entries(data);

        // Mengonversi array pasangan kunci-nilai menjadi string-format kunci dan nilai
        const convertedData = dataArray.map(
            ([bulan, jumlahData]) => `${bulan}: ${jumlahData}`
        );

        return convertedData;
    };

    // console.log(handleConverData(dataPoliUmumLansia));
    console.log(dataPoliUmumLansia);

    // Data
    const datas = [
        {
            date: "Mar 22",
            Apples: 2890,
            Oranges: 2338,
            Tomatoes: 2452,
        },
        {
            date: "Mar 23",
            Apples: 2756,
            Oranges: 2103,
            Tomatoes: 2402,
        },
        {
            date: "Mar 24",
            Apples: 3322,
            Oranges: 986,
            Tomatoes: 1821,
        },
        {
            date: "Mar 25",
            Apples: 3470,
            Oranges: 2108,
            Tomatoes: 2809,
        },
        {
            date: "Mar 26",
            Apples: 3129,
            Oranges: 1726,
            Tomatoes: 2290,
        },
    ];
    return (
        <AreaChart
            h={300}
            data={datas}
            dataKey="date"
            series={[
                { name: "Apples", color: "indigo.6" },
                { name: "Oranges", color: "blue.6" },
                { name: "Tomatoes", color: "teal.6" },
            ]}
            curveType="linear"
        />
    );
};

export default ChartPoliUmumLansia;

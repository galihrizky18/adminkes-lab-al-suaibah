import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Atas from "@/Components/profil/atas1";
import Boxx from "@/Components/profil/Boxx";
import About from "@/Components/dashboard/About";
import Footer from "@/Components/dashboard/Footer";


const Profil = () => {
    return (
        <div>
            <Navbar />
            <Atas />
            <About />
            <br />
            {/* <Bawah />   */}
            <h1 className="text-2xl font-bold text-black-500 mt-4 text-center">PELUANG KARIR</h1>
            <Boxx />     
            <Footer />  
            
        </div>
    );
};

export default Profil;

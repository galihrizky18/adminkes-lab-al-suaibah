import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import gedung from "../../../../public/asset/gedung-stikes.jpg";
import Logo1 from "../../../../public/asset/logo/al-suaibah.png";
import Logo2 from "../../../../public/asset/logo/adminkes.png";
import FormLogin from "@/Components/login/FormLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dataLogin = [
        {
            name: "username",
            value: username,
        },
        {
            name: "password",
            value: password,
        },
    ];

    return (
        <div>
            <Head title="Login" />
            <div className=" sm:flex sm:flex-row w-full h-screen ">
                {/* Login Pict */}
                <div className="pic hidden lg:flex">
                    <img
                        src={gedung}
                        alt=""
                        className=" w-full h-full object-contain"
                        style={{ filter: "opacity(.8)" }}
                    />
                </div>

                {/* Card Login */}
                <div className="loginCard absolute flex flex-col sm:p-10 justify-center items-center w-full lg:w-[50%] h-full right-0 bg-gradient-to-r  text-white">
                    <div className="flex flex-col w-[80%] sm:w-[70%] gap-3 ">
                        {/* logo */}
                        <div className="pict flex flex-row w-full justify-center gap-5">
                            <img
                                src={Logo1}
                                alt=""
                                className="w-[25%] h-full"
                            />
                            <img
                                src={Logo2}
                                alt=""
                                className="w-[25%] h-full"
                            />
                        </div>

                        {/* title */}
                        <div className="text-center border-b-4 pb-2 border-[#49ec72] font-bold font-montserrat">
                            <span>
                                STIKES AL-SU'AIBAH PALEMBANG LABORATORIUM PRODI
                                S1 ADMINISTRASI KESEHATAN
                            </span>
                        </div>

                        {/* form */}
                        <div>
                            <FormLogin
                                setUsername={setUsername}
                                setPassword={setPassword}
                                dataLogin={dataLogin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

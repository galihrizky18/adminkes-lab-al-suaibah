import React, { useEffect, useState } from "react";
import {
    MantineProvider,
    TextInput,
    Button,
    PasswordInput,
} from "@mantine/core";
import axios from "axios";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const FormLogin = ({ setUsername, setPassword, dataLogin }) => {
    const [isLogin, setIsLogin] = useState();
    // Get Data Login
    const getData = (name) => {
        return dataLogin ? dataLogin.find((e) => e.name === name).value : null;
    };

    // upload
    const upload = async () => {
        try {
            const response = await axios.post("/login", dataLogin);

            if (response.data.isLoggedIn) {
                Swal.fire({
                    icon: "success",
                    title: "Login Success",
                    text: "Login Berhasil",
                });
                setIsLogin(response.data.isLoggedIn);
            } else {
                setIsLogin(false);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Username atau Password Salah!",
                });
            }
        } catch (error) {
            console.log("error" + error.message);
        }
    };

    const handleKeyEnter = (e) => {
        if (e.key === "Enter") {
            upload();
        }
    };

    useEffect(() => {
        if (isLogin) {
            router.get("/admin");
        }
    }, [isLogin]);

    return (
        <MantineProvider>
            <div className="flex flex-col gap-3">
                {/* Username */}
                <TextInput
                    radius="lg"
                    placeholder="username"
                    size="md"
                    value={getData("username")}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                />

                {/* Password */}
                <PasswordInput
                    radius="lg"
                    placeholder="Password"
                    size="md"
                    value={getData("password")}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    onKeyDown={handleKeyEnter}
                />

                {/* Button */}
                <Button
                    className="mt-3 hover:scale-"
                    radius="lg"
                    variant="gradient"
                    gradient={{
                        from: "rgba(17, 180, 0, 1)",
                        to: "rgba(91, 219, 26, 1)",
                        deg: 90,
                    }}
                    onClick={upload}
                >
                    Login
                </Button>
            </div>
        </MantineProvider>
    );
};

export default FormLogin;

import React, { useState } from "react";
import cinema from "../assets/cinema.jpg";
import { Link, Navigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { UserAuth } from "../context/AuthContext";
import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()
    const [error, setError] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showSuccess, setSuccess] = useState(false)
    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            setSuccess(true)
            window.location.href = "/"
        } catch (e) {
            setError(e.message)
            setShowAlert(true)
            console.log(e.message)
        }
    }
    return (
        <>
            <div className="w-full h-screen">
                <img
                    src={cinema}
                    className="hidden sm:block absolute w-full h-full object-cover"></img>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[560px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit} className="w-full- flex flex-col py-4">
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    className="p-3 my-2 bg-gray-100 rounded text-black"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="Email"
                                />
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    className="p-3 my-2 bg-gray-100 rounded text-black"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="Password"
                                />
                                <button className="bg-red-600 py-3 my-6" onClick={handleSubmit}>Sign Up</button>
                                <div className="flex justify-between items-center text-sm text-gray-250">
                                    <p>
                                        <input type="checkbox" className="mr-2" /> Remember Me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-250">
                                        Already have an account?
                                    </span>{" "}
                                    <Link to="/Login" className="text-red-600">Sign In</Link>
                                </p>
                                <div className="mx-auto">
                                    <SignIn />
                                </div>
                            </form>

                            {showAlert && (
                                <div className="fixed bottom-4 right-4 max-w-[336px] z-50 text-black">
                                    <Alert status="error" rounded="md">
                                        <AlertIcon />
                                        {error}
                                        <CloseButton position="absolute" right="2" top="2" onClick={handleCloseAlert} />
                                    </Alert>
                                </div>
                            )}
                            {showSuccess && (
                                <div className="fixed bottom-4 right-4 w-[300px] z-50 text-black">
                                    <Alert status="success" rounded="md">
                                        <AlertIcon />
                                        Login Success
                                        <CloseButton position="absolute" right="2" top="2" onClick={handleCloseAlert} />
                                    </Alert>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SignUp;

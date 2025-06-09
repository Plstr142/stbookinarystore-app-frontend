import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from "framer-motion";
import axios from "axios"
import { config } from '@react-spring/web';
import getBaseUrl from '../utils/baseUrl';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [message, setMessage] = useState("")

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const auth = response.data;
            console.log(auth)
            if(auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired!, Please login again.');
                    navigate("/")
                }, 3600 * 1000)
            }

            alert("Admin Login successful!")
            navigate("/dashboard")
        } catch (error) {
            setMessage("Please provide a valid email and password")
            console.error(error)
        }
    }

    return (
        <div className="relative mx-5 my-5">
            <div className="h-screen flex justify-center items-center">
                <div className="w-full max-w-lg mx-auto bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold my-6 text-black dark:text-black text-center">
                        Admin StBookinary Store
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full justify-between flex flex-col gap-5">
                        <div>
                            <label
                                className="block text-gray-800 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                {...register("username", { required: true })}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 leading-tight
              focus:outline-none focus:shadow"
                            />
                        </div>

                        <div className="passwordform" name="passwordform">
                            <label
                                className="block text-gray-800 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 leading-tight
              focus:outline-none focus:shadow"
                            />
                        </div>
                        {
                            message && <p className="text-red-500 text-xs mb-3">{message}</p>
                        }
                        <div className='w-full'>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-black text-white px-4 py-2 rounded-lg w-full"
                            >
                                Login
                            </motion.button>
                        </div>
                    </form>
                
                    {/* mx-10 flex flex-col justify-between gap-4 */}
                    <div className="">
                        {/* <p className='invisible text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p> */}
                        <p className='text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminLogin
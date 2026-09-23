'use client'

import React, { useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const [isShowPassword , setIsShowPassword] =useState(false);
    const handelRegister = async(data) => {
        console.log(data)
        const { email, name, photoUrl, password } = data;
        const { data:res,error } = await authClient.signUp.email({
            name: name,
            email: email,
            password:password,
            image: photoUrl,
            callbackURL:"/login",
        });
        console.log(res ,error ,"res")
        if(error){
            toast.error(error.message,{
               autoClose: 1500,
            })
          
        }
        if(res){
          toast.success('Register Successful',{
             autoClose: 1500,
          })
        }


    }
     const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className='container mx-auto min-h-[90vh] flex justify-center items-center bg-teal-500/7'>
            <div className='flex flex-col justify-center items-center  rounded-2xl p-10 max-w-md mx-auto bg-white w-100'>
                <div className='mb-7 mt-5'>
                    <h2 className=" flex justify-center items-center text-lg sm:text-4xl font-bold px-2">
                        <span className='text-amber-500 text-2xl sm:text-6xl mr-1'><IoSunnyOutline /></span>Sun<span className='text-amber-500 -ml'>Cart</span>
                    </h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Welcome Back</h2>
                    <h2 className='text-xl font-semibold'>Login to Your Account</h2>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(handelRegister)} >
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend"> Name</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter Your Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {
                                errors.name && <p className='text-red-500'>{errors.name.message}</p>
                            }


                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend"> PhotoURL</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter Your PhotoUrl"
                                {...register("photoUrl", { required: "PhotoURL is required" })}
                            />
                            {
                                errors.photoUrl && <p className='text-red-500'>{errors.photoUrl.message}</p>
                            }


                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend"> Email</legend>
                            <input
                                type="email"
                                className="input w-full"
                                placeholder="Enter Your Email"
                                {...register("email", { required: "Email is required" })}
                            />
                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }


                        </fieldset>
                        <fieldset className="fieldset w-full relative">
                            <legend className="fieldset-legend">Password</legend>
                            <input
                            
                                type={isShowPassword?"text":"password"}
                                className="input w-full "
                                placeholder="Enter Your Password"
                                {...register("password", { required: 'password is required' })} />
                                <span className='absolute right-3 top-4' onClick={()=> setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                                    }
                                    

                                </span>
                                
                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }

                        </fieldset>
                        <div className='mt-8 w-full'>
                            <button className='btn bg-teal-600/80 w-full rounded-4xl'>Register</button>
                        </div>

                    </form>

                </div>

                <div className='mt-4 w-full '>
                    <button className='btn btn-ghost border-2 border-teal-800 w-full rounded-4xl' onClick={handleGoogleLogin}><FcGoogle />Login With Google</button>
                </div>

                <p className='mt-6 text-sm'>Already have an account? <Link href="/login" className="text-red-500 hover:underline">Login here</Link></p>

            </div>
        </div>

    );
};

export default RegisterPage;
"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
;

const UpdateProfilePage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
   const handleProfileUpdate = async (data) => {
        const { name, photoUrl } = data;

        const { data: res, error } = await authClient.updateUser({
            name: name,
            image: photoUrl,
        });

        if (error) {
            toast.error(error.message, { autoClose: 1500 });
            return;
        }

        if (res) {
            toast.success('Profile Updated Successfully', { autoClose: 1500 });
            router.push('/profile');
        }
    }
    return (
        <div className=' container mx-auto  flex justify-center items-center px-3 py-10 sm:py-20  '>
            <div className='w-2xl border-2 p-6 border-teal-900 rounded-4xl '>
                <h2 className='text-center text-3xl font-bold mb-5 '>Update Profile</h2>
                <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(handleProfileUpdate)}  >
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
                    <fieldset className="fieldset w-full relative">
                        <legend className="fieldset-legend">PhotoURL</legend>
                        <input

                            type="text"
                            className="input w-full "
                            placeholder="Enter Your PhotoUrl"
                             {...register("photoUrl")}
                        />

                    </fieldset>
                    <div className='mt-8 w-full'>
                        <button className='btn bg-teal-600/80 w-full rounded-4xl'>Update</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default UpdateProfilePage;
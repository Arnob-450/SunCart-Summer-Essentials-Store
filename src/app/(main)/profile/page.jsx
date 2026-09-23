'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import userAvater from "@/assets/account-avatar-profile-user.svg";
import Link from 'next/link';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='container mx-auto flex justify-center items-center px-4 py-10 sm:py-20'>
            {isPending ? (
                <p className='text-teal-800 font-semibold'>Loading...</p>
            ) : user ? (
                <div className="card bg-base-100 w-full max-w-md shadow-2xl rounded-2xl">
                    <div className='flex justify-center items-center py-8 sm:py-10 border-b-2'>
                        <figure className='relative w-32 h-32 sm:w-40 sm:h-40 border-4 border-teal-800 rounded-full overflow-hidden'>
                            <Image
                                src={user.image || userAvater}
                                alt={user.name || 'Profile picture'}
                                fill
                                sizes='(max-width: 640px) 128px, 160px'
                                className='object-cover'
                            />
                        </figure>
                    </div>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl sm:text-3xl font-bold mb-2">My Profile</h2>
                        <button className='btn btn-ghost border-2 border-teal-900 text-base sm:text-xl w-full'>
                            Name: {user.name}
                        </button>
                        <button className='btn btn-ghost border-2 border-teal-900 text-base sm:text-xl w-full'>
                            Email: {user.email}
                        </button>
                        <div className="card-actions justify-center mt-5 w-full">
                            <Link href={'profile/updateProfile'}><button className="btn btn-primary w-full sm:w-auto bg-amber-500 text-black">Update Profile</button></Link>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='text-teal-800 font-semibold'>You are not logged in.</p>
            )}
        </div>
    );
};

export default ProfilePage;
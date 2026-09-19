import React from 'react';
import Link from 'next/link';
import { IoSunnyOutline } from 'react-icons/io5';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <IoSunnyOutline className="text-amber-500 mb-4" size={60} />

            <h1 className="text-6xl font-extrabold text-slate-800 mb-2">404</h1>

            <p className="text-slate-500 mb-6">
                Page not found.
            </p>

            <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-none text-white">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
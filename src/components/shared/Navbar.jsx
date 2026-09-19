import Link from 'next/link';
import React from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import NavLink from './NavLink';
import { FaRegUser } from 'react-icons/fa';
const navLink = <>
    <ul className='flex justify-between items-center gap-6'>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about-us">Products</NavLink></li>
    </ul>
</>
const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-l font-semibold">
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/about-us">Products</NavLink></li>
                        </ul>
                    </div>
                    <h2 className="btn btn-ghost text-xl font-bold">
                        <span className='text-amber-500 text-4xl mr-1'><IoSunnyOutline /></span>Sun<span className='text-amber-500 -ml-1'>Cart</span>
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end  flex  items-center gap-3">
                   <Link href={'./profile'} ><div className='p-2 border rounded-full '>
                        <FaRegUser />
                    </div></Link> 
                    <Link href={'./login'} className="btn bg-amber-500">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
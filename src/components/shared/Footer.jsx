import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoSunnyOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className=' container mx-auto'>
            <footer className="footer sm:footer-horizontal bg-cyan-950 p-10 text-white">
                <aside className='flex flex-col'>
                    <h2 className=" flex justify-center items-center text-4xl font-bold text-white">
                        <span className='text-amber-500 text-6xl mr-1'><IoSunnyOutline /></span>Sun<span className='text-amber-500 '>Cart</span>
                    </h2>
                    <p>
                        Summer Essentials, All in One Place.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">support@suncart.com</a>
                    <a className="link link-hover">Dhaka, Bangladesh</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="flex gap-3">
                        <a className="link link-hover"><IoLogoFacebook size={20} /></a>
                        <a className="link link-hover"><IoLogoInstagram size={20} /></a>
                        <a className="link link-hover"><IoLogoTwitter size={20} /></a>
                        <a className="link link-hover"><IoLogoYoutube size={20} /></a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
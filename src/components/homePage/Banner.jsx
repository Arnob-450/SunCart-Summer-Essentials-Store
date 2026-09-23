import banner from '@/assets/Banner.png'
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
         <div className="relative w-full h-[400px] md:h-[500px] rounded-b-2xl overflow-hidden">
        <Image
          src={banner}
          alt="Summer Sale Banner"
          fill
          className="object-cover"
          priority
        />

        <div className='absolute inset-0 flex flex-col justify-center px-20 '>
          <p className= 'animate__animated animate__fadeInDown text-teal-900 text-sm font-semibold tracking-wide'>LIMITED TIME OFFER</p>
          <h2 className='animate__animated animate__fadeInLeft text-4xl md:text-5xl text-teal-950 font-bold' style={{ animationDelay: '0.2s' }}>Summer Sale</h2>
          <h2 className='animate__animated animate__fadeInLeft text-4xl md:text-5xl text-amber-500 font-bold mb-3'  style={{ animationDelay: '0.4s' }}>50% OFF</h2>
          <p className='text-teal-950 mb-5 animate__animated animate__fadeInUp'style={{ animationDelay: '0.6s' }}>
            Stay stylish. Stay cool. Your summer essentials <br className='hidden md:block' />
            are now at unbeatable prices!
          </p>
          <button className='animate__animated animate__zoomIn btn bg-amber-500 hover:bg-amber-600 text-teal-950 border-none rounded-full w-fit px-6 mt-10'>
            Shop Now 
          </button>
        </div>
      </div>
    );
};

export default Banner;
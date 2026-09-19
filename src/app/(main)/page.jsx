import Banner from '@/components/homePage/Banner';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      <Banner></Banner>
      <div className='flex justify-between items-center my-3 px-2 '>
        <div className='text-teal-900'>
          <h2 className='text-3xl font-bold'>Popular Product</h2>
          <p className='font-semibold'>Handpicked favorites for your perfect summer.</p>
        </div>
        <div>
          <Link href={'/product'} className=' btn btn-ghost text-teal-900' >View All<FaArrowRightLong /></Link>
        </div>
      </div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className='flex justify-between items-center '>
              <div> <h2 className="card-title text-teal-950 text-2xl font-semibold ">Card Title</h2></div>
              <div className='flex items-center '><p className='flex gap-2 text-teal-800'><span className='text-yellow-500 flex items-center justify-center'><FaStar /></span>4.5</p></div>
            </div>


            <p className='text-teal-800 font-semibold '>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-between flex items-center mt-5">
              <div className='font-semibold text-teal-950 font-semibold'>$15.00</div>
              <button className="btn btn-primary gap-3 rounded-4xl bg-teal-800">View Details <FaArrowRightLong /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
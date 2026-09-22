import Banner from '@/components/homePage/Banner';
import ProductCard from '@/components/homePage/ProductCard';
import SummerCareTips from '@/components/homePage/SummerTips';
import TopBrands from '@/components/homePage/TopBrands';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';

const productsFetch = async () => {
  const res = await fetch(`http://localhost:3000/data.json`);
  const data = await res.json();
  return data;
}

const Home = async () => {
  const products = await productsFetch();
  const popularProduct = products.slice(0, 3);
  console.log(popularProduct, "DATA")
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
      <div className=' grid grid-cols-3 justify-center gap-15 items-stretch mb-6'>
        {
          popularProduct.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            )
          })
        }
      </div >
      <div className='flex justify-between mb-5 '>
        <div>
          <SummerCareTips></SummerCareTips>
        </div>
        <div>
          <TopBrands></TopBrands>
        </div>
      </div>


    </div>
  );
};

export default Home;
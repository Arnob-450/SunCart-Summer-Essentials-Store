import Banner from '@/components/homePage/Banner';
import ProductCard from '@/components/homePage/ProductCard';
import SummerCareTips from '@/components/homePage/SummerTips';
import TopBrands from '@/components/homePage/TopBrands';
import { getProducts } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';



const Home = async () => {
  const products = await getProducts();
  const popularProduct = products.slice(0, 3);
  console.log(popularProduct, "DATA")
  return (
    <div className='container mx-auto px-4'>
      <Banner></Banner>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center my-5 px-5 border-l-4 border-amber-500 gap-3'>
        <div className='text-teal-900'>
          <h2 className='text-3xl font-bold'>Popular Product</h2>
          <p className='font-semibold'>Handpicked favorites for your perfect summer.</p>
        </div>
        <div>
          <Link href={'/product'} className=' btn btn-ghost text-teal-900' >View All<FaArrowRightLong /></Link>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:gap-15 items-stretch mb-6 '>
        {
          popularProduct.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            )
          })
        }
      </div >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5 '>
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
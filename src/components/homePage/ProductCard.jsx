import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';

const ProductCard = ({product}) => {
    return (
        <div>
              <div key={product.id} className="card bg-base-100 w-full shadow-sm rounded-2xl  flex flex-col h-full">
                <figure className='relative w-full h-64'>
                  <Image
                    src={product.image}
                    fill
                    alt={product.name}
                  >
                  </Image>
                </figure>
                <div className="card-body flex flex-col flex-1">
                  <div className='flex justify-between items-center '>
                    <div> <h2 className="card-title text-teal-950 text-xl font-bold ">{product.name}</h2></div>
                    <div className='flex items-center '><p className='flex gap-2 text-teal-800'><span className='text-yellow-500 flex items-center justify-center'><FaStar /></span>{product.rating}</p></div>
                  </div>


                  <p className='text-teal-800 font-semibold '>{product.description}</p>
                  <div className="card-actions justify-between flex items-center mt-auto pt-5">
                    <div className='font-semibold text-teal-950 '>${product.price.toFixed(2)}</div>
                    <button className="btn btn-primary gap-3 rounded-4xl bg-teal-800">View Details <FaArrowRightLong /></button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ProductCard;
import { getProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const products = await getProducts();
    const product = products.find((item) => String(item.id) === id)
    console.log(product);
    const inStock = product.stock > 0;
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
                <figure className='relative w-full h-96 rounded-2xl overflow-hidden shadow-sm'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        priority
                    />
                </figure>

                <div className='flex flex-col'>
                  
                    <div className='flex items-center gap-2 mb-2'>
                        <span className='badge badge-outline text-teal-700 border-teal-700'>
                            {product.category}
                        </span>
                        <span className='badge badge-ghost text-teal-800 font-semibold'>
                            {product.brand}
                        </span>
                    </div>

                    <h1 className='text-3xl font-bold text-teal-950'>{product.name}</h1>

                 
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-yellow-500 flex items-center'>
                            <FaStar />
                        </span>
                        <span className='text-teal-800 font-semibold'>{product.rating}</span>
                        <span className='text-teal-500 text-sm'>({product.rating} / 5)</span>
                    </div>

               
                    <p className='text-teal-800 font-medium mt-4 leading-relaxed'>
                        {product.description}
                    </p>

                    <div className='text-3xl font-bold text-teal-950 mt-6'>
                        ${product.price.toFixed(2)}
                    </div>

                  
                    <div className='mt-3'>
                        {inStock ? (
                            <span className='badge badge-success text-white font-semibold'>
                                In Stock ({product.stock} available)
                            </span>
                        ) : (
                            <span className='badge badge-error text-white font-semibold'>
                                Out of Stock
                            </span>
                        )}
                    </div>
                    <div className='flex items-center gap-4 mt-8'>
                        <button
                            disabled={!inStock}
                            className='btn btn-primary gap-3 rounded-4xl bg-teal-800 px-6 disabled:bg-teal-300 disabled:cursor-not-allowed'
                        >
                            {inStock ? 'Add to Cart' : 'Unavailable'}
                        </button>
                        <Link href='/' className='btn btn-ghost border-teal-900 rounded-4xl text-teal-900 gap-2'>
                            Back to products <FaArrowRightLong />
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
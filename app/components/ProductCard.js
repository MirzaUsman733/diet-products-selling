import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = () => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="p-8 rounded-t-lg" src="https://placekitten.com/300/200" alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                       
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <Link href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

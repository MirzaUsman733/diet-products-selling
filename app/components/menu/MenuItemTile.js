import AddToCartButton from "@/app/components/menu/AddToCartButton";
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, productDetail, direction, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="p-4 md:p-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="">
        <Link href="#">
          <img className="p-4  rounded-t-lg" src="https://placekitten.com/300/200" alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <Link href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
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
            <span className="text-3xl mt-5 font-bold text-gray-900 dark:text-white">${basePrice}</span>
            <AddToCartButton
              image={image}
              hasSizesOrExtras={hasSizesOrExtras}
              onClick={onAddToCart}
              basePrice={basePrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
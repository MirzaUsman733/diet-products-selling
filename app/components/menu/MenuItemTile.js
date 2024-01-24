import React from 'react';
import AddToCartButton from "@/app/components/menu/AddToCartButton";
import Carousel from '@/app/components/homePageComponents/CustomCarousel';

export default function MenuItemTile({ menuItems, onAddToCart }) {
  console.log("Menu Items" ,menuItems)
  const carouselItems = menuItems?.map((item, index) => {
    const { image, name, basePrice, productDetail, direction, sizes, extraIngredientPrices } = item;
    return {
      img: image,
      content: name,
      price: basePrice,
    };
  });
  console.log(menuItems)
  return (
    <div>
      <Carousel items={carouselItems} />

     
    </div>
  );
}

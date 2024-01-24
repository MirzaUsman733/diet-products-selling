'use client';
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import MenuItem from "@/app/components/menu/MenuItem";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="container-xl mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
       <div className="text-center md:text-left">
      <div className="text-center mb-4 container-xl mx-auto">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Sellers'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
      </div>
    </section>
  );
}
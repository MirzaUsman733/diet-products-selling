'use client';
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import MenuItem from "@/app/components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
  }, []);
  return (
    <section className="mt-8 flex flex-col justify-center items-center container-xl mx-auto max-w-[500px] sm:max-w-[600px] md:max-w-[730px] mds:max-w-[880px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center mt-5">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 mds:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-6 mb-12">
            {menuItems.filter(item => item.category === c._id).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
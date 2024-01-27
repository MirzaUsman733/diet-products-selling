'use client';
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import MenuItem from "@/app/components/menu/MenuItem";
import {useEffect, useState} from "react";

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
    <section className="mt-8 container-xl mx-auto md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center mt-5">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-6 mb-12">
            {menuItems.filter(item => item.category === c._id).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
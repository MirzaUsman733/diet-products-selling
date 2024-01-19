import Plus from "@/app/components/icons/Plus";
import Trash from "@/app/components/icons/Trash";
import EditableImage from "@/app/components/layout/EditableImage";
import MenuItemPriceProps from "@/app/components/layout/MenuItemPriceProps";
import { useEffect, useState } from "react";

export default function MenuItemForm({ onSubmit, menuItem }) {
  // const [image, setImage] = useState(menuItem?.image || '');
  const [name, setName] = useState(menuItem?.name || '');
  const [description, setDescription] = useState(menuItem?.description || '');
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [category, setCategory] = useState(menuItem?.category || '');
  const [categories, setCategories] = useState([]);
  const [
    extraIngredientPrices,
    setExtraIngredientPrices,
  ] = useState(menuItem?.extraIngredientPrices || []);

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={ev =>
        onSubmit(ev, { name, description, basePrice, sizes, extraIngredientPrices, category,
        })
      }
      className="mt-8 max-w-2xl mx-auto"
    >
      <div className="md:grid items-start gap-4 grid-cols-[1fr,3fr]">
        <div>
          {/* <EditableImage link={image} setLink={setImage} /> */}
        </div>
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700">Item name</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={ev => setCategory(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            {categories?.length > 0 && categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
          <label className="block text-sm font-medium text-gray-700">Base price</label>
          <input
            type="text"
            value={basePrice}
            onChange={ev => setBasePrice(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <MenuItemPriceProps name={'Sizes'}
            addLabel={'Add item size'}
            props={sizes}
            setProps={setSizes} />
          <MenuItemPriceProps name={'Extra ingredients'}
            addLabel={'Add ingredients prices'}
            props={extraIngredientPrices}
            setProps={setExtraIngredientPrices} />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

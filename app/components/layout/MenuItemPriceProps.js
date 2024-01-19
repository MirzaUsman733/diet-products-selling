import ChevronDown from "@/app/components/icons/ChevronDown";
import ChevronUp from "@/app/components/icons/ChevronUp";
import Plus from "@/app/components/icons/Plus";
import Trash from "@/app/components/icons/Trash";
import { useState } from "react";

export default function MenuItemPriceProps({ name, addLabel, props, setProps }) {

  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps(oldProps => {
      return [...oldProps, { name: '', price: 0 }];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps(prevSizes => {
      const newSizes = [...prevSizes];
      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    setProps(prev => prev.filter((v, index) => index !== indexToRemove));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="inline-flex p-1 border-0 justify-start"
        type="button">
        {isOpen && (
          <ChevronUp />
        )}
        {!isOpen && (
          <ChevronDown />
        )}
        <span>{name}</span>
        <span>({props?.length})</span>
      </button>
      <div className={isOpen ? 'block' : 'hidden'}>
        {props?.length > 0 && props.map((size, index) => (
          <div key={index} className="flex items-end gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Size name"
                value={size.name}
                onChange={ev => editProp(ev, index, 'name')}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Extra price</label>
              <input
                type="text"
                placeholder="Extra price"
                value={size.price}
                onChange={ev => editProp(ev, index, 'price')}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => removeProp(index)}
                className="bg-white mb-2 px-2"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
        <div className="items-center flex justify-center">
        <button
          type="button"
          onClick={addProp}
          className="bg-white items-center mt-5 flex px-5 py-2 rounded-2xl justify-center"
        >
          <Plus className="w-5 h-4 " />
          <span>{addLabel}</span>
        </button>
        </div>
      </div>
    </div>
  );
}

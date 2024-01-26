import {CartContext} from "@/app/contexts/AppContext";
import MenuItemTile from "@/app/components/menu/MenuItemTile";
import Image from "next/image";
import {useContext, useState} from "react";

// import FlyingButton from "react-flying-item";
import toast from "react-hot-toast";
import Carousel from '@/app/components/homePageComponents/CustomCarousel'

export default function MenuItem(menuItem) {
  const {
    image, name, productDetail, direction ,basePrice,
    sizes, extraIngredientPrices, description,
  } = menuItem;
  const [
    selectedSize, setSelectedSize
  ] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const {addToCart} = useContext(CartContext);

  async function handleAddToCartButtonClick() {
    console.log('add to cart');
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions) {
      setShowPopup(true);
      return;
    }
    addToCart(menuItem, selectedSize, selectedExtras);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('hiding popup');
    setShowPopup(false);
  }
  function handleExtraThingClick(ev, extraThing) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras(prev => [...prev, extraThing]);
    } else {
      setSelectedExtras(prev => {
        return prev.filter(e => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }


  const items = [
    {
      img: "https://placekitten.com/300/200",
      content: "Item 1 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/301/200",
      content: "Item 2 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/302/200",
      content: "Item 3 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/303/200",
      content: "Item 4 Content",
      price: 100,
    },
    {
      img: "https://placekitten.com/304/200",
      content: "Item 5 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/305/200",
      content: "Item 6 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/306/200",
      content: "Item 7 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/307/200",
      content: "Item 8 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/308/200",
      content: "Item 9 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/309/200",
      content: "Item 10 Content",
      price: 100,

    },
    {
      img: "https://placekitten.com/310/200",
      content: "Item 11 Content",
      price: 100,

    },
    // {
    //   img: "https://placekitten.com/311/200",
    //   content: "Item 12 Content",
    // },
  ];


  return (
    <>
      
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div
            onClick={ev => ev.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-4xl">
            <div
              className="overflow-y-scroll p-2"
              style={{maxHeight:'calc(100vh - 100px)'}}>
                <Carousel items={items} />
              {/* <Image
                src={image}
                alt={name}
                width={300} height={200}
                className="mx-auto" /> */}
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {productDetail}
              </p>
              <p className="text-center text-gray-500 text-sm mb-2">
                {direction}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {sizes?.length > 0 && (
                <div className="py-2">
                  <h3 className="text-center text-gray-700">Pick your size</h3>
                  {sizes.map(size => (
                    <label
                      key={size._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1">
                      <input
                        type="radio"
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                        name="size"/>
                      {size.name} ${basePrice + size.price}
                    </label>
                  ))}
                </div>
              )}
              {extraIngredientPrices?.length > 0 && (
                <div className="py-2">
                  <h3 className="text-center text-gray-700">Any extras?</h3>
                  {extraIngredientPrices.map(extraThing => (
                    <label
                      key={extraThing._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1">
                      <input
                        type="checkbox"
                        onChange={ev => handleExtraThingClick(ev, extraThing)}
                        checked={selectedExtras.map(e => e._id).includes(extraThing._id)}
                        name={extraThing.name} />
                      {extraThing.name} +${extraThing.price}
                    </label>
                  ))}
                </div>
              )}
              <button
                targettop={'5%'}
                targetleft={'95%'}
                src={image}>
                <div className="primary sticky bottom-2"
                     onClick={handleAddToCartButtonClick}>
                  Add to cart ${selectedPrice}
                </div>
              </button>
              <button
                className="mt-2"
                onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile
        onAddToCart={handleAddToCartButtonClick}
        {...menuItem} />
    </>
  );
}
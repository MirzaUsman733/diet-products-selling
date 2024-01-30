import Plus from "@/app/components/icons/Plus";
import Trash from "@/app/components/icons/Trash";
import EditableImage from "@/app/components/layout/EditableImage";
import MenuItemPriceProps from "@/app/components/layout/MenuItemPriceProps";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [direction, setDirection] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState([]);

  const fetchCategories = () => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categories => setCategories(categories))
      .catch(error => console.error("Error fetching categories:", error));
  };
  useEffect(() => {
    if (menuItem) {
      setImage(menuItem.image || '');
      setName(menuItem.name || '');
      setProductDetail(menuItem.productDetail || '');
      setDirection(menuItem.direction || '');
      setBasePrice(menuItem.basePrice || '');
      setSizes(menuItem.sizes || []);
      setCategory(menuItem.category || '');
      setDescription(menuItem.description || '');
      setExtraIngredientPrices(menuItem.extraIngredientPrices || []);
    }
  }, [menuItem]);
  useEffect(() => {
    fetchCategories();
  }, [menuItem]);
  console.log("Menu Item", menuItem?.image);
  return (
    <form
      onSubmit={ev =>
        onSubmit(ev, {
          name, image, productDetail, direction, basePrice, sizes, extraIngredientPrices, category, description
        }, console.log(description, image))
      }
      className="mt-8 max-w-full mx-auto"
    >
      <div className="grid items-start gap-4 md:grid-cols-[5fr,5fr]">
        {/* <div>
          <EditableImage link={image} setLink={setImage} />
        </div> */}
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700">Item name</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="mt-2 block text-sm font-medium text-gray-700">Product Detail</label>
          <input
            type="text"
            value={productDetail}
            onChange={ev => setProductDetail(ev.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="mt-2 block text-sm font-medium text-gray-700">Direction</label>
          <input
            type="text"
            value={direction}
            onChange={ev => setDirection(ev.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
          <div className="flex flex-row justify-between gap-5 w-full my-2">
            <div className="w-full">
              <label className="mt-2 block text-sm font-medium text-gray-700">Category</label>
              <select
                value={category}
                onChange={ev => setCategory(ev.target.value)}
                className="mt-2 p-2 pb-3 border border-gray-300 rounded-md cursor-pointer w-full"
              >
                {categories?.length > 0 && categories.map(c => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label className="mt-2 block text-sm font-medium text-gray-700">Base price</label>
              <input
                type="text"
                value={basePrice}
                onChange={ev => setBasePrice(ev.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <MenuItemPriceProps name={'Sizes'}
            addLabel={'Add item size'}
            props={sizes}
            setProps={setSizes} />
          <MenuItemPriceProps name={'Extra ingredients'}
            addLabel={'Add ingredients prices'}
            props={extraIngredientPrices}
            setProps={setExtraIngredientPrices} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
          <Editor
            apiKey="0ww6aa6ikkaan6ba6quxckauho9cnonhzczagghofh5md40x"
            initialValue={menuItem?.description || ''}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: '200px',
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'wordcount', 'help',
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help ',
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            }}
            onEditorChange={(content, editor) => setDescription(content)}
          />
          <div>
            <EditableImage link={image} setLink={setImage} />
          </div>
        </div>
      </div>
      <div className="">

        <div className="w-full md:w-1/2">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white w-full p-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

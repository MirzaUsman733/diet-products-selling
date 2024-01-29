import Plus from "@/app/components/icons/Plus";
import Trash from "@/app/components/icons/Trash";
import EditableImage from "@/app/components/layout/EditableImage";
import MenuItemPriceProps from "@/app/components/layout/MenuItemPriceProps";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || '');
  const [name, setName] = useState(menuItem?.name || '');
  const [productDetail, setproductDetail] = useState(menuItem?.productDetail || '');
  const [direction, setDirection] = useState(menuItem?.direction || '');
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [category, setCategory] = useState(menuItem?.category || '');
  const [description, setDescription] = useState(menuItem?.editorContent || '');
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
        onSubmit(ev, {
          name, productDetail, direction, basePrice, sizes, extraIngredientPrices, category, description
        }, console.log(description))
      }
      className="mt-8 max-w-2xl mx-auto"
    >
      <div className="md:grid items-start gap-4 grid-cols-[1fr,3fr]">
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700">Item name</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="block text-sm font-medium text-gray-700">Product Detail</label>
          <input
            type="text"
            value={productDetail}
            onChange={ev => setproductDetail(ev.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label className="block text-sm font-medium text-gray-700">Direction</label>
          <input
            type="text"
            value={direction}
            onChange={ev => setDirection(ev.target.value)}
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
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Editor
            apiKey="0ww6aa6ikkaan6ba6quxckauho9cnonhzczagghofh5md40x"
            initialValue={menuItem?.description || ''}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            }}
            onEditorChange={(content, editor) => setDescription(content)}
          />
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

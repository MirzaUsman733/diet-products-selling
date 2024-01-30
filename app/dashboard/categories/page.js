'use client';
import DeleteButton from "@/app/components/DeleteButton";
import UserTabs from "@/app/components/layout/UserTabs";
import { useEffect, useState } from "react";
import { useProfile } from "@/app/components/UseProfile";
import toast from "react-hot-toast";
import TextField from '@mui/material/TextField';
export default function CategoriesPage() {

  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();
  const [editedCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      });
    });
  }

  async function handleCategorySubmit(ev) {
    ev.preventDefault();
    const creationPromise = new Promise(async (resolve, reject) => {
      const data = { name: categoryName };
      if (editedCategory) {
        data._id = editedCategory._id;
      }
      const response = await fetch('/api/categories', {
        method: editedCategory ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setCategoryName('');
      fetchCategories();
      setEditedCategory(null);
      if (response.ok)
        resolve();
      else
        reject();
    });
    await toast.promise(creationPromise, {
      loading: editedCategory
        ? 'Updating category...'
        : 'Creating your new category...',
      success: editedCategory ? 'Category updated' : 'Category created',
      error: 'Error, sorry...',
    });
  }

  async function handleDeleteClick(_id) {
    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/categories?_id=' + _id, {
        method: 'DELETE',
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error',
    });

    fetchCategories();
  }

  if (profileLoading) {
    return 'Loading user info...';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <form className="mt-8" onSubmit={handleCategorySubmit}>
        <div className="flex flex-col md:flex-row md:items-end gap-2">
          <div className="flex-grow">
            <label className="block text-xl font-bold mb-2">
              {editedCategory ? 'Update category' : 'New category name'}
              {editedCategory && (
                <>: <b>{editedCategory.name}</b></>
              )}
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={ev => setCategoryName(ev.target.value)}
              className="block py-2 w-full rounded-md border border-gray-300 shadow-sm focus:cursor-text ps-2"
            />
          </div>
          <div className="flex gap-2 items-center">
            <button className="border border-primary bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600" type="submit">
              {editedCategory ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditedCategory(null);
                setCategoryName('');
              }}
              className="border rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="mt-8 text-sm text-gray-500">Existing categories</h2>
        {categories?.length > 0 && categories.map(c => (
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex justify-between items-center mb-1">
            <span className="flex-grow">{c.name}</span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setEditedCategory(c);
                  setCategoryName(c.name);
                }}
                className="border rounded-md px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </button>
              <DeleteButton
                label="Delete"
                onDelete={() => handleDeleteClick(c._id)} />
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}

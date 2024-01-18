'use client';
import DeleteButton from "@/app/components/DeleteButton";
import UserTabs from "@/app/components/layout/UserTabs";
import {useEffect, useState} from "react";
// import {useProfile} from "@/app/components/UseProfile";
import toast from "react-hot-toast";

export default function CategoriesPage() {

  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  // const {loading:profileLoading, data:profileData} = useProfile();
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

  // async function handleCategorySubmit(ev) {
  //   ev.preventDefault();
  //   const creationPromise = new Promise(async (resolve, reject) => {
  //     const data = {name:categoryName};
  //     if (editedCategory) {
  //       data._id = editedCategory._id;
  //     }
  //     const response = await fetch('/api/categories', {
  //       method: editedCategory ? 'PUT' : 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     setCategoryName('');
  //     fetchCategories();
  //     setEditedCategory(null);
  //     if (response.ok)
  //       resolve();
  //     else
  //       reject();
  //   });
  //   await toast.promise(creationPromise, {
  //     loading: editedCategory
  //                ? 'Updating category...'
  //                : 'Creating your new category...',
  //     success: editedCategory ? 'Category updated' : 'Category created',
  //     error: 'Error, sorry...',
  //   });
  // }
  async function handleCategorySubmit(ev) {
    ev.preventDefault();

    try {
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

      if (response.ok) {
        await toast.success(editedCategory ? 'Category updated' : 'Category created');
      } else {
        const responseData = await response.json();
        const errorMessage = responseData?.error || 'Error, sorry...';
        await toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error in handleCategorySubmit:", error);
      await toast.error('Unexpected error occurred');
    }
  }
  async function handleDeleteClick(_id) {
    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/categories?_id='+_id, {
        method: 'DELETE',
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      // loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error',
    });

    fetchCategories();
  }

  // if (profileLoading) {
  //   return 'Loading user info...';
  // }

  // if (!profileData.admin) {
  //   return 'Not an admin';
  // }

  return (
     <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <form className="mt-8" onSubmit={handleCategorySubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex-grow">
            <label className="block">
              {editedCategory ? 'Update category' : 'New category name'}
              {editedCategory && (
                <>: <b>{editedCategory.name}</b></>
              )}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={categoryName}
                onChange={ev => setCategoryName(ev.target.value)}
                className="w-full border rounded py-2 px-3"
              />
              <button
                className="bg-green-500 text-white rounded-xl py-2 px-4"
                type="submit"
              >
                {editedCategory ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
          {editedCategory && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setEditedCategory(null);
                  setCategoryName('');
                }}
                className="bg-gray-300 py-2 px-4 rounded-xl"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
      <div>
        <h2 className="mt-8 text-sm text-gray-500">Existing categories</h2>
        {categories?.length > 0 && categories.map(c => (
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center"
          >
            <div className="flex-grow">{c.name}</div>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setEditedCategory(c);
                  setCategoryName(c.name);
                }}
                className="bg-blue-500 text-white py-1 px-3 rounded-xl"
              >
                Edit
              </button>
              <DeleteButton
                label="Delete"
                onDelete={() => handleDeleteClick(c._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
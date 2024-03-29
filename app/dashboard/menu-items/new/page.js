'use client';
import Left from "@/app/components/icons/Left";
import Right from "@/app/components/icons/Right";
import EditableImage from "@/app/components/layout/EditableImage";
import MenuItemForm from "@/app/components/layout/MenuItemForm";
import UserTabs from "@/app/components/layout/UserTabs";
import { useProfile } from "@/app/components/UseProfile";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewMenuItemPage() {

  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/menu-items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving this tasty item',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/dashboard/menu-items');
  }

  if (loading) {
    return 'Loading user info...';
  }

  // if (!data.admin) {
  //   return 'Not an admin.';
  // }

  return (
    <section className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8">
      
      <div className="mt-8">
        <Link href={'/dashboard/menu-items'} className="button w-20">
          <Left />
        </Link>
        <span>Show all menu items</span>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link
        className={path === '/profile' ? 'active' : ''}
        href={'/profile'}
      >
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href={'/dashboard/categories'}
            className={path === '/dashboard/categories' ? 'active' : ''}
          >
            Categories
          </Link>
          <Link
            href={'/dashboard/menu-items'}
            className={path.includes('/dashboard/menu-items') ? 'active' : ''}
          >
            Menu Items
          </Link>
          <Link
            className={path.includes('/dashboard/users') ? 'active' : ''}
            href={'/dashboard/users'}
          >
            Users
          </Link>
        </>
      )}
      <Link
        className={path === '/dashboard/orders' ? 'active' : ''}
        href={'/dashboard/orders'}
      >
        Orders
      </Link>
    </div>
  );
}
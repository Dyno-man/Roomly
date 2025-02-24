'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import  clsx  from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard' },
  {
    name: 'View Chores',
    href: '/dashboard/view_chores',
  },
  {
    name: 'Create Chores',
    href: '/dashboard/create_chores'
  },
  { name: 'Roomates', href: '/dashboard/roomates'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((links) => {
        return (
          <Link
            key={links.name}
            href={links.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-md font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600' : pathname=== links.href
              },
            )}
          >
          {links.name}</Link>
        );
      })}
    </>
  );
}

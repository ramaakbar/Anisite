import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Drawer from '../Drawer';
import NavList from './NavList';

export type NavItemChild = {
  name: string;
  href?: any;
};
export type NavItems = {
  name: string;
  href?: any;
  items?: NavItemChild[];
};

const navItems: NavItems[] = [
  {
    name: 'Browse',
    items: [
      {
        name: 'Anime',
        href: '/browse/anime',
      },
      {
        name: 'Manga',
        href: '/browse/manga',
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Register',
    href: '/register',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-gray-50 p-4 fixed z-10 w-full top-0 '>
      <Drawer navItems={navItems} open={open} setOpen={setOpen} />
      <nav className='flex mx-auto max-w-6xl justify-between items-center '>
        <Link href='/'>
          <a className='font-bold text-2xl tracking-wide uppercase select-none'>
            Anilist
          </a>
        </Link>
        <div className='space-x-5 hidden md:block'>
          <NavList navItems={navItems} />
        </div>
        <div className='md:hidden p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-500 rounded-md transition duration-200 ease-in'>
          <MenuIcon
            className='h-6 w-6 '
            aria-hidden='true'
            onClick={() => setOpen(true)}
          />
        </div>
      </nav>
    </div>
  );
}

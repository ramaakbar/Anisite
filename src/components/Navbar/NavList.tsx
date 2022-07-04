import Link from 'next/link';
import { NavItems } from '.';
import NavPopup from './NavPopup';

export default function NavList({ navItems }: { navItems: NavItems[] }) {
  return (
    <div className='space-x-5 hidden md:block '>
      {navItems.map((item) =>
        item.items ? (
          <NavPopup navItems={item.items} key={item.name}>
            {item.name}
          </NavPopup>
        ) : (
          <Link href={item.href} key={item.name}>
            {item.name === 'Register' ? (
              <a className='bg-sky-500 font-semibold hover:bg-sky-600 text-white rounded-md px-4 py-2  transition duration-300'>
                {item.name}
              </a>
            ) : (
              <a className='text-gray-700 hover:text-gray-900 transition duration-300'>
                {item.name}
              </a>
            )}
          </Link>
        )
      )}
    </div>
  );
}

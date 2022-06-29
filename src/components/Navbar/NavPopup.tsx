import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { NavItemChild, NavItems } from '.';

export default function NavPopup({
  navItems,
  children,
}: {
  children: React.ReactNode;
  navItems: NavItemChild[];
}) {
  return (
    <Popover className='relative inline-flex'>
      {({ open }) => (
        <>
          <Popover.Button
            className={
              'inline-flex items-center text-gray-700 hover:text-gray-900 transition duration-300 '
            }
          >
            <span className=''>{children}</span>
            <ChevronDownIcon className='h-5 w-5' />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              className={
                'absolute right-0 mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none p-2 z-10'
              }
            >
              <div className='flex flex-col'>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a className='p-2 hover:bg-gray-100 rounded-md'>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

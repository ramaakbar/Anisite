import Link from 'next/link';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Navbar() {
  return (
    <div className='bg-white p-4'>
      <nav className='flex mx-auto container justify-between items-center'>
        <Link href=''>
          <a className='font-bold text-2xl tracking-wide uppercase select-none'>
            Anilist
          </a>
        </Link>
        <div className='space-x-5 hidden md:block'>
          <Popover className='relative inline-flex'>
            {({ open }) => (
              <>
                <Popover.Button className={'inline-flex items-center'}>
                  <span>Browse</span>
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
                      'absolute right-0 mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 z-10'
                    }
                  >
                    <div className='flex flex-col'>
                      <Link href='#'>
                        <a className='p-2 hover:bg-gray-100 rounded-md'>
                          Anime
                        </a>
                      </Link>
                      <Link href='#'>
                        <a className='p-2 hover:bg-gray-100 rounded-md'>
                          Manga
                        </a>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link href=''>
            <a>About</a>
          </Link>
          <Link href=''>
            <a>Login</a>
          </Link>
          <Link href=''>
            <a>Sign Up</a>
          </Link>
        </div>
        <div className='md:hidden p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-500 rounded-md transition duration-200 ease-in'>
          <MenuIcon className='h-6 w-6 ' aria-hidden='true' />
        </div>
      </nav>
    </div>
  );
}

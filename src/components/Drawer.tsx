import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function Drawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/30'></div>
        </Transition.Child>
        <div className='fixed inset-0 flex z-40'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col'>
              <div className='px-4 pt-5 pb-2 flex flex-col w-full'>
                <div className='flex items-center justify-between'>
                  <h1
                    className='font-bold text-2xl tracking-wide uppercase select-none cursor-pointer'
                    onClick={() => {
                      setOpen(false);
                      router.push(`/`);
                    }}
                  >
                    Anilist
                  </h1>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center text-gray-400 p-2 hover:bg-gray-100 hover:text-gray-500 rounded-md transition duration-200 ease-in'
                    onClick={() => setOpen(false)}
                  >
                    <XIcon className='h-6 w-6' />
                  </button>
                </div>
                <div>
                  <h3>Browse</h3>
                  <ul>
                    <li
                      onClick={() => {
                        setOpen(false);
                        router.push(`/browse/anime`);
                      }}
                    >
                      Anime
                    </li>
                    <li>Manga</li>
                  </ul>
                </div>
                <div>About</div>
                <div>Login</div>
                <div>Sign Up</div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

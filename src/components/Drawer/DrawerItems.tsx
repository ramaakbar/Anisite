import { useRouter } from 'next/router';
import { NavItems } from '../Navbar';

export default function DrawerItems({
  navItems,
  setOpen,
}: {
  navItems: NavItems[];
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div className='px-2'>
      {navItems.map((nav) =>
        nav.items ? (
          <div className='' key={nav.name}>
            <h3 className='text-lg font-medium px-2'>{nav.name}</h3>
            <ul className='text-gray-800 '>
              {nav.items.map((it) => (
                <li
                  onClick={() => {
                    setOpen(false);
                    router.push(it.href);
                  }}
                  className='p-2 hover:bg-gray-100 rounded-md transition duration-200 ease-in cursor-pointer'
                  key={it.name}
                >
                  {it.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p
            className='text-lg font-medium block text-gray-800 p-2 hover:bg-gray-100 rounded-md transition duration-200 ease-in cursor-pointer'
            onClick={() => {
              setOpen(false);
              router.push(nav.href);
            }}
          >
            {nav.name}
          </p>
        )
      )}
    </div>
  );
}

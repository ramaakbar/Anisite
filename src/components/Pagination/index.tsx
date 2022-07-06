import { AnimeRes } from '@/models/Anime';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  data?: AnimeRes;
};

export default function Pagination({ page, setPage, data }: PaginationProps) {
  return (
    <>
      <div className='sm:flex justify-between items-center hidden '>
        <div className='text-gray-700'>
          <p>
            Showing <span className='font-medium'> {25 * (page - 1) + 1}</span>{' '}
            to <span className='font-medium'> {25 * page}</span> of{' '}
            <span className='font-medium'>{data?.pagination?.items.total}</span>
            {' results'}
          </p>
        </div>
        <div className='flex space-x-2 text-gray-700'>
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className={`rounded-md border p-2 flex items-center ${
              page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <ChevronLeftIcon className='w-5 h-5' /> Prev
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={data?.pagination?.has_next_page === false}
            className={`rounded-md border p-2 flex items-center ${
              data?.pagination?.has_next_page === false
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }`}
          >
            Next <ChevronRightIcon className='w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center text-gray-700 sm:hidden'>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className={`rounded-md border p-2 flex items-center ${
            page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <ChevronLeftIcon className='w-5 h-5' /> Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.pagination?.has_next_page === false}
          className={`rounded-md border p-2 flex items-center ${
            page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          Next <ChevronRightIcon className='w-5 h-5' />
        </button>
      </div>
    </>
  );
}

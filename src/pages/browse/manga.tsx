import MangaList from '@/components/ItemList';
import LoadingCard from '@/components/LoadingCard';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import { useMangasData } from '@/hooks/useMangasData';
import { useEffect, useState } from 'react';

export default function BrowseManga() {
  const [page, setPage] = useState(1);
  const { data, status, error, isFetching } = useMangasData(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='max-w-6xl mx-auto space-y-5'>
          <h2 className='text-3xl'>All manga list</h2>
          {status === 'loading' || isFetching ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
              {[...Array(25)].map((e, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : status === 'error' ? (
            <div>{error.message}</div>
          ) : (
            <MangaList animes={data!.data} />
          )}
          <Pagination page={page} setPage={setPage} data={data} />
        </div>
      </div>
    </div>
  );
}

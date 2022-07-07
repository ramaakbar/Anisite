import AnimeList from '@/components/ItemList';
import Navbar from '@/components/Navbar';
import { AnimeRes } from '@/models/Anime';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { getTopAnimes, useAnimesData } from '@/hooks/useAnimesData';
import LoadingCard from '@/components/LoadingCard';

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       topAnimes: await getTopAnimes(1),
//     },
//     revalidate: 4000,
//   };
// };

export default function BrowseAnimes() {
  const [page, setPage] = useState(1);
  const { data, status, error, isFetching } = useAnimesData(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='max-w-6xl mx-auto space-y-5'>
          <h2 className='text-3xl'>All anime list</h2>
          {status === 'loading' || isFetching ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
              {[...Array(25)].map((e, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : status === 'error' ? (
            <div>{error.message}</div>
          ) : (
            <AnimeList animes={data!.data} />
          )}
          <Pagination page={page} setPage={setPage} data={data} />
        </div>
      </div>
    </div>
  );
}

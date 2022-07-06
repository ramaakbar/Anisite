import AnimeList from '@/components/ItemList';
import Navbar from '@/components/Navbar';
import { AnimeRes } from '@/models/Anime';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Pagination from '@/components/Pagination';
import { useAnimesData } from '@/hooks/useAnimesData';
import { getTopAnimes } from '@/services';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      topAnimes: await getTopAnimes(1),
    },
    revalidate: 4000,
  };
};

export default function BrowseAnimes({ topAnimes }: { topAnimes: AnimeRes }) {
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
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {[...Array(25)].map((e, i) => (
                <div className='w-full h-full space-y-2 animate-pulse' key={i}>
                  <div className='relative aspect-[2/3] rounded-md overflow-hidden bg-slate-300'></div>
                </div>
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

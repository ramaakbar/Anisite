import AnimeList from '@/components/ItemList';
import Navbar from '@/components/Navbar';
import { Anime, AnimeRes } from '@/models/Anime';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { useQuery } from 'react-query';

const getTopAnimes = (page: number): Promise<AnimeRes> =>
  fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`).then((res) =>
    res.json()
  );

export const getStaticProps: GetStaticProps = async () => {
  // const test = await topAnimes();

  return {
    props: {
      topAnimes: await getTopAnimes(1),
    },
    revalidate: 4000,
  };
};

export default function BrowseAnimes({ topAnimes }: { topAnimes: AnimeRes }) {
  const [page, setPage] = useState(1);
  const { data, status, error, isFetching } = useQuery<AnimeRes, Error>(
    ['animes', page],
    () => getTopAnimes(page),
    {
      initialData: topAnimes,
      keepPreviousData: true,
    }
  );

  const dummy = 25;

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='max-w-6xl mx-auto space-y-5'>
          <h2 className='text-3xl'>All anime list</h2>
          {status === 'loading' && isFetching ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {[...Array(25)].map((e, i) => (
                <div className='w-full h-full space-y-2 cursor-pointer' key={i}>
                  <div className='relative aspect-[2/3] rounded-md overflow-hidden bg-slate-300'></div>
                </div>
              ))}
            </div>
          ) : status === 'error' ? (
            <div>{error.message}</div>
          ) : (
            <AnimeList animes={data!.data} />
          )}
          <div>
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            >
              prev
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={data?.pagination?.has_next_page === false}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

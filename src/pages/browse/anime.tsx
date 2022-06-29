import AnimeList from '@/components/AnimeList';
import Navbar from '@/components/Navbar';
import { Anime, AnimeRes } from '@/types';
import { GetStaticProps } from 'next';

const topAnimes = (): Promise<AnimeRes> =>
  fetch('https://api.jikan.moe/v4/top/anime').then((res) => res.json());

// const topAnimes = async () => {
//   let endOfList = false;
//   let page = 1;
//   let animes: Anime[] = [];
//   while (endOfList === false) {
//     const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);

//     const json = (await res.json()).data;
//     if (json) {
//       animes = [...animes, ...json];
//       endOfList = !json.length;
//     }
//     page++;
//   }

//   return animes;
// };

export const getStaticProps: GetStaticProps = async () => {
  // const test = await topAnimes();

  return {
    props: {
      topAnimes: (await topAnimes()).data,
    },
    revalidate: 4000,
  };
};

export default function BrowserAnimes({ topAnimes }: { topAnimes: Anime[] }) {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='container mx-auto space-y-5'>
          <h2 className='text-3xl'>All anime list</h2>
          <AnimeList animes={topAnimes} />
        </div>
      </div>
    </div>
  );
}

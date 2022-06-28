import AnimeList from '@/components/AnimeList';
import Navbar from '@/components/Navbar';
import { Anime, AnimeRes } from '@/types';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

const getOnAirAnimes = (): Promise<AnimeRes> =>
  fetch('https://api.jikan.moe/v4/seasons/now').then((res) => res.json());

const upcomingAnimes = (): Promise<AnimeRes> =>
  fetch('https://api.jikan.moe/v4/seasons/upcoming').then((res) => res.json());

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      onAirAnimes: (await getOnAirAnimes()).data.slice(0, 5),
      upcomingAnimes: (await upcomingAnimes()).data.slice(0, 5),
    },
    revalidate: 4000,
  };
};

const Home: NextPage<{ onAirAnimes: Anime[]; upcomingAnimes: Anime[] }> = ({
  onAirAnimes,
  upcomingAnimes,
}) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='container mx-auto space-y-5'>
          <h2 className='text-3xl'>Airing Animes</h2>
          <AnimeList animes={onAirAnimes} />
          <h2 className='text-3xl'>Upcoming Animes</h2>
          <AnimeList animes={upcomingAnimes} />
        </div>
      </div>
    </div>
  );
};

export default Home;

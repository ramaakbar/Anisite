import AnimeList from '@/components/ItemList';
import Navbar from '@/components/Navbar';
import { Anime, AnimeRes } from '@/models/Anime';

import type { GetStaticProps, NextPage } from 'next';

const getOnAirAnimes = (): Promise<AnimeRes> =>
  fetch('https://api.jikan.moe/v4/seasons/now?limit=5').then((res) =>
    res.json()
  );

const upcomingAnimes = (): Promise<AnimeRes> =>
  fetch('https://api.jikan.moe/v4/seasons/upcoming?limit=5').then((res) =>
    res.json()
  );

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      onAirAnimes: await getOnAirAnimes(),
      upcomingAnimes: await upcomingAnimes(),
    },
    revalidate: 4000,
  };
};

const Home: NextPage<{ onAirAnimes: AnimeRes; upcomingAnimes: AnimeRes }> = ({
  onAirAnimes,
  upcomingAnimes,
}) => {
  const { data: onAir } = onAirAnimes;
  const { data: upComing } = upcomingAnimes;
  return (
    <div className='min-h-screen'>
      <Navbar />

      <div
        className='w-full min-h-[60vh] md:min-h-0 lg:min-h-[60vh] lg:aspect-auto md:aspect-video bg-cover bg-center mb-5 relative'
        style={{
          backgroundImage: `url('https://r4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-c940388dd1aa5dbb86d7680f5011465d.jpg')`,
        }}
      ></div>

      <div className='p-4 mb-5 bg-white'>
        <div className='max-w-6xl mx-auto space-y-5'>
          <h2 className='text-3xl'>Airing Animes</h2>
          {onAirAnimes ? <AnimeList animes={onAir} /> : <>No anime</>}

          <h2 className='text-3xl'>Upcoming Animes</h2>
          {upcomingAnimes ? <AnimeList animes={upComing} /> : <>No anime</>}
        </div>
      </div>
    </div>
  );
};

export default Home;

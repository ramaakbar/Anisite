import AnimeList from '@/components/ItemList';
import Navbar from '@/components/Navbar';
import { Manga, MangaRes } from '@/models/Manga';
import { GetStaticProps } from 'next';

const topMangas = (): Promise<MangaRes> =>
  fetch('https://api.jikan.moe/v4/top/manga').then((res) => res.json());

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      topMangas: await topMangas(),
    },
    revalidate: 4000,
  };
};

export default function BrowseManga({ topMangas }: { topMangas: MangaRes }) {
  const { data, pagination } = topMangas;
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='max-w-6xl mx-auto space-y-5'>
          <h2 className='text-3xl'>All manga list</h2>
          {data ? <AnimeList animes={data} /> : <div>Manga not found</div>}
        </div>
      </div>
    </div>
  );
}

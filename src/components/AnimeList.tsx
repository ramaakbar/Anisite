import { Anime } from '@/types';
import AnimeCard from './AnimeCard';

export default function AnimeList({ animes }: { animes: Anime[] }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {animes.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </div>
  );
}

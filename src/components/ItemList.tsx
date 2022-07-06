import { Anime } from '@/models/Anime';
import { Manga } from '@/models/Manga';
import ItemCard from './ItemCard';

export default function ItemList({ animes }: { animes: Anime[] | Manga[] }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {animes?.map((anime) => (
        <ItemCard anime={anime} key={anime.mal_id} />
      ))}
    </div>
  );
}

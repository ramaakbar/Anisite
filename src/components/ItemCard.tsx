import { Anime } from '@/models/Anime';
import { Manga } from '@/models/Manga';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemCard({ anime }: { anime: Anime | Manga }) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className='w-full h-full space-y-2 cursor-pointer group'>
        <div className='relative aspect-[2/3] rounded-md overflow-hidden'>
          <Image
            src={anime.images['jpg'].large_image_url}
            alt='anime thumbnail'
            layout='fill'
          />
        </div>
        <h3 className='truncate font-medium text-gray-700 group-hover:text-sky-500 transition duration-300 ease-in-out'>
          {anime.title}
        </h3>
      </div>
    </Link>
  );
}

import { Anime } from '@/models/Anime';
import { Manga } from '@/models/Manga';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function ItemCard({ anime }: { anime: Anime | Manga }) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className='w-full h-full space-y-2 cursor-pointer'>
        <div className='relative aspect-[2/3] rounded-md overflow-hidden'>
          <Image
            src={anime.images['jpg'].large_image_url}
            alt='anime thumbnail'
            layout='fill'
          />
        </div>
        <h3 className='truncate font-medium'>{anime.title}</h3>
      </div>
    </Link>
  );
}

import { Anime } from '@/types';
import Image from 'next/image';

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div key={anime.mal_id} className='w-full h-full space-y-2'>
      <div className='relative aspect-[2/3] rounded-md overflow-hidden'>
        <Image
          src={anime.images['jpg'].large_image_url}
          alt='anime thumbnail'
          layout='fill'
        />
      </div>
      <h3 className='truncate font-medium'>{anime.title}</h3>
    </div>
  );
}

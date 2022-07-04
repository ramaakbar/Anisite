import Navbar from '@/components/Navbar';
import { Anime, AnimeRes } from '@/models/Anime';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  mal_id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { mal_id } = context.params as IParams;

  const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
  const data = await res.json();
  if (!data.data?.mal_id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      anime: data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch('https://api.jikan.moe/v4/anime?limit=5').then(
    (res) => res.json()
  );
  const paths = data.data.map((anime: Anime) => {
    return {
      params: {
        mal_id: `${anime.mal_id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default function AnimeDetail({ anime }: { anime: Anime }) {
  const router = useRouter();

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='p-4 mb-5'>
        <div className='max-w-6xl mx-auto space-y-5'>
          {router.isFallback ? (
            <div>Loading...</div>
          ) : (
            <>
              <h2 className='text-3xl'>{anime.title}</h2>
              <div className='flex flex-row w-full h-1/2'>
                <div className='w-1/2'>
                  <div className='relative aspect-[2/3] rounded-md overflow-hidden'>
                    <Image
                      src={anime.images['jpg'].large_image_url}
                      alt='anime thumbnail'
                      layout='fill'
                    />
                  </div>
                </div>
                <div className='w-1/2'>{anime.synopsis}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

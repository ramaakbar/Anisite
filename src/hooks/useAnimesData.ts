import { AnimeRes } from '@/models/Anime';
import { useQuery } from 'react-query';

const getTopAnimes = (page: number): Promise<AnimeRes> =>
  fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`).then((res) =>
    res.json()
  );

export const useAnimesData = (page: number) => {
  return useQuery<AnimeRes, Error>(['animes', page], () => getTopAnimes(page), {
    // initialData: topAnimes,
    staleTime: 30000,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

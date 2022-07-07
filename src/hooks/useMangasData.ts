import { MangaRes } from '@/models/Manga';
import { useQuery } from 'react-query';

export const getTopMangas = (page: number): Promise<MangaRes> =>
  fetch(`https://api.jikan.moe/v4/top/manga?page=${page}`).then((res) =>
    res.json()
  );

export const useMangasData = (page: number) => {
  return useQuery<MangaRes, Error>(['mangas', page], () => getTopMangas(page), {
    staleTime: 30000,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

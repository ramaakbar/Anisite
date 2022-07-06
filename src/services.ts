import { AnimeRes } from './models/Anime';

export const getTopAnimes = (page: number): Promise<AnimeRes> =>
  fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`).then((res) =>
    res.json()
  );

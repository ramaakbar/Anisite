import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Ani Site'
        description='Website for discovering animes and mangas, inspired by myanimelist'
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

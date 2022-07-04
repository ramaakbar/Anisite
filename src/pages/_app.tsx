import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Ani Site'
        description='Website for discovering animes and mangas, inspired by myanimelist'
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

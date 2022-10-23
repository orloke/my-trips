import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project with TypeScript e NextJs"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

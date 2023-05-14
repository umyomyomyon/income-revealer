import { AppProps } from 'next/app';
import Head from 'next/head';
import { Providers } from '../providers';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>年収revealer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
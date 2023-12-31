import Head from 'next/head';
import { Inter } from 'next/font/google';
import Homepage from 'components/Homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Squeeze</title>
        <meta name="description" content="URL shortening platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}

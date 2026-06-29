import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Addis Kidan Evangelical Church | Virginia Beach</title>
        <meta
          name="description"
          content="Addis Kidan Evangelical Church is a Christ-centered Ethiopian Evangelical church serving Virginia Beach, Norfolk, and Hampton Roads."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

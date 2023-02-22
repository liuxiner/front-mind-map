import { AppProps } from "next/app";

import DefaultLayout from "components/layout/DefaultLayout";
import Head from "next/head";

import "styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

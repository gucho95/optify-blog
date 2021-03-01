import { Footer, Header } from "style-guide";
import { Fragment } from "react";
import Head from "next/head";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default MyApp;

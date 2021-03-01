import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { Footer, Header } from "style-guide";
import { Fragment } from "react";
import Head from "next/head";

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

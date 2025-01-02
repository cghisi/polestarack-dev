import React from "react";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, navigation, settings }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon_32x32.png" type="image/png" />
      <meta name="theme-color" content="#90cdf4" />
      <link rel="apple-touch-icon" href="/favicon_64x64.png" />
      <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      <title>
        Polestar Hack - Recreate the Polestar car website experience using
        NextJS and Prismic
      </title>
      <meta
        name="description"
        content="Recreate the Polestar car website experience using NextJS and Prismic"
      />
    </Head>
    <Header navigation={navigation}></Header>
    <main>
      {children}
      <Analytics />
    </main>
    <Footer settings={settings}></Footer>
  </>
);

export default Layout;

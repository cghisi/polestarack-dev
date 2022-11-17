import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, navigation }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>
        Polestar Hack - Recreate the Polestar car website experience using
        NextJS and Prismic
      </title>
      <meta
        name="description"
        content="Your consulting team that will help you with your website, translations..."
      />
    </Head>
    <Header navigation={navigation}></Header>
    <main>{children}</main>
    <Footer></Footer>
  </>
);

export default Layout;

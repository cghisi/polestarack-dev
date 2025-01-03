import Link from "next/link";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href} legacyBehavior>
            <a {...props} />
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </main>
  );
}

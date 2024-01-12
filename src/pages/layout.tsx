import "../app/globals.css";
import Head from "next/head";
import { Metadata } from "next";
import { ReactNode } from "react";

export default function PagesLayout({ children, metadata }: { children: React.ReactNode; metadata?: Metadata }) {
  return (
    <div>
      <Head>
        {metadata && (
          <>
            <title>{metadata.title as ReactNode}</title>
            {metadata.description && ( // Conditionally render meta tag
              <meta name="description" content={metadata.description} />
            )}
          </>
        )}
      </Head>
      {children}
    </div>
  );
}

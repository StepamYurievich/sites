import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/svg" sizes="32*32" href="/img/logo.svg" />
      </Head>
      <body className="antialiased bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}

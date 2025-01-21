import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {ThemeProvider} from "next-themes";
import {Toaster} from "react-hot-toast";
import React from "react";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";

function App({Component, pageProps}: AppProps) {

  return (
    <>
      <Head>
        <title>Boiler-market</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <Provider store={store}>
        <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
          <Toaster/>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>

    </>
  )

}

export default App;

import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import "@fontsource/mulish/800.css";
import "../../public/fonts/canela/canela.css";
import "../../public/algolia/satellite.css";

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { RecoilRoot } from "recoil";
import { Provider } from "next-auth/client";

import CompBackground from "../components/CompBackground";
import theme from "../constants/theme";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Water Stories</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/chrome/chrome-favicon-16-16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Provider session={pageProps.session}>
        <ChakraProvider resetCSS theme={theme}>
          <AnimateSharedLayout>
            <AnimatePresence onExitComplete={handleExitComplete}>
              <RecoilRoot>
                <Component {...pageProps} key={router.route} />
                <CompBackground />
              </RecoilRoot>
            </AnimatePresence>
          </AnimateSharedLayout>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;

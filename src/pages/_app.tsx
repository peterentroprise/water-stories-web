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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider session={pageProps.session}>
        <ChakraProvider resetCSS theme={theme}>
          <AnimateSharedLayout>
            <AnimatePresence onExitComplete={handleExitComplete}>
              <RecoilRoot>
                <Component {...pageProps} key={router.route} />
              </RecoilRoot>
            </AnimatePresence>
          </AnimateSharedLayout>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;

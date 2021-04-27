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
      <ChakraProvider resetCSS theme={theme}>
        <AnimateSharedLayout>
          <AnimatePresence onExitComplete={handleExitComplete}>
            {/* <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  backgroundColor: "white",
                  opacity: 0,
                },
              }}
            > */}
            <Component {...pageProps} key={router.route} />
            {/* </motion.div> */}
          </AnimatePresence>
        </AnimateSharedLayout>
      </ChakraProvider>
    </>
  );
}

export default App;

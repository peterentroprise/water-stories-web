import "@fontsource/nanum-myeongjo/800.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import "@fontsource/mulish/800.css";
import "../../public/fonts/canela/canela.css";

import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import theme from "../theme";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AnimatePresence onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;

import { useLottie } from "lottie-react";

import { useColorModeValue } from "@chakra-ui/react";

import nature from "./nature.json";
import night from "./night.json";

export const Background = () => {
  const options = {
    animationData: useColorModeValue(nature, night),
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMinYMin slice",
    },
  };

  const style = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const { View } = useLottie(options, style);

  return View;
};

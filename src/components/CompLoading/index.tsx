import { CSSProperties } from "react";
import { useLottie } from "lottie-react";

import data from "./data2.json";

const CompLoading = () => {
  const options = {
    animationData: data,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMinYMin slice",
    },
  };

  const style: CSSProperties = {};

  const { View } = useLottie(options, style);
  return View;
};

export default CompLoading;

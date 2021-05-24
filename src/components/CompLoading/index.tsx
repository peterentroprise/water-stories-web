import { Flex, Progress } from "@chakra-ui/react";
// import { CSSProperties } from "react";
// import { useLottie } from "lottie-react";
// import data from "./data2.json";

const CompLoading = () => {
  // const options = {
  //   animationData: data,
  //   loop: true,
  //   autoplay: true,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMinYMin slice",
  //   },
  // };

  // const style: CSSProperties = {};

  // const { View } = useLottie(options, style);
  // return View;
  return (
    <Flex justifyContent="center">
      <Flex height="100vh" flexDirection="column">
        <Progress isIndeterminate />
      </Flex>
    </Flex>
  );
};

export default CompLoading;

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LayoutApp from "../LayoutApp";

// import MapGraph from "./MapGraph";
// import data from "../../data/mapNodes.json";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageExplore = ({ pageName }) => {
  return (
    <LayoutApp pageName="Explore">
      <MotionBox layout>
        <MotionHeading
          layout
          px="1rem"
          pt="3rem"
          pb="2rem"
          size="3xl"
          fontWeight="extrabold"
        >
          {pageName}
        </MotionHeading>
        <Box pb="30rem"></Box>
        {/* <MapGraph data={data} /> */}
      </MotionBox>
    </LayoutApp>
  );
};

export default PageExplore;

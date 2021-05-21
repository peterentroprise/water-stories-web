import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompHeader from "components/CompHeader";

// import MapGraph from "./MapGraph";
// import data from "../../data/mapNodes.json";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageExplore = () => {
  return (
    <MotionBox layout>
      <Box px="1rem">
        <CompHeader
          heading="Explore"
          text="Traverse the nodes for experience."
          action="Lost?"
          href="/client/browse"
        />
      </Box>

      <Box pb="30rem"></Box>
      {/* <MapGraph data={data} /> */}
    </MotionBox>
  );
};

export default PageExplore;

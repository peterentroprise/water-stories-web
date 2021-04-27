import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import MapGraph from "./MapGraph";
import data from "../../data/mapNodes.json";

const MotionHeading = motion(Heading);

const PageExplore = ({ pageName }) => {
  return (
    <>
      <MotionHeading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        px="1rem"
        pt="3rem"
        pb="2rem"
        size="3xl"
        fontWeight="extrabold"
      >
        {pageName}
      </MotionHeading>
      <MapGraph data={data} />
    </>
  );
};

export default PageExplore;

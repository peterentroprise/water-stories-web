import { Box, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LayoutApp from "../LayoutApp";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageClient = () => {
  return (
    <LayoutApp pageName="Hello Universe">
      <MotionBox layout>
        <Flex w="full" maxW="container.sm">
          <MotionHeading
            layout
            px="1rem"
            pt="3rem"
            pb="2rem"
            size="3xl"
            fontWeight="extrabold"
          >
            Hello Universe
          </MotionHeading>
        </Flex>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageClient;

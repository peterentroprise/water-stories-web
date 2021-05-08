import { Box, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LayoutApp from "../LayoutApp";
import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageClient = () => {
  return (
    <LayoutApp pageName="Hello Universe">
      <MotionBox layout>
        <Box px="1rem">
          <CompHeader
            heading="Hello Universe"
            text="Welcome to the experience."
            action="Find a Story"
            href="/client/browse"
          />
        </Box>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageClient;

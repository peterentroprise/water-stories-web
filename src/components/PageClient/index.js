import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);

const PageClient = () => {
  return (
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
  );
};

export default PageClient;

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
        <CompHeader
          heading="Hello Universe"
          text="Welcome to the experience."
          action="Find a Story"
          href="/client/browse"
        />
      </MotionBox>
    </LayoutApp>
  );
};

export default PageClient;

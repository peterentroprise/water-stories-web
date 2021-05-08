import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CompLink from "../CompLink";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const CompHeader = ({ heading, text, action, href = "/client" }) => {
  return (
    <MotionBox layout pt="3rem" pb="2rem" pl="1rem">
      <MotionHeading layout size="2xl" fontWeight="extrabold" pb=".5rem">
        {heading}
      </MotionHeading>
      <MotionFlex layout w="full" flexDirection="row" align="center">
        <MotionText layout fontSize="xs">
          {text}
        </MotionText>
        <CompLink href={href} useChakraLink={true}>
          <MotionText layout layout pl=".25rem" fontSize="xs" fontWeight="bold">
            {action}
          </MotionText>
        </CompLink>
      </MotionFlex>
    </MotionBox>
  );
};

export default CompHeader;

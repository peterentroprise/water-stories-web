import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompHeader from "components/CompHeader";
import { container } from "constants/motion";
import { StoryContent } from "./StoryContent";

const MotionBox = motion(Box);

const ViewBrowse = ({ content }) => {
  return (
    <MotionBox layout>
      <Box px="1rem">
        <CompHeader
          heading="Browse"
          text="Learn from these stories."
          action="Try Exploring"
          href="/client/explore"
        />
      </Box>

      <MotionBox variants={container} initial="hidden" animate="visible">
        <SimpleGrid minChildWidth="360px" spacing="1rem" pb="7rem">
          {content.map((story) => (
            <StoryContent key={story.id} story={story} />
          ))}
        </SimpleGrid>
      </MotionBox>
    </MotionBox>
  );
};

export default ViewBrowse;

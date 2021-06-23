import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompHeader from "components/CompHeader";
import { container } from "constants/motion";
import { ContentPreview } from "./ContentPreview";

const MotionBox = motion(Box);

const ViewBrowse = ({ contentPreviews }) => {
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
          {contentPreviews.map((contentPreview) => (
            <ContentPreview
              key={contentPreview.id}
              contentPreview={contentPreview}
            />
          ))}
        </SimpleGrid>
      </MotionBox>
    </MotionBox>
  );
};

export default ViewBrowse;

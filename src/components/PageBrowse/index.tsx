import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LayoutApp from "../LayoutApp";
import { StoryContent } from "./StoryContent";
import { container } from "../../constants/motion";

import { Stories } from "../../types";
import { Story } from "../../types";

type PageProps = {
  stories: Stories;
};

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageBrowse = ({ stories }: PageProps) => {
  const pageName = "Browse";
  return (
    <LayoutApp pageName={pageName}>
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

        <MotionBox variants={container} initial="hidden" animate="visible">
          {stories.map((story: Story) => (
            <StoryContent key={story.sys.id} story={story} />
          ))}
        </MotionBox>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageBrowse;

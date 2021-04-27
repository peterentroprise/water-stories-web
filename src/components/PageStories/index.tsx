import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompLayoutApp from "../../components/CompLayoutApp";
import { StoryContent } from "./StoryContent";
import StoryStack from "./StoryStack";

import { Stories } from "../../types";
import { Story } from "../../types";

type PageProps = {
  stories: Stories;
};

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageStories = ({ stories }: PageProps) => {
  const pageName = "Stories";
  return (
    <CompLayoutApp pageName={pageName}>
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
        <StoryStack>
          {stories.map((story: Story) => (
            <StoryContent key={story.sys.id} story={story} />
          ))}
        </StoryStack>
      </MotionBox>
    </CompLayoutApp>
  );
};

export default PageStories;

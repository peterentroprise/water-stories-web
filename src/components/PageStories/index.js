import React from "react";
import ReactDOM from "react-dom";
import { Box, Flex } from "@chakra-ui/react";

import { StoryContent } from "./StoryContent";
import StoryStack from "./StoryStack";

import data from "../../data/stories.json";

const PageStories = () => {
  return (
    <StoryStack>
      {data.stories.map((story) => (
        <StoryContent key={story.id} story={story} />
      ))}
    </StoryStack>
  );
};

export default PageStories;

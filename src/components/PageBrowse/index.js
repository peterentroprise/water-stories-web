import React from "react";
import { Heading } from "@chakra-ui/react";

import { StoryContent } from "./StoryContent";
import StoryStack from "./StoryStack";

import data from "../../data/stories.json";

const PageBrowse = ({ pageName }) => {
  return (
    <>
      <Heading px="1rem" pt="3rem" pb="2rem" size="3xl" fontWeight="extrabold">
        {pageName}
      </Heading>
      <StoryStack>
        {data.stories.map((story) => (
          <StoryContent key={story.id} story={story} />
        ))}
      </StoryStack>
    </>
  );
};

export default PageBrowse;

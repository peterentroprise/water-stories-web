import { Text, Tag, Box, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompLink from "../CompLink";
import CompHeader from "../CompHeader";
import CompVideoPlayer from "../CompVideoPlayer";
import { PageStoryProps } from "../../types";

import { bgColor } from "../../constants";

const MotionBox = motion(Box);

const PageStory = ({ story }: PageStoryProps) => {
  const pageName = story.storyName;
  const { colorMode } = useColorMode();
  return (
    <MotionBox layout>
      <Box pl="1rem">
        <CompHeader
          heading={pageName}
          text="Already read this story?"
          action="Find Your Next"
          href="/"
        />
      </Box>

      <Box
        borderTopRightRadius="2xl"
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 8px )",
          WebkitBackdropFilter: "blur( 8px )",
        }}
        bg={bgColor[colorMode]}
      >
        <CompVideoPlayer videoUrl={story.coverVideoUrl} />

        <Box pb="50rem">
          <Box p="1rem">
            <Text>{story.storyShortDescription}</Text>
            <Tag>{story.slug}</Tag>
            <CompLink
              href="/client/browse"
              mt={1}
              display="block"
              lineHeight="normal"
            >
              Back To Browse
            </CompLink>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default PageStory;

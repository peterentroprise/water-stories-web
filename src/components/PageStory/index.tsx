import { Text, Tag, Box, Heading, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LayoutApp from "../LayoutApp";
import CompLink from "../CompLink";
import CompVideoPlayer from "../CompVideoPlayer";
import { PageStoryProps } from "../../types";

import { bgColor } from "../../constants";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const PageStory = ({ story }: PageStoryProps) => {
  const pageName = story.storyName;
  const { colorMode } = useColorMode();
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
          {story.storyName}
        </MotionHeading>
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
    </LayoutApp>
  );
};

export default PageStory;

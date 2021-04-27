import { Text, Tag, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompLayoutApp from "../CompLayoutApp";
import CompLink from "../CompLink";
import CompVideoPlayer from "../CompVideoPlayer";
import { PageStoryProps } from "../../types";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const PageStory = ({ story }: PageStoryProps) => {
  const pageName = story.storyName;
  return (
    <CompLayoutApp pageName={pageName}>
      <MotionBox
        layout
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 8px )",
          WebkitBackdropFilter: "blur( 8px )",
        }}
      >
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
        <CompVideoPlayer videoUrl={story.coverVideoUrl} />
        <Box pb="50rem">
          <Box p="1rem">
            <Text>{story.storyShortDescription}</Text>
            <Tag>{story.slug}</Tag>
            <CompLink
              href="/client/stories"
              mt={1}
              display="block"
              lineHeight="normal"
            >
              Back To Browse
            </CompLink>
          </Box>
        </Box>
      </MotionBox>
    </CompLayoutApp>
  );
};

export default PageStory;

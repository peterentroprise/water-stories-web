import { Text, Tag, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompHeader from "components/CompHeader";
import CompVideoPlayer from "components/CompVideoPlayer";

const MotionBox = motion(Box);

const ViewStory = ({ story }) => {
  return (
    <MotionBox layout>
      <Box pl="1rem">
        <CompHeader
          heading={story.title}
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
      >
        <CompVideoPlayer videoUrl={story.videoUrl} />

        <Box pb="6rem">
          <Box p="1rem">
            <Text fontWeight="semibold" fontSize="lg" mb=".5rem">
              {story.subTitle}
            </Text>
            <Tag mb=".5rem">{story.slug}</Tag>
            <Text>{story.description}</Text>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default ViewStory;

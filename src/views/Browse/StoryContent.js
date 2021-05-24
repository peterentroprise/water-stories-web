import {
  Box,
  Flex,
  Text,
  AspectRatio,
  Image,
  Tag,
  LinkBox,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { LinkOverlay } from "components/CompLink";
import { textColor, bgColor } from "constants/index";
import { item } from "constants/motion";

const MotionBox = motion(Box);

export const StoryContent = ({ story }) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      borderRadius="sm"
      overflow="hidden"
      variants={item}
      borderTopRightRadius="2xl"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 8px )",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <LinkBox>
        <AspectRatio ratio={16 / 9}>
          <Image
            borderRadius="sm"
            borderTopRightRadius="2xl"
            src={story.coverImage.url}
            alt="Moat"
            objectFit="cover"
          />
        </AspectRatio>
        <Box p="1rem">
          <Box mt=".5rem">
            <LinkOverlay href={`/client/stories/${story.slug}`}></LinkOverlay>
            <Text
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
            >
              {story.title}
            </Text>

            <Box mt=".5rem" isTruncated>
              {story.description}
            </Box>
          </Box>

          <Flex my=".5rem" alignItems="baseline">
            <Tag>{story.slug}</Tag>
          </Flex>
        </Box>
      </LinkBox>
    </MotionBox>
  );
};

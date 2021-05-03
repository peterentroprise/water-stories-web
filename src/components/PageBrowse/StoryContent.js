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

import { LinkOverlay } from "../CompLink";

import { textColor, bgColor } from "../../constants";
import { item } from "../../constants/motion";

const MotionBox = motion(Box);

export const StoryContent = ({ story }) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      borderRadius="sm"
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
              {story.storyName}
            </Text>

            <Text mt=".5rem">{story.storyShortDescription}</Text>
          </Box>

          <Flex my=".5rem" alignItems="baseline">
            <Tag>{story.slug}</Tag>
          </Flex>
        </Box>
      </LinkBox>
    </MotionBox>
  );
};

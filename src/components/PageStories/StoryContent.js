import {
  Box,
  Flex,
  Text,
  AspectRatio,
  Image,
  Tag,
  useColorMode,
} from "@chakra-ui/react";

import Link from "../CompLink";

export const StoryContent = ({ story }) => {
  const { colorMode } = useColorMode();
  console.log(story);

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.9 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <Box
      borderRadius="sm"
      borderTopRightRadius="2xl"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 8px )",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
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
          <Link
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href={`/client/stories/${story.sys.id}`}
          >
            {story.storyName}
          </Link>

          <Text mt=".5rem">{story.storyShortDescription}</Text>
        </Box>

        <Flex my=".5rem" alignItems="baseline">
          <Tag>{story.slug}</Tag>
        </Flex>
      </Box>
    </Box>
  );
};

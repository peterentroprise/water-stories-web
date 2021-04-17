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

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.5 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <Box
      maxW="container.sm"
      borderRadius="2xl"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          borderRadius="md"
          borderTopLeftRadius="2xl"
          borderTopRightRadius="2xl"
          src={story.video}
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
            href={`/app/story/${story.id}`}
          >
            {story.title}
          </Link>
          <Text mt=".5rem">{story.description}</Text>
        </Box>

        <Flex my=".5rem" alignItems="baseline">
          <Tag>{story.tag}</Tag>
        </Flex>
      </Box>
    </Box>
  );
};

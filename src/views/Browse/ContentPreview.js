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

export const ContentPreview = ({ contentPreview }) => {
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
            src={contentPreview.coverImage.url}
            alt="Moat"
            objectFit="cover"
          />
        </AspectRatio>
        <Box p="1rem">
          <Box mt=".5rem">
            <LinkOverlay
              href={`/client/content/${contentPreview.slug}`}
            ></LinkOverlay>
            <Text
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
            >
              {contentPreview.title}
            </Text>
            <Box mt=".5rem" isTruncated>
              {contentPreview.description}
            </Box>
          </Box>
          <Flex my=".5rem" alignItems="baseline">
            {contentPreview.tags.map((tag) => (
              <Tag key={tag} mr=".5rem">
                {tag}
              </Tag>
            ))}
          </Flex>
        </Box>
      </LinkBox>
    </MotionBox>
  );
};

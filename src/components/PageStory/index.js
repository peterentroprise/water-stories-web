import { Text, Tag, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CompLink from "../CompLink";

const MotionBox = motion(Box);

const transition = {
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "-50%", opacity: 0, transition },
  enter: { y: "0%", opacity: 1, transition },
};

const contentVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition },
};

const PageStory = ({ id, story }) => {
  return (
    <>
      <CompLink href="/app/stories" mt={1} display="block" lineHeight="normal">
        Back To Stories
      </CompLink>
      <MotionBox py="1rem" variants={imageVariants}>
        <Image borderRadius="md" src={story.video} alt="Moat" />
      </MotionBox>
      <MotionBox pb="1.5rem" py="1rem" variants={contentVariants}>
        <>
          <Text>{story.title}</Text>
          <Text>{id}</Text>
          <Text>{story.description}</Text>
          <Tag>{story.tag}</Tag>
        </>
      </MotionBox>
    </>
  );
};

export default PageStory;

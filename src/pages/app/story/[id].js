import * as React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import CompLayoutApp from "../../../components/CompLayoutApp";
import PageStory from "../../../components/PageStory";
import data from "../../../data/stories.json";

const MotionBox = motion(Box);

const Story = ({ id, story }) => {
  return (
    <CompLayoutApp pageName={story.name}>
      <MotionBox initial="exit" animate="enter" exit="exit">
        <PageStory id={id} story={story} />
      </MotionBox>
    </CompLayoutApp>
  );
};

export async function getStaticProps({ params }) {
  const id = Number.parseInt(params.id, 10);
  const story = data.stories[id];

  return {
    props: {
      id: id,
      story: story,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: data.stories.map((story) => {
      return {
        params: {
          id: story.id,
        },
      };
    }),
    fallback: false,
  };
}

export default Story;

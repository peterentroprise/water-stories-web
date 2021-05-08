import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { request } from "graphql-request";
import useSWR from "swr";

import LayoutApp from "../LayoutApp";
import { StoryContent } from "./StoryContent";
import { container } from "../../constants/motion";
import { GET_STORY_COLLECTION } from "../../gql/story";
import {
  CONTENTFUL_API_URL,
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
} from "../../constants/contentful";
import { count } from "d3-array";

import { graphQLClient } from "../../utils/graphqlClient";
import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const fetcher = async (query) => await graphQLClient.request(query);

const PageBrowse = ({ stories }) => {
  const { data, error } = useSWR(GET_STORY_COLLECTION, fetcher);

  const pageName = "Browse";
  return (
    <LayoutApp pageName={pageName}>
      <MotionBox layout>
        <Box px="1rem">
          <CompHeader
            heading="Browse"
            text="Learn from these stories."
            action="Try Exploring"
            href="/client/explore"
          />
        </Box>

        <MotionBox variants={container} initial="hidden" animate="visible">
          <SimpleGrid minChildWidth="360px" spacing="1rem" pb="3rem">
            {stories.map((story) => (
              <StoryContent key={story.sys.id} story={story} />
            ))}
            {data &&
              data.storyCollection.items.map((story) => (
                <StoryContent key={story.sys.id} story={story} />
              ))}
          </SimpleGrid>
        </MotionBox>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageBrowse;

import dynamic from "next/dynamic";
import {
  Text,
  Tag,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuery } from "urql";

import CompHeader from "components/CompHeader";
import CompLoading from "components/CompLoading";

import { GET_CONTENT_PAYLOAD_BY_ID } from "gql/content";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  loading: () => <CompLoading />,
  ssr: false,
});

const PreviewPlayer = dynamic(() => import("./PreviewPlayer"), {
  loading: () => <CompLoading />,
  ssr: false,
});

const MotionBox = motion(Box);

const ViewContent = ({ contentPreview }) => {
  const [result] = useQuery({
    query: GET_CONTENT_PAYLOAD_BY_ID,
    variables: { id: contentPreview.content.contentPayload.id },
  });
  const { data, fetching, error } = result;
  if (fetching) return <CompLoading />;
  if (error) return <CompLoading />;
  return (
    <MotionBox layout>
      <Box pl="1rem">
        <CompHeader
          heading={contentPreview.title}
          text={contentPreview.subTitle}
          action="back to browse"
          href="/client/browse"
        />
      </Box>

      <Box
        borderTopRightRadius="2xl"
        pb="6rem"
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 8px )",
          WebkitBackdropFilter: "blur( 8px )",
        }}
      >
        <Tabs isFitted>
          <Box bg="white" position="sticky" top="0px" zIndex={10}>
            <VideoPlayer videoSrc={data.contentPayload.videoUrl} />
            <TabList>
              <Tab fontWeight="bold" fontSize="14px">
                Time Clips
              </Tab>
              <Tab fontWeight="bold" fontSize="14px">
                Transcript
              </Tab>
              <Tab fontWeight="bold" fontSize="14px">
                Information
              </Tab>
            </TabList>
          </Box>

          <TabPanels>
            <TabPanel>
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={5}
              />
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={10}
              />
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={15}
              />
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={20}
              />
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={25}
              />
              <PreviewPlayer
                videoSrc={data.contentPayload.videoUrl}
                startTime={30}
              />
            </TabPanel>
            <TabPanel>
              <Text>{contentPreview.description}</Text>
            </TabPanel>
            <TabPanel>
              <Text fontWeight="semibold" fontSize="lg" mb=".5rem">
                {contentPreview.subTitle}
              </Text>
              <Tag mb=".5rem">{contentPreview.slug}</Tag>
              <Text>{contentPreview.description}</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MotionBox>
  );
};

export default ViewContent;

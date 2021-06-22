import dynamic from "next/dynamic";
import { Text, Tag, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuery } from "urql";

import CompHeader from "components/CompHeader";
import CompLoading from "components/CompLoading";

import { GET_CONTENT_PAYLOAD_BY_ID } from "gql/content";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
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
        <VideoPlayer videoSrc={data.contentPayload.videoUrl} />
        <Box pb="6rem">
          <Box p="1rem">
            <Text fontWeight="semibold" fontSize="lg" mb=".5rem">
              {contentPreview.subTitle}
            </Text>
            <Tag mb=".5rem">{contentPreview.slug}</Tag>
            <Text>{contentPreview.description}</Text>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default ViewContent;

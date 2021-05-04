import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import CompLoading from "../CompLoading";

const Player = dynamic(() => import("./player"), {
  loading: () => <CompLoading />,
  ssr: false,
});

const CompVideoPlayer = ({ videoUrl }) => {
  return (
    <Box position="sticky" top={0}>
      <Player videoUrl={videoUrl} />
    </Box>
  );
};

export default CompVideoPlayer;

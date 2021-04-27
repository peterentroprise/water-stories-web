import React from "react";
import ReactJWPlayer from "react-jw-player";
import { Box } from "@chakra-ui/react";

const CompVideoPlayer = ({ videoUrl }) => {
  return (
    <Box position="sticky" top={0}>
      <ReactJWPlayer
        playerId="jw-player"
        playerScript="https://cdn.jwplayer.com/libraries/zu9ZTlIy.js"
        file={videoUrl}
      />
    </Box>
  );
};

export default CompVideoPlayer;

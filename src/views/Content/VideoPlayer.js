import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Text, Avatar, AspectRatio } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useFlowplayer } from "@flowplayer/react-flowplayer";
import { PAUSE, PLAYING } from "@flowplayer/player/core/events";
import SubtitlesPlugin from "@flowplayer/player/plugins/subtitles";
import OVPPlugin from "@flowplayer/player/plugins/ovp";
import flowplayer from "@flowplayer/player";

import "@flowplayer/player/flowplayer.css";

import { NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN } from "lib/config";

flowplayer(SubtitlesPlugin, OVPPlugin);

const MotionBox = motion(Box);

const VideoPlayer = ({ videoSrc }) => {
  const { Flowplayer, api: playerApi } = useFlowplayer({
    token: NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN,
  });

  return (
    <Box position="sticky" top="0px" zIndex={10}>
      <Flowplayer
        src="eb0a7b6f-ae7e-4525-882b-959d0e7adda7"
        multiplay={true}
        autopause={false}
      />
    </Box>
  );
};

export default VideoPlayer;

import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Text, Avatar, AspectRatio } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useFlowplayer } from "@flowplayer/react-flowplayer";
import { PAUSE, PLAYING } from "@flowplayer/player/core/events";

import "@flowplayer/player/flowplayer.css";

import { NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN } from "lib/config";

const SOURCES = [
  "https://cdn.flowplayer.com/demo_videos/jumping_waves/1080p.mp4",
  "https://cdn.flowplayer.com/demo_videos/sunset/1080p.mp4",
  "https://cdn.flowplayer.com/demo_videos/crashing_waves/1080p.mp4",
];

const MotionBox = motion(Box);

const VideoPlayer = ({ session }) => {
  const { Flowplayer, api: playerApi } = useFlowplayer({
    token: NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN,
  });

  const [demoPlaybackState, setDemoPlaybackState] = useState("paused");

  const [demoSrc, setDemoSrc] = useState(SOURCES[0]);

  const togglePlay = () => {
    if (!playerApi) return;
    playerApi.togglePlay();
  };

  const toggleSrc = () => {
    const nextIndex = SOURCES.indexOf(demoSrc) + 1;
    setDemoSrc(SOURCES[nextIndex] || SOURCES[0]);
  };

  useEffect(() => {
    if (!playerApi) return;
    function stateHandler(ev) {
      if (ev.type === PAUSE) setDemoPlaybackState("paused");
      if (ev.type === PLAYING) setDemoPlaybackState("playing");
    }

    playerApi.on([PAUSE, PLAYING], stateHandler);

    return () => {
      if (!playerApi) return;
      playerApi.off(PAUSE, stateHandler);
      playerApi.off(PLAYING, stateHandler);
    };
  }, [playerApi]);
  return (
    <Box position="sticky" top="0px" zIndex={10}>
      <Flowplayer src={demoSrc} multiplay={true} autopause={false} />
      {/* <Text>{demoPlaybackState}</Text>
      <Button onClick={togglePlay}>Play / pause</Button>
      <Button onClick={toggleSrc}>Toggle source</Button> */}
    </Box>
  );
};

export default VideoPlayer;

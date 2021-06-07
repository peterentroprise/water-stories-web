import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Text, Avatar, Flex } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useFlowplayer } from "@flowplayer/react-flowplayer";
import { PAUSE, PLAYING } from "@flowplayer/player/core/events";

import "@flowplayer/player/flowplayer.css";

const DEMO_TOKEN = "bdf02b34-7cd8-4a3e-9f9c-f1084663f94b";

const SOURCES = [
  "//edge.flowplayer.org/bauhaus.mp4",
  "//edge.flowplayer.org/functional.mp4",
];

const MotionBox = motion(Box);

const ViewPlayer = ({ session }) => {
  const { Flowplayer, api: playerApi } = useFlowplayer({ token: DEMO_TOKEN });

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
    <MotionBox layout>
      <Flowplayer src={demoSrc} />
      <Text>{demoPlaybackState}</Text>
      <Button onClick={togglePlay}>Play / pause</Button>
      <Button onClick={toggleSrc}>Toggle source</Button>
    </MotionBox>
  );
};

export default ViewPlayer;

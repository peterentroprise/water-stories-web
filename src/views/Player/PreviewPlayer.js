import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Text, Avatar, AspectRatio } from "@chakra-ui/react";

import { useFlowplayer } from "@flowplayer/react-flowplayer";
import { PAUSE, PLAYING } from "@flowplayer/player/core/events";
import SubtitlesPlugin from "@flowplayer/player/plugins/subtitles";
import OVPPlugin from "@flowplayer/player/plugins/ovp";
import flowplayer from "@flowplayer/player";

import "@flowplayer/player/flowplayer.css";

import { NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN } from "lib/config";

const SOURCES = [
  "https://cdn.flowplayer.com/demo_videos/jumping_waves/1080p.mp4",
  "https://cdn.flowplayer.com/demo_videos/sunset/1080p.mp4",
  "https://cdn.flowplayer.com/demo_videos/crashing_waves/1080p.mp4",
];

const VTT_FILE =
  "https://ljsp.lwcdn.com/sub/c5d08883-e427-4bfa-aea9-71e483608b50/671d8371-5824-46ee-8397-beba99182e46/s-7b9b08d8-ecc5-4289-8e59-91df5c2341ee.vtt";

const subtitles = {
  tracks: [
    {
      src: VTT_FILE,
      label: "English",
      id: "English-en",
      default: true,
      crossorigin: "anonymous",
    },
  ],
};

flowplayer(SubtitlesPlugin, OVPPlugin);

const PreviewPlayer = ({ startTime }) => {
  const { Flowplayer, api: playerApi } = useFlowplayer({
    token: NEXT_PUBLIC_FLOWPLAYER_PLAYER_TOKEN,
  });

  const [demoPlaybackState, setDemoPlaybackState] = useState("paused");

  const [demoSrc, setDemoSrc] = useState(SOURCES[0]);

  const togglePlay = () => {
    if (!playerApi) return;
    playerApi.Play();
  };

  const toggleSrc = () => {
    const nextIndex = SOURCES.indexOf(demoSrc) + 1;
    setDemoSrc(SOURCES[nextIndex] || SOURCES[0]);
  };

  const hoverPlay = () => {
    if (!playerApi) return;
    console.log("hover- enter");
    playerApi.play();
  };

  const hoverPause = () => {
    if (!playerApi) return;
    console.log("hover- exit");
    playerApi.pause();
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
    <Box
      onMouseOver={hoverPlay}
      onMouseLeave={hoverPause}
      onTouchStart={hoverPlay}
      onTouchEnd={hoverPause}
    >
      <Flowplayer
        src={demoSrc}
        muted
        multiplay={true}
        autopause={false}
        start_time={startTime}
        subtitles={subtitles}
        ui={flowplayer.ui.NO_CONTROLS}
      />
    </Box>
  );
};

export default PreviewPlayer;

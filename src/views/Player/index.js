import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import VideoPlayer from "./VideoPlayer";
import PreviewPlayer from "./PreviewPlayer";

const MotionBox = motion(Box);

const ViewPlayer = ({ session }) => {
  return (
    <MotionBox layout>
      <VideoPlayer />
      <PreviewPlayer startTime={5} />
      <PreviewPlayer startTime={10} />
      <PreviewPlayer startTime={15} />
      <PreviewPlayer startTime={20} />
      <PreviewPlayer startTime={25} />
      <PreviewPlayer startTime={30} />
    </MotionBox>
  );
};

export default ViewPlayer;

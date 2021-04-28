import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

const StoryStack = ({ children }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <MotionVStack
      variant={container}
      initial="hidden"
      animate="visible"
      spacing="1rem"
      align="stretch"
    >
      {children}
    </MotionVStack>
  );
};

export default StoryStack;

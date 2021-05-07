import { Button, Box, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";

import LayoutApp from "../LayoutApp";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageAuthClient = ({ providers }) => {
  const router = useRouter();
  return (
    <LayoutApp pageName="Sign In">
      <MotionBox layout px="1rem">
        <Flex w="full" maxW="container.sm">
          <MotionHeading
            layout
            pt="3rem"
            pb="2rem"
            size="3xl"
            fontWeight="extrabold"
          >
            Sign In
          </MotionHeading>
        </Flex>
        <Box>
          {Object.values(providers).map((provider) => (
            <Box key={provider.name}>
              <Button
                mb="1rem"
                onClick={() =>
                  signIn(provider.id, { callbackUrl: router.query.callbackUrl })
                }
              >
                Sign in with {provider.name}
              </Button>
            </Box>
          ))}
        </Box>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageAuthClient;

import { Button, Flex, Text, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";

import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FaApple } from "react-icons/fa";

import LayoutApp from "../LayoutApp";
import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageAuthClient = ({ providers }) => {
  const router = useRouter();

  const providerDisplay = {
    Google: { icon: <FcGoogle />, name: "Google" },
    Apple: { icon: <FaApple />, name: "Apple" },
    Auth0: { icon: <HiOutlineMail />, name: "Email" },
  };
  return (
    <LayoutApp pageName="Sign In">
      <MotionBox layout maxW="container.sm" px="1rem">
        <CompHeader
          heading="Sign In"
          text="Don't want to sign in?"
          action="Continue Without"
        />
        <Flex flexDirection="column" align={["left", "left", "left", "left"]}>
          {Object.values(providers).map((provider) => (
            <>
              {provider.name == "Auth0" && (
                <Flex
                  key="auth-option-divider"
                  w="full"
                  flexDirection="row"
                  my=".5rem"
                >
                  <Flex w="1.5rem" flexDirection="column">
                    <Box mb="1rem" />
                    <Box borderTop="1px" borderColor="gray.50" mb="1rem" />
                  </Flex>
                  <Flex align="center">
                    <Text flexGrow="1" px="1rem" color="gray.100">
                      or
                    </Text>
                  </Flex>

                  <Flex flexGrow="1" flexDirection="column">
                    <Box mb="1rem" />
                    <Box borderTop="1px" borderColor="gray.50" mb="1rem" />
                  </Flex>
                </Flex>
              )}
              <Box key={provider.name}>
                <Button
                  leftIcon={providerDisplay[provider.name].icon}
                  my=".5rem"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: router.query.callbackUrl,
                    })
                  }
                >
                  Sign in with {providerDisplay[provider.name].name}
                </Button>
              </Box>
            </>
          ))}
        </Flex>
      </MotionBox>
    </LayoutApp>
  );
};

export default PageAuthClient;

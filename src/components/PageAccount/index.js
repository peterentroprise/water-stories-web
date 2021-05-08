import { Box, Button, Text, Avatar, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/client";

import LayoutApp from "../LayoutApp";
import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageClient = () => {
  const [session, loading] = useSession();

  return (
    <LayoutApp pageName="Account">
      <MotionBox layout px="1rem">
        <CompHeader
          heading="Account"
          text="Thank you for being."
          action="Find Your Community"
          href="/"
        />
        {(session && (
          <Box>
            <Flex>
              {session.user.image && (
                <Avatar
                  mr="1rem"
                  src={session.user.image}
                  name={session.user.name}
                />
              )}
              <Box>
                <Text>Signed in as</Text>
                <Text>{session.user.email || session.user.name}</Text>
              </Box>
            </Flex>
            <Button
              mt="1rem"
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </Button>
          </Box>
        )) || (
          <Button
            href={`/client/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Button>
        )}
      </MotionBox>
    </LayoutApp>
  );
};

export default PageClient;

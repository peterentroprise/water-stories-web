import { Box, Button, Text, Avatar, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { signOut } from "next-auth/client";

import LayoutApp from "../LayoutApp";
import CompHeader from "../../components/CompHeader";

const MotionBox = motion(Box);

const PageClient = ({ session }) => {
  return (
    <LayoutApp pageName="Account">
      <MotionBox layout px="1rem">
        <CompHeader
          heading="Account"
          text="Thank you for being."
          action="Find Your Community"
          href="/"
        />
        <Box>
          <Flex>
            <Avatar
              mr="1rem"
              src={session.user.image}
              name={session.user.name}
            />
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
      </MotionBox>
    </LayoutApp>
  );
};

export default PageClient;

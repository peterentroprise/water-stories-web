import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/client";
import { setHeader } from "graphql-request";
import useSWR from "swr";
import { hasuraClient } from "../../utils/hasuraClient";
import { GET_USER_BY_PK } from "../../gql/user";
import { HASURA_API_URL } from "../../constants/hasura";

import LayoutApp from "../LayoutApp";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const PageClient = () => {
  const [session, loading] = useSession();

  const fetcher = async (query, variables, headers) =>
    await hasuraClient.request(query, variables, headers);

  const variables = {
    id: "123",
  };

  const requestHeaders = {
    authorization: "asd",
  };

  const { data, error } = useSWR(
    GET_USER_BY_PK,
    variables,
    requestHeaders,
    fetcher
  );
  return (
    <LayoutApp pageName="Account">
      <MotionBox layout>
        <Flex w="full" maxW="container.sm">
          <MotionHeading
            layout
            px="1rem"
            pt="3rem"
            pb="2rem"
            size="3xl"
            fontWeight="extrabold"
          >
            Account
          </MotionHeading>
        </Flex>
      </MotionBox>
      <Button
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign In
      </Button>
      {session && (
        <>
          {console.log({ data, session })}
          {session.user.image && (
            <span style={{ backgroundImage: `url(${session.user.image})` }} />
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </LayoutApp>
  );
};

export default PageClient;

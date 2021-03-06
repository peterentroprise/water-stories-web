import { Avatar, Flex, Text, Box, VStack, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { useMobileMenuState } from "../../../hooks/useMobileMenuState";

export const AccountButton = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const { closeMobileMenu } = useMobileMenuState();
  return (
    <Box
      as="button"
      href={(session && "/client/account") || "/client/auth/signin"}
      onClick={(e) => {
        if (!session) {
          e.preventDefault();
          closeMobileMenu();
          signIn();
        }
        if (session) {
          e.preventDefault();
          closeMobileMenu();
          router.push("/client/account");
        }
      }}
      width="full"
      pl="1rem"
      pr="1.5rem"
      py=".5rem"
      bg="white"
      borderTopRightRadius="1rem"
      borderBottomRightRadius="1rem"
      bg="gray.50"
      _hover={{}}
      _active={{}}
      _focus={{}}
      // boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
    >
      <Flex>
        <Avatar
          name={(session && session.user.name) || "Anonymous User"}
          src={(session && session.user.image) || ""}
          mr="1rem"
          size="md"
          borderRadius="1rem"
        />
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text textAlign="left" fontSize="sm" fontWeight="bold">
            {(session && session.user.name) || "Anonymous User"}
          </Text>
          <Text textAlign="left" fontSize="xs" color="">
            {(session && session.user.email) || "Sign in for more"}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

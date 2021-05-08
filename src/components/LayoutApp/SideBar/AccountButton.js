import { Avatar, Flex, Text, Box, VStack, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
export const AccountButton = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  return (
    <Box
      as="button"
      href={(session && "/client/account") || "/client/auth/signin"}
      onClick={(e) => {
        if (!session) {
          e.preventDefault();
          signIn();
        }
        if (session) {
          e.preventDefault();
          router.push("/client/account");
        }
      }}
      width="full"
      pl="1rem"
      pr="1rem"
      py=".5rem"
      bg="gray.50"
      borderTopRightRadius="1rem"
      borderBottomRightRadius="1rem"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
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

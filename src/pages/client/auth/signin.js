import { getProviders, signIn } from "next-auth/client";
import { Button, Box } from "@chakra-ui/react";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <Box key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </Box>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

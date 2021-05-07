import { useRouter } from "next/router";
import { getProviders, signIn } from "next-auth/client";
import { Button, Box } from "@chakra-ui/react";

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <>
      {Object.values(providers).map((provider) => (
        <Box key={provider.name}>
          <Button
            onClick={() =>
              signIn(provider.id, { callbackUrl: router.query.callbackUrl })
            }
          >
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

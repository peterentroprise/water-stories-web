import { useRouter } from "next/router";
import { getProviders } from "next-auth/client";
import PageAuthSignIn from "../../../components/PageAuthSignIn";

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <>
      <PageAuthSignIn providers={providers} />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

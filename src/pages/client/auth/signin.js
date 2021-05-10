import { useRouter } from "next/router";
import { getProviders, getSession, useSession } from "next-auth/client";
import PageAuthSignIn from "../../../components/PageAuthSignIn";

export default function SignIn({ providers }) {
  const router = useRouter();
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (session) return router.push("/client/account");
  if (!session) return <PageAuthSignIn providers={providers} />;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  const { req, res } = context;

  if (session) {
    res.writeHead(302, { Location: "/client/account" });
    res.end();
    return {
      props: { providers, session },
    };
  }
  if (!session) {
    return {
      props: { providers },
    };
  }
}

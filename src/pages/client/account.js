import { getSession, useSession } from "next-auth/client";

import LayoutApp from "components/LayoutApp";
import PageAccount from "components/PageAccount";

const Account = () => {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (session) return <PageAccount session={session} />;
  if (!session) return router.push("/client/auth/signin");
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { req, res } = context;

  if (session) {
    return {
      props: { session },
    };
  }

  if (!session) {
    res.writeHead(302, { Location: "/client/auth/signin" });
    res.end();
    return {
      props: {},
    };
  }
}

export default Account;

Account.Layout = LayoutApp;

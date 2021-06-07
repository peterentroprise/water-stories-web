import dynamic from "next/dynamic";
import { getSession, useSession } from "next-auth/client";

import CompLoading from "components/CompLoading";
import LayoutApp from "components/LayoutApp";

const ViewPlayer = dynamic(() => import("views/Player"), {
  loading: () => <CompLoading />,
  ssr: false,
});

const Player = () => {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (session) return <ViewPlayer session={session} />;
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

export default Player;

Player.Layout = LayoutApp;

// import dynamic from "next/dynamic";
// import CompLoading from "../../components/CompLoading";
import PageExplore from "components/PageExplore";
import LayoutApp from "components/LayoutApp";

// const PageExplore = dynamic(() => import("../../components/PageExplore"), {
//   loading: () => <CompLoading />,
//   ssr: false,
// });

const Explore = () => {
  return <PageExplore />;
};

export default Explore;
Explore.Layout = LayoutApp;

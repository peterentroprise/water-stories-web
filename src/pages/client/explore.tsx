// import dynamic from "next/dynamic";
// import CompLoading from "../../components/CompLoading";
import PageExplore from "../../components/PageExplore";

// const PageExplore = dynamic(() => import("../../components/PageExplore"), {
//   loading: () => <CompLoading />,
//   ssr: false,
// });

const Map = () => {
  return <PageExplore pageName="Explore" />;
};

export default Map;

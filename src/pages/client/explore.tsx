import dynamic from "next/dynamic";

const PageExplore = dynamic(() => import("../../components/PageExplore"), {
  ssr: false,
});

const Map = () => {
  return <PageExplore pageName="Explore" />;
};

export default Map;

import dynamic from "next/dynamic";

import LayoutApp from "../../components/LayoutApp";

const PageExplore = dynamic(() => import("../../components/PageExplore"), {
  ssr: false,
});

const Map = () => {
  return (
    <LayoutApp pageName="Explore">
      <PageExplore pageName="Explore" />
    </LayoutApp>
  );
};

export default Map;

import dynamic from "next/dynamic";

import CompLayoutApp from "../../components/CompLayoutApp";

const PageExplore = dynamic(() => import("../../components/PageExplore"), {
  ssr: false,
});

const Map = () => {
  return (
    <CompLayoutApp pageName="Explore">
      <PageExplore pageName="Explore" />
    </CompLayoutApp>
  );
};

export default Map;
